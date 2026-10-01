import type { Metadata } from 'next'

import { LegalDocument } from '@/components/legal/legal-document'

export const metadata: Metadata = {
  title: 'Privacy Policy - BilyBucks',
  description: 'Privacy Policy for BilyBucks family reward system app. Learn how we protect your data.',
  keywords: 'privacy policy, BilyBucks, family rewards, data protection, Rovitatech',
}

export default function BilyBucksPrivacyPolicy() {
  return (
    <LegalDocument
      app="bilybucks"
      kind="privacy"
      title="Privacy Policy"
      subtitle="BilyBucks"
      dates={["Last Updated: May 5, 2026"]}
    >
      <div>
        <h2>
          Introduction
        </h2>
        <p>
          BilyBucks ("we", "our", or "us") operates the BilyBucks mobile application (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
        </p>
      </div>

      <div>
        <h2>
          Information We Collect
        </h2>

        <h3>
          Personal Information
        </h3>
        <ul>
          <li>
            <strong>Account Information:</strong> When you create an account, we collect your email address only to save data.
          </li>
          <li>
            <strong>Authentication Data:</strong> We use Firebase Authentication to securely manage your login credentials.
          </li>
        </ul>
      </div>

      <div>
        <h2>
          How We Use Your Information
        </h2>
        <p>
          We use the collected information for the following purposes:
        </p>
        <ul>
          <li>
            <strong>Service Provision:</strong> To provide and maintain our Service, including managing family reward systems and responsibilities.
          </li>
          <li>
            <strong>Account Management:</strong> To create and manage your user account and authenticate your access.
          </li>
        </ul>
      </div>

      <div>
        <h2>
          Subscriptions and Payments
        </h2>
        <p>
          BilyBucks may offer optional paid subscriptions that unlock premium features.
        </p>
        <ul>
          <li>
            <strong>Store processing:</strong> Purchases are processed by the Apple App Store (iOS) and Google Play (Android), not directly by us.
          </li>
          <li>
            <strong>RevenueCat:</strong> We use RevenueCat for purchase validation, entitlement management, and cross-device subscription synchronization.
          </li>
          <li>
            <strong>Payment details:</strong> We do not store your full card or bank account details.
          </li>
          <li>
            <strong>Limited purchase metadata:</strong> We may process limited purchase-related information such as product ID, subscription status, expiration date, app user ID, and device/app identifiers needed to deliver premium access.
          </li>
          <li>
            <strong>Refunds and cancellations:</strong> Refunds, cancellations, and subscription management are handled according to Apple and Google billing policies.
          </li>
        </ul>
      </div>

      <div>
        <h2>
          Data Storage and Security
        </h2>

        <h3>
          Firebase Integration
        </h3>
        <ul>
          <li>We use Google Firebase services for authentication, database storage, and app infrastructure.</li>
          <li>Your data is stored securely on Google's servers with industry-standard encryption.</li>
          <li>Firebase complies with GDPR, CCPA, and other privacy regulations.</li>
        </ul>

        <h3>
          Security Measures
        </h3>
        <ul>
          <li>All data transmission is encrypted using SSL/TLS protocols.</li>
          <li>We implement appropriate technical and organizational measures to protect your personal data.</li>
          <li>Access to your data is restricted to authorized personnel only.</li>
        </ul>
      </div>

      <div>
        <h2>
          Data Sharing and Disclosure
        </h2>
        <p>
          We do not sell, trade, or otherwise transfer your personal information to third parties, except in the following circumstances:
        </p>
        <ul>
          <li>
            <strong>Service Providers:</strong> We may share data with trusted third-party service providers (like Google Firebase and RevenueCat) who assist us in operating our app.
          </li>
          <li>
            <strong>Legal Requirements:</strong> We may disclose your information if required by law or in response to valid legal requests.
          </li>
          <li>
            <strong>Safety:</strong> We may share information to protect the rights, property, or safety of BilyBucks, our users, or others.
          </li>
        </ul>
      </div>

      <div>
        <h2>
          Children's Privacy
        </h2>
        <p>
          BilyBucks is designed for family use and may be used by children under the supervision of parents or guardians. We are committed to protecting children's privacy:
        </p>
        <ul>
          <li>We do not knowingly collect personal information from children under 13 without parental consent.</li>
          <li>Parents have control over their children's data within the family account.</li>
          <li>Children's data is limited to what parents enter (names, completed tasks, earned rewards).</li>
        </ul>
      </div>

      <div>
        <h2>
          Your Rights and Choices
        </h2>
        <p>
          You have the following rights regarding your personal data:
        </p>
        <ul>
          <li>
            <strong>Correction:</strong> You can update or correct your information at any time.
          </li>
          <li>
            <strong>Deletion:</strong> You can delete your account and associated data by contacting us.
          </li>
          <li>
            <strong>Portability:</strong> You can request a copy of your data in a structured format.
          </li>
        </ul>
      </div>

      <div>
        <h2>
          Data Retention
        </h2>
        <ul>
          <li>We retain your personal data only as long as necessary to provide our services.</li>
          <li>Account data is kept until you delete your account.</li>
          <li>Some anonymized usage data may be retained for analytics purposes.</li>
        </ul>
      </div>

      <div>
        <h2>
          International Data Transfers
        </h2>
        <p>
          Your data may be processed and stored in countries other than your own, including the United States where Google Firebase servers are located. We ensure appropriate safeguards are in place for international data transfers.
        </p>
      </div>

      <div>
        <h2>
          Third-Party Services
        </h2>
        <p>
          Our app integrates with the following third-party services:
        </p>
        <ul>
          <li>
            <strong>RevenueCat:</strong> For purchase validation and subscription entitlement management.{' '}
            <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer" >
              RevenueCat Privacy Policy
            </a>
          </li>
          <li>
            <strong>Google Firebase:</strong> For authentication, database, and hosting services.{' '}
            <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer" >
              Firebase Privacy Policy
            </a>
          </li>
          <li>
            <strong>Apple App Store:</strong> For iOS app distribution and billing.{' '}
            <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer" >
              Apple Privacy Policy
            </a>
          </li>
          <li>
            <strong>Google Play Services:</strong> For app distribution and updates.{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" >
              Google Privacy Policy
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h2>
          Cookies and Tracking
        </h2>
        <p>
          BilyBucks does not use cookies or tracking technologies for advertising purposes. We may use analytics tools to understand app usage patterns, but this data is anonymized and aggregated.
        </p>
      </div>

      <div>
        <h2>
          Changes to This Privacy Policy
        </h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by:
        </p>
        <ul>
          <li>Posting the new Privacy Policy on this page</li>
          <li>Updating the "Last updated" date</li>
          <li>Sending an in-app notification for significant changes</li>
        </ul>
      </div>

      <div>
        <h2>
          Contact Us
        </h2>
        <p>
          If you have any questions about this Privacy Policy or our data practices, please contact us at:
        </p>
        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:rovitatech@gmail.com" >
            rovitatech@gmail.com
          </a>
        </p>
      </div>

      <div>
        <h2>
          Compliance
        </h2>
        <p>
          This Privacy Policy complies with:
        </p>
        <ul>
          <li>General Data Protection Regulation (GDPR)</li>
          <li>California Consumer Privacy Act (CCPA)</li>
          <li>Children's Online Privacy Protection Act (COPPA)</li>
          <li>Google Play Developer Policy</li>
        </ul>
      </div>
    </LegalDocument>
  )
}
