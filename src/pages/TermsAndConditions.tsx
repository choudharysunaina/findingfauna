import { useEffect } from 'react';

const TermsAndConditions = () => {
  useEffect(() => {
    // Update page title
    document.title = 'Terms and Conditions | Kuno Cheetah Safari';

    // Scroll to top of the page
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-20">
        <h1 className="text-4xl font-bold text-center mb-8">Terms and Conditions</h1>
        <div className="max-w-4xl mx-auto space-y-6 text-neutral-700">
          <p>
            By using this website and its services, you agree to the following terms:
          </p>
          <h2 className="text-2xl font-semibold">1. Booking and Reservations</h2>
          <ul className="list-disc pl-6">
            <li>All bookings are subject to availability.</li>
            <li>Reservations are confirmed only after full or advance payment.</li>
          </ul>
          <h2 className="text-2xl font-semibold">2. Cancellation and Refunds</h2>
          <p>Please refer to our Cancellation Policy (see below).</p>
          <h2 className="text-2xl font-semibold">3. Safari Conduct and Safety</h2>
          <ul className="list-disc pl-6">
            <li>Follow all safety guidelines provided by guides and park authorities.</li>
            <li>Disturbing, feeding, or touching wildlife is strictly prohibited.</li>
            <li>Visitors threatening wildlife or others may be removed from the safari.</li>
          </ul>
          <h2 className="text-2xl font-semibold">4. Payment</h2>
          <ul className="list-disc pl-6">
            <li>Payments are processed through secure third-party gateways.</li>
            <li>We do not store card details.</li>
            <li>Any payment issues should be reported immediately.</li>
          </ul>
          <h2 className="text-2xl font-semibold">5. Changes to Safari Plans</h2>
          <ul className="list-disc pl-6">
            <li>Routes and schedules may change due to weather, natural events, or park regulations.</li>
            <li>We strive to minimize disruption to your experience.</li>
          </ul>
          <h2 className="text-2xl font-semibold">6. Additional Costs</h2>
          <p>
            Any government-mandated fees, taxes, or permit increases will be charged extra.
          </p>
          <h2 className="text-2xl font-semibold">7. Intellectual Property</h2>
          <p>
            All website content (text, images, videos) is copyright protected. Unauthorized use is prohibited.
          </p>
          <h2 className="text-2xl font-semibold">8. Third-Party Links</h2>
          <p>
            We may link to other websites for information. We are not responsible for their content or policies.
          </p>
          <h2 className="text-2xl font-semibold">9. Liability</h2>
          <p>
            Finding Fauna is not liable for personal injury, loss, or damage during safari participation beyond what is legally required.
          </p>
         
          <h2 className="text-2xl font-semibold">Cancellation & Refund Policy</h2>
          <p><strong>Last Updated:</strong> 30th August 2025</p>
          <p>
            We understand that plans may change. Please review our cancellation and refund policy:
          </p>
          <h3 className="text-xl font-semibold">1. Individual & Group Bookings</h3>
          <ul className="list-disc pl-6">
            <li>30 days or more prior: 75% retention of total booking amount</li>
            <li>15–29 days prior: 100% cancellation fee</li>
          </ul>
          <p><strong>Notes:</strong></p>
          <ul className="list-disc pl-6">
            <li>Bookings are non-transferable.</li>
            <li>Refunds are issued via the original payment method. Allow 7–14 business days.</li>
          </ul>
          <h3 className="text-xl font-semibold">2. Rescheduling</h3>
          <ul className="list-disc pl-6">
            <li>Notify us at least 30 days in advance.</li>
            <li>Rescheduling fee: 50% of total booking amount</li>
            <li>Subject to availability</li>
          </ul>
          <h3 className="text-xl font-semibold">3. Natural Events</h3>
          <p>
            In case of natural disasters, government restrictions, or park closures, tours may be modified or rescheduled.
          </p>
          <p>
            Full refunds or alternative dates will be offered in such cases.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;