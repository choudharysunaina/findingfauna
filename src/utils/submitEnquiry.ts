import { ENQUIRY_ENDPOINT } from '../config/site';

/** The enquiry payload as collected by EnquiryForm. */
export interface EnquiryData {
  name: string;
  email: string;
  phone: string;
  country: string;
  safariDate: string;
  package: string;
  message: string;
  /** Honeypot — must stay empty. Bots that fill it get silently discarded. */
  botField?: string;
}

/** True once a real /exec URL has been pasted into config/site.ts. */
export const isEnquiryEndpointConfigured =
  /^https:\/\/script\.google\.com\/macros\/s\/[\w-]+\/exec$/.test(ENQUIRY_ENDPOINT);

const TIMEOUT_MS = 15000;

/**
 * POSTs an enquiry to the Apps Script Web App.
 *
 * The Content-Type is deliberately 'text/plain' even though the body is JSON:
 * Apps Script does not answer CORS preflight (OPTIONS) requests, and text/plain
 * keeps this a "simple" request that never triggers one. The script reads the
 * raw body via e.postData.contents and parses it itself.
 */
export async function submitEnquiry(data: EnquiryData): Promise<{ ok: boolean }> {
  if (!isEnquiryEndpointConfigured) {
    console.error(
      'ENQUIRY_ENDPOINT is not configured in src/config/site.ts — enquiry not sent.'
    );
    return { ok: false };
  }

  const payload = {
    ...data,
    page: typeof window !== 'undefined' ? window.location.pathname : '',
    referrer: typeof document !== 'undefined' ? document.referrer : '',
  };

  try {
    const response = await fetch(ENQUIRY_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(payload),
      redirect: 'follow',
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });

    if (!response.ok) return { ok: false };

    const result = (await response.json()) as { ok?: boolean };
    return { ok: result.ok === true };
  } catch (error) {
    console.error('Enquiry submission failed:', error);
    return { ok: false };
  }
}
