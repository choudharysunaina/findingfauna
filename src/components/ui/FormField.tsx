import {
  forwardRef,
  InputHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react';

/** Shared input chrome so text, date and textarea controls stay identical. */
// scroll-mt-24 keeps a field clear of the fixed navbar when react-hook-form
// scrolls the first invalid control into view on a failed submit.
const controlBase =
  'w-full scroll-mt-24 rounded-lg border bg-white px-4 py-3 text-neutral-900 ' +
  'placeholder:text-neutral-400 transition-colors focus:outline-none focus:ring-2 ' +
  'focus:ring-offset-0 disabled:bg-neutral-100 disabled:text-neutral-500';

const controlState = (hasError?: boolean) =>
  hasError
    ? 'border-error-500 focus:border-error-500 focus:ring-error-200'
    : 'border-neutral-300 hover:border-neutral-400 focus:border-primary-600 focus:ring-primary-200';

interface FieldProps {
  /** Must match the id of the control it wraps. */
  htmlFor: string;
  label: string;
  required?: boolean;
  /** Helper text shown between the label and the control. */
  hint?: string;
  error?: string;
  children: ReactNode;
}

/**
 * Label + control + message wrapper. Renders the required marker and wires the
 * error/hint text to the control via aria-describedby (the id convention is
 * `<controlId>-error` / `<controlId>-hint`, which the controls reference too).
 */
export const Field = ({ htmlFor, label, required, hint, error, children }: FieldProps) => (
  <div>
    <label
      htmlFor={htmlFor}
      className={`block text-sm font-medium text-neutral-800 ${hint ? 'mb-1' : 'mb-1.5'}`}
    >
      {label}
      {required && (
        <span className="text-error-600 ml-0.5" aria-hidden="true">
          *
        </span>
      )}
    </label>
    {hint && (
      <p id={`${htmlFor}-hint`} className="text-sm text-neutral-500 mb-1.5">
        {hint}
      </p>
    )}
    {children}
    {error && (
      <p id={`${htmlFor}-error`} role="alert" className="mt-1.5 text-sm text-error-600">
        {error}
      </p>
    )}
  </div>
);

/** Points the control at whichever of its hint/error messages are rendered. */
const describedBy = (id: string, hasError?: boolean, hasHint?: boolean) =>
  [hasError && `${id}-error`, hasHint && `${id}-hint`].filter(Boolean).join(' ') || undefined;

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  hasError?: boolean;
  hasHint?: boolean;
};

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ id, hasError, hasHint, className = '', ...rest }, ref) => (
    <input
      {...rest}
      id={id}
      ref={ref}
      aria-invalid={hasError || undefined}
      aria-describedby={describedBy(id, hasError, hasHint)}
      className={`${controlBase} ${controlState(hasError)} ${className}`}
    />
  )
);
TextInput.displayName = 'TextInput';

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  id: string;
  hasError?: boolean;
  hasHint?: boolean;
};

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ id, hasError, hasHint, className = '', rows = 5, ...rest }, ref) => (
    <textarea
      {...rest}
      id={id}
      ref={ref}
      rows={rows}
      aria-invalid={hasError || undefined}
      aria-describedby={describedBy(id, hasError, hasHint)}
      className={`${controlBase} ${controlState(hasError)} resize-y ${className}`}
    />
  )
);
TextArea.displayName = 'TextArea';

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  id: string;
  hasError?: boolean;
  hasHint?: boolean;
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ id, hasError, hasHint, className = '', children, ...rest }, ref) => (
    <select
      {...rest}
      id={id}
      ref={ref}
      aria-invalid={hasError || undefined}
      aria-describedby={describedBy(id, hasError, hasHint)}
      className={`${controlBase} ${controlState(hasError)} ${className}`}
    >
      {children}
    </select>
  )
);
Select.displayName = 'Select';
