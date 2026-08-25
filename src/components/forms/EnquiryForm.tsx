import { useId, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AlertCircle, CheckCircle, ChevronDown, Loader2, Send } from 'lucide-react';
import { Field, TextArea, TextInput } from '../ui/FormField';
import { packageData } from '../../data/packageData';
import { countryCodes } from '../../data/countryCodes';
import { submitEnquiry, EnquiryData } from '../../utils/submitEnquiry';
import { trackEvent } from '../../utils/analytics';
import { CONTACT_EMAIL, CONTACT_PHONE } from '../../config/site';

interface EnquiryFormProps {
  /** GA4 category, e.g. 'contact_page' or 'home_contact'. */
  gaCategory: string;
  /** Preselects a package radio — pass a package title. */
  defaultPackage?: string;
}

/**
 * The form's local field state. Phone is split into a country-code select and
 * a digits-only number so each half can be validated on its own; they're
 * joined into EnquiryData's single `phone` string right before submitting, so
 * the Apps Script backend and Sheet columns need no changes.
 */
type EnquiryFormValues = Omit<EnquiryData, 'phone'> & {
  phoneCountryCode: string;
  phoneNumber: string;
};

const DEFAULT_PHONE_COUNTRY_CODE = '+91';

type Status = 'idle' | 'submitting' | 'success' | 'error';

/** Today as yyyy-mm-dd in local time, for the date input's `min`. */
const todayISO = () => {
  const now = new Date();
  const offsetMs = now.getTimezoneOffset() * 60 * 1000;
  return new Date(now.getTime() - offsetMs).toISOString().slice(0, 10);
};

const EnquiryForm = ({ gaCategory, defaultPackage }: EnquiryFormProps) => {
  // Namespaced ids keep label/control wiring valid when two forms share a page.
  const uid = useId();
  const fieldId = (name: string) => `${uid}-${name}`;

  const [status, setStatus] = useState<Status>('idle');

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<EnquiryFormValues>({
    defaultValues: { package: defaultPackage ?? '', phoneCountryCode: DEFAULT_PHONE_COUNTRY_CODE },
  });

  const phoneCountryCode = watch('phoneCountryCode');

  // The 176-country dial-code list is ~380 words of country names. Rendered up
  // front it lands in the prerendered HTML of every page carrying this form
  // (home, contact, packages and all three package pages), diluting the actual
  // page text with a list that has nothing to do with the topic. So render only
  // the selected option until the user actually reaches for the control.
  //
  // Deliberately triggered by input events, not by an effect: the prerenderer
  // waits for the page to settle before snapshotting, so anything populated in
  // a mount effect still ends up in the captured HTML. mousedown/touchstart/
  // focus are discrete events, which React flushes synchronously — the options
  // are in the DOM before the browser opens the native dropdown.
  const [countryListReady, setCountryListReady] = useState(false);
  const revealCountryList = () => {
    if (!countryListReady) setCountryListReady(true);
  };

  const countryOptions = countryListReady
    ? countryCodes
    : countryCodes.filter((c) => c.dialCode === phoneCountryCode).slice(0, 1);

  const onSubmit = async ({ phoneCountryCode, phoneNumber, ...rest }: EnquiryFormValues) => {
    setStatus('submitting');
    const { ok } = await submitEnquiry({ ...rest, phone: `${phoneCountryCode} ${phoneNumber}` });

    if (ok) {
      setStatus('success');
      reset({ package: defaultPackage ?? '', phoneCountryCode: DEFAULT_PHONE_COUNTRY_CODE });
      trackEvent({ category: gaCategory, action: 'submit', label: 'lead_form' });
    } else {
      setStatus('error');
      trackEvent({ category: gaCategory, action: 'submit_error', label: 'lead_form' });
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-success-50 border border-success-200 rounded-lg p-8 text-center">
        <CheckCircle className="text-success-600 mx-auto mb-4" size={48} />
        <h3 className="text-2xl font-bold mb-2">Enquiry received</h3>
        <p className="text-neutral-700 mb-6">
          Thank you — we have your details and will get back to you within one business day. For
          anything urgent, call us on{' '}
          <a href={`tel:${CONTACT_PHONE}`} className="text-primary-600 hover:underline">
            (+91) 9893486893
          </a>
          .
        </p>
        <button type="button" onClick={() => setStatus('idle')} className="btn btn-outline">
          Send another enquiry
        </button>
      </div>
    );
  }

  const submitting = status === 'submitting';

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Field
          htmlFor={fieldId('name')}
          label="Full name"
          required
          error={errors.name?.message}
        >
          <TextInput
            id={fieldId('name')}
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            disabled={submitting}
            hasError={!!errors.name}
            {...register('name', {
              required: 'Please enter your name',
              maxLength: { value: 100, message: 'Name is too long' },
              pattern: {
                value: /^[A-Za-z][A-Za-z '-]*$/,
                message: 'Name can only contain letters, spaces, hyphens and apostrophes',
              },
            })}
          />
        </Field>

        <Field
          htmlFor={fieldId('email')}
          label="Email"
          required
          error={errors.email?.message}
        >
          <TextInput
            id={fieldId('email')}
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            disabled={submitting}
            hasError={!!errors.email}
            {...register('email', {
              required: 'Please enter your email address',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
                message: 'Please enter a valid email address',
              },
            })}
          />
        </Field>

        <Field
          htmlFor={fieldId('country')}
          label="Country of residence"
          required
          error={errors.country?.message}
        >
          <TextInput
            id={fieldId('country')}
            type="text"
            autoComplete="country-name"
            placeholder="e.g. India"
            disabled={submitting}
            hasError={!!errors.country}
            {...register('country', { required: 'Please enter your country' })}
          />
        </Field>

        <Field
          htmlFor={fieldId('phoneNumber')}
          label="Phone"
          required
          error={errors.phoneNumber?.message}
        >
          <div className="flex gap-2">
            {/*
              Closed box shows only the dial code; the real <select> stays
              interactive (opacity-0) so the OS/browser's native dropdown —
              which lists each country's full name — still opens normally
              and drives keyboard/native-picker behaviour.
            */}
            <div className="relative w-[4.5rem] sm:w-24 flex-shrink-0 group">
              <select
                id={fieldId('phoneCountryCode')}
                aria-label="Country code"
                disabled={submitting}
                className="absolute inset-0 w-full h-full opacity-0 disabled:cursor-not-allowed cursor-pointer"
                onMouseDown={revealCountryList}
                onTouchStart={revealCountryList}
                onFocus={revealCountryList}
                onKeyDown={revealCountryList}
                {...register('phoneCountryCode')}
              >
                {countryOptions.map((c) => (
                  <option key={c.iso2} value={c.dialCode}>
                    {c.name} ({c.dialCode})
                  </option>
                ))}
              </select>
              <div
                aria-hidden="true"
                className={`pointer-events-none flex items-center justify-between gap-1 h-full w-full rounded-lg border px-2.5 py-3 text-neutral-900 transition-colors ${
                  errors.phoneNumber
                    ? 'border-error-500'
                    : 'border-neutral-300 group-hover:border-neutral-400'
                } ${submitting ? 'bg-neutral-100 text-neutral-500' : 'bg-white'} group-focus-within:border-primary-600 group-focus-within:ring-2 group-focus-within:ring-primary-200`}
              >
                <span className="truncate">{phoneCountryCode}</span>
                <ChevronDown size={14} className="flex-shrink-0 text-neutral-400" />
              </div>
            </div>
            <TextInput
              id={fieldId('phoneNumber')}
              type="tel"
              inputMode="numeric"
              autoComplete="tel-national"
              placeholder="9999999999"
              disabled={submitting}
              hasError={!!errors.phoneNumber}
              className="flex-1 min-w-0"
              {...register('phoneNumber', {
                required: 'Please enter your phone number',
                validate: (value) =>
                  phoneCountryCode === '+91'
                    ? /^[0-9]{10}$/.test(value) || 'Enter a valid 10-digit mobile number'
                    : /^[0-9]{6,14}$/.test(value) ||
                      'Enter digits only (6–14 digits, without the country code)',
              })}
            />
          </div>
        </Field>
      </div>

      <Field
        htmlFor={fieldId('safariDate')}
        label="Date of safari"
        required
        error={errors.safariDate?.message}
      >
        <TextInput
          id={fieldId('safariDate')}
          type="date"
          min={todayISO()}
          disabled={submitting}
          hasError={!!errors.safariDate}
          className="sm:max-w-xs"
          {...register('safariDate', { required: 'Please choose your preferred date' })}
        />
      </Field>

      {/* Packages come from packageData so this list can never drift from the site. */}
      <fieldset disabled={submitting}>
        <legend className="block text-sm font-medium text-neutral-800 mb-1.5">
          Select a package
        </legend>
        <div className="space-y-3">
          {packageData.map((pkg) => (
            <label
              key={pkg.id}
              className="flex items-center gap-3 border border-neutral-300 rounded-lg px-4 py-3 cursor-pointer transition-colors hover:border-primary-400 hover:bg-primary-50 has-[:checked]:border-primary-600 has-[:checked]:bg-primary-50"
            >
              <input
                type="radio"
                value={pkg.title}
                className="h-4 w-4 text-primary-600 border-neutral-400 focus:ring-primary-500"
                {...register('package')}
              />
              <span className="text-neutral-800">{pkg.title}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <Field
        htmlFor={fieldId('message')}
        label="Message"
        hint="Tell us about your ideal wildlife experience, group size, or any special requirements."
        error={errors.message?.message}
      >
        <TextArea
          id={fieldId('message')}
          placeholder="Anything else we should know?"
          disabled={submitting}
          hasError={!!errors.message}
          hasHint
          {...register('message', {
            maxLength: { value: 3000, message: 'Please keep your message under 3000 characters' },
          })}
        />
      </Field>

      {/* Honeypot: hidden from people, tempting to bots. Kept out of the tab order. */}
      <div className="absolute w-px h-px -m-px overflow-hidden" aria-hidden="true">
        <label htmlFor={fieldId('botField')}>Leave this field empty</label>
        <input
          id={fieldId('botField')}
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register('botField')}
        />
      </div>

      {status === 'error' && (
        <div
          role="alert"
          className="flex items-start gap-3 bg-error-50 border border-error-200 rounded-lg p-4"
        >
          <AlertCircle className="text-error-600 flex-shrink-0 mt-0.5" size={20} />
          <p className="text-sm text-error-800">
            We couldn't send your enquiry just now. Please try again, or reach us directly at{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium underline">
              {CONTACT_EMAIL}
            </a>{' '}
            or{' '}
            <a href={`tel:${CONTACT_PHONE}`} className="font-medium underline">
              (+91) 9893486893
            </a>
            .
          </p>
        </div>
      )}

      <button type="submit" disabled={submitting} className="btn btn-primary inline-flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
        {submitting ? (
          <>
            <Loader2 className="animate-spin" size={18} />
            Sending…
          </>
        ) : (
          <>
            <Send size={18} />
            Submit
          </>
        )}
      </button>
    </form>
  );
};

export default EnquiryForm;
