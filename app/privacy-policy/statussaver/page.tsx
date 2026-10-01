import type { Metadata } from 'next'

import { LegalDocument } from '@/components/legal/legal-document'

export const metadata: Metadata = {
  title: 'Privacy Policy - Status Saver',
  description: 'Privacy Policy for Status Saver - Clip Archiver app. Learn how we protect your data.',
  keywords: 'privacy policy, Status Saver, Clip Archiver, data protection, Rovitatech',
}

export default function StatusSaverPrivacyPolicy() {
  return (
    <LegalDocument
      app="statussaver"
      kind="privacy"
      title="Privacy Policy"
      subtitle="Status Saver - Clip Archiver"
      dates={["Last Updated: November 21, 2025"]}
    >
      <p>
        Status Saver - Clip Archiver ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how our application handles your information.
      </p>

      <div>
        <h2>
          1. Information We Collect
        </h2>
        <p>
          Status Saver does not collect, store, or transmit any personal information. The app operates entirely on your device.
        </p>
      </div>

      <div>
        <h2>
          2. Permissions Required
        </h2>
        <p>
          Our app requires the following permissions to function:
        </p>
        <ul>
          <li>
            <strong>Storage Permission:</strong> Required to access and save status files from your device's storage. All files remain on your device.
          </li>
          <li>
            <strong>Media Access:</strong> Required to read and save photos and videos from status folders.
          </li>
        </ul>
      </div>

      <div>
        <h2>
          3. Data Storage
        </h2>
        <p>
          All data processed by Status Saver remains on your device. We do not:
        </p>
        <ul>
          <li>Upload your data to any server</li>
          <li>Share your data with third parties</li>
          <li>Collect analytics or tracking information</li>
          <li>Store any personal information</li>
        </ul>
      </div>

      <div>
        <h2>
          4. Third-Party Services
        </h2>
        <p>
          Status Saver does not integrate with any third-party services, analytics tools, or advertising networks.
        </p>
      </div>

      <div>
        <h2>
          5. Children's Privacy
        </h2>
        <p>
          Our app does not knowingly collect any information from children under the age of 13. The app is designed for general audiences.
        </p>
      </div>

      <div>
        <h2>
          6. Security
        </h2>
        <p>
          Since all data remains on your device, the security of your information depends on your device's security measures. We recommend:
        </p>
        <ul>
          <li>Using device lock screens</li>
          <li>Keeping your device software updated</li>
          <li>Being cautious about granting app permissions</li>
        </ul>
      </div>

      <div>
        <h2>
          7. Changes to This Privacy Policy
        </h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
        </p>
      </div>

      <div>
        <h2>
          8. Your Rights
        </h2>
        <p>
          Since we don't collect any personal data, there is no data to access, modify, or delete from our servers. All content saved by the app can be managed directly on your device.
        </p>
      </div>

      <div>
        <h2>
          9. Disclaimer
        </h2>
        <p>
          Status Saver is an independent application and is not affiliated with, endorsed by, or connected to any messaging platform. Users are responsible for ensuring they have the right to save and share content accessed through the app.
        </p>
      </div>

      <div>
        <h2>
          10. Contact Us
        </h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us:
        </p>
        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:rovitatech@gmail.com" >
            rovitatech@gmail.com
          </a>
        </p>
        <p>
          <strong>Developer:</strong> RovitaTech
        </p>
      </div>
    </LegalDocument>
  )
}
