import { useEffect } from 'react';

const PrivacyPolicy = () => {
  useEffect(() => {
    // Update page title
    document.title = 'Privacy Policy | Kuno Cheetah Safari';

    // Scroll to top of the page
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-20">
        <h1 className="text-4xl font-bold text-center mb-8">Privacy Policy</h1>
        <div className="max-w-4xl mx-auto space-y-6 text-neutral-700">
          <p>
            At Kuno Cheetah Safari, your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website or use our services.
          </p>
          <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
          <p>
            <strong>a. Personal Information</strong> – Provided when you book a safari, register, or subscribe to our newsletter. This may include:
          </p>
          <ul className="list-disc pl-6">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Any other information necessary for bookings or inquiries</li>
          </ul>
          <p>
            <strong>b. Usage Information</strong> – Data about your interaction with our website, including:
          </p>
          <ul className="list-disc pl-6">
            <li>Pages visited</li>
            <li>Browsing patterns</li>
            <li>Device and browser details</li>
          </ul>
          <p>
            <strong>c. Payment Information</strong> – All online payments are processed via secure third-party gateways. We do not store credit/debit card details on our servers.
          </p>
          <p>
            <strong>d. Children’s Information</strong> – We do not knowingly collect information from children under 15 years old. If you believe your child has shared information with us, please contact us for deletion.
          </p>
          <h2 className="text-2xl font-semibold">2. How We Use Your Information</h2>
          <ul className="list-disc pl-6">
            <li>Process and manage bookings and reservations</li>
            <li>Send booking confirmations and updates</li>
            <li>Improve website functionality and user experience</li>
            <li>Share promotional information only with consent</li>
          </ul>
          <h2 className="text-2xl font-semibold">3. Sharing Your Information</h2>
          <ul className="list-disc pl-6">
            <li>
              <strong>Third-Party Partners</strong> – Only to fulfill services (e.g., payment gateways, transport providers, accommodation).
            </li>
            <li>
              <strong>Legal Compliance</strong> – We may disclose information as required by law.
            </li>
          </ul>
          <h2 className="text-2xl font-semibold">4. Data Security</h2>
          <p>
            We use encryption and security measures to safeguard your data. However, no online transmission can be guaranteed 100% secure.
          </p>
          <h2 className="text-2xl font-semibold">5. Your Rights</h2>
          <ul className="list-disc pl-6">
            <li>Access, correct, or update your personal data</li>
            <li>Withdraw consent for marketing communications</li>
            <li>Request deletion of your data (subject to legal or contractual obligations)</li>
          </ul>
          <h2 className="text-2xl font-semibold">6. Cookies</h2>
          <p>
            We use cookies to improve website experience, remember preferences, and analyze traffic. You may disable cookies in your browser settings, though some features may not function properly.
          </p>
          <h2 className="text-2xl font-semibold">7. Third-Party Links</h2>
          <p>
            Our website may link to third-party services. We are not responsible for their privacy practices.
          </p>
          <h2 className="text-2xl font-semibold">8. Updates to Privacy Policy</h2>
          <p>
            This policy may be updated periodically. Continued use of our website constitutes acceptance of any changes.
          </p>
          <h2 className="text-2xl font-semibold">Contact Us</h2>
          <p>
            📧 Email: <a href="mailto:contact.findingfauna@gmail.com" className="text-primary-600 hover:underline">contact.findingfauna@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;