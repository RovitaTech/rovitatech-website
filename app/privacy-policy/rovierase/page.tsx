import type { Metadata } from 'next'

import { LegalDocument } from '@/components/legal/legal-document'

export const metadata: Metadata = {
  title: 'Privacy Policy - RoviErase',
  description: 'Privacy Policy for RoviErase background removal app. Learn how we protect your data.',
  keywords: 'privacy policy, RoviErase, background removal, data protection, Rovitatech',
}

export default function RoviErasePrivacyPolicy() {
  return (
    <LegalDocument
      app="rovierase"
      kind="privacy"
      title="Privacy Policy"
      subtitle="RoviErase"
      dates={["Last Updated: January 15, 2026"]}
    >
      <p>
        RoviTaTech ("we", "our", or "us") operates the RoviErase mobile application (the "App"). This page informs you of our policies regarding the collection, use, and disclosure of personal information when you use our App.
      </p>
      <div>
        <h2>
          1. Information We Collect
        </h2>

        <h3>
          1.1 Information You Provide
        </h3>
        <p>
          When you use RoviErase, we may collect the following information:
        </p>
        <ul>
          <li>Account information (email address, username) if you choose to create an account</li>
          <li>Payment information when you purchase premium plans (processed securely through third-party payment processors)</li>
          <li>Images you upload for background removal processing</li>
        </ul>

        <h3>
          1.2 Automatically Collected Information
        </h3>
        <p>
          We may automatically collect certain information when you use the App:
        </p>
        <ul>
          <li>Device information (device type, operating system version)</li>
          <li>App usage data (features used, credits consumed)</li>
          <li>Log data (IP address, access times, app crashes)</li>
        </ul>

        <h3>
          1.3 Third-Party Services
        </h3>
        <p>
          Our App uses the following third-party services that may collect information:
        </p>
        <ul>
          <li>Google AdMob - for displaying advertisements</li>
          <li>Cloudinary - for image processing and storage</li>
          <li>Google Analytics - for app usage analytics (if applicable)</li>
        </ul>
      </div>

      <div>
        <h2>
          2. How We Use Your Information
        </h2>
        <p>
          We use the collected information for the following purposes:
        </p>
        <ul>
          <li>To provide and maintain the App's functionality</li>
          <li>To process your images and remove backgrounds</li>
          <li>To manage your account and credits</li>
          <li>To process payments for premium plans</li>
          <li>To display relevant advertisements</li>
          <li>To improve and optimize the App</li>
          <li>To communicate with you about updates and features</li>
          <li>To detect and prevent technical issues or fraudulent activity</li>
        </ul>
      </div>

      <div>
        <h2>
          3. Image Processing and Storage
        </h2>
        <p>
          Images you upload to RoviErase are:
        </p>
        <ul>
          <li>Processed using Cloudinary's AI-powered background removal service</li>
          <li>Temporarily stored on secure servers during processing</li>
          <li>Automatically deleted after processing is complete</li>
          <li>Not used for any purpose other than providing the background removal service</li>
          <li>Not shared with third parties except as necessary for processing</li>
        </ul>
      </div>

      <div>
        <h2>
          4. Your Rights
        </h2>
        <p>
          You have the following rights regarding your personal information:
        </p>
        <ul>
          <li>
            <strong>Access:</strong> Request a copy of the personal information we hold about you
          </li>
          <li>
            <strong>Correction:</strong> Request correction of inaccurate or incomplete information
          </li>
          <li>
            <strong>Deletion:</strong> Request deletion of your personal information
          </li>
          <li>
            <strong>Objection:</strong> Object to processing of your personal information
          </li>
          <li>
            <strong>Data Portability:</strong> Request transfer of your data to another service
          </li>
        </ul>
        <p>
          To exercise these rights, please contact us at the email address provided below.
        </p>
      </div>

      <div>
        <h2>
          5. Contact Us
        </h2>
        <p>
          If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
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
          6. Consent
        </h2>
        <p>
          By using RoviErase, you consent to this Privacy Policy and agree to its terms.
        </p>
      </div>
    </LegalDocument>
  )
}
