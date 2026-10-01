import type { Metadata } from 'next'

import { LegalDocument } from '@/components/legal/legal-document'

export const metadata: Metadata = {
  title: 'Privacy Policy - ChirpFake',
  description: 'Privacy Policy for ChirpFake content creation app. Learn how we protect your data.',
  keywords: 'privacy policy, ChirpFake, content creation, data protection, Rovitatech',
}

export default function ChirpFakePrivacyPolicy() {
  return (
    <LegalDocument
      app="chirpfake"
      kind="privacy"
      title="Privacy Policy"
      subtitle="ChirpFake"
      dates={["Last Updated: November 21, 2025"]}
    >
      <p>
        ChirpFake ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we handle information when you use our mobile application.
      </p>

      <div>
        <h2>
          1. Information We Collect
        </h2>

        <h3>
          1.1 Information You Provide
        </h3>
        <p>
          ChirpFake is designed to work locally on your device. We do not collect or store any personal information on external servers. Any content you create, including:
        </p>
        <ul>
          <li>Text content for posts</li>
          <li>Images you select or upload</li>
          <li>Screenshots you generate</li>
          <li>Profile information you enter</li>
        </ul>
        <p>
          All of this information remains on your device and is not transmitted to us or any third parties.
        </p>

        <h3>
          1.2 Automatically Collected Information
        </h3>
        <p>
          We do not automatically collect any information about your device, usage patterns, or analytics.
        </p>
      </div>

      <div>
        <h2>
          2. How We Use Your Information
        </h2>
        <p>
          Since ChirpFake operates entirely on your device:
        </p>
        <ul>
          <li>All content creation and editing happens locally</li>
          <li>Screenshots are saved directly to your device's gallery</li>
          <li>No data is transmitted to external servers</li>
          <li>We do not track, analyze, or monitor your usage</li>
        </ul>
      </div>

      <div>
        <h2>
          3. Permissions We Request
        </h2>
        <p>
          ChirpFake requires certain permissions to function properly:
        </p>
        <ul>
          <li>
            <strong>Storage/Photo Library Access:</strong> To save generated screenshots to your device's gallery
          </li>
          <li>
            <strong>Camera/Photo Library:</strong> To allow you to select images for profile pictures or post content
          </li>
        </ul>
        <p>
          These permissions are used solely for the app's functionality and do not involve data collection or transmission.
        </p>
      </div>

      <div>
        <h2>
          4. Data Storage and Security
        </h2>
        <ul>
          <li>All data is stored locally on your device</li>
          <li>We do not maintain servers or databases containing user information</li>
          <li>You have complete control over your data and can delete the app at any time to remove all associated data</li>
        </ul>
      </div>

      <div>
        <h2>
          5. Third-Party Services
        </h2>
        <p>
          ChirpFake does not integrate with any third-party analytics, advertising, or tracking services. The app operates independently without external dependencies that collect user data.
        </p>
      </div>

      <div>
        <h2>
          6. Children's Privacy
        </h2>
        <p>
          ChirpFake does not knowingly collect any information from children under the age of 13. Since we don't collect any personal information at all, the app can be used by individuals of any age. However, we recommend parental supervision for younger users to ensure appropriate content creation.
        </p>
      </div>

      <div>
        <h2>
          7. Data Sharing and Disclosure
        </h2>
        <p>
          We do not share, sell, rent, or trade any user information because we do not collect any user information. All content you create remains private on your device unless you choose to share it through other means (such as social media or messaging apps).
        </p>
      </div>

      <div>
        <h2>
          8. Your Rights and Choices
        </h2>
        <p>
          You have complete control over your data:
        </p>
        <ul>
          <li>All content is stored locally on your device</li>
          <li>You can delete any screenshots from your device's gallery at any time</li>
          <li>You can revoke app permissions through your device settings</li>
          <li>Uninstalling the app will remove all app-related data from your device</li>
        </ul>
      </div>

      <div>
        <h2>
          9. Changes to This Privacy Policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be reflected by updating the "Last Updated" date at the top of this policy. We encourage you to review this Privacy Policy periodically for any changes.
        </p>
      </div>

      <div>
        <h2>
          10. International Users
        </h2>
        <p>
          Since ChirpFake operates entirely on your device without data transmission, there are no international data transfer concerns. The app can be used anywhere in the world without privacy implications.
        </p>
      </div>

      <div>
        <h2>
          11. Disclaimer
        </h2>
        <p>
          ChirpFake is a content creation tool intended for entertainment, educational, or creative purposes. Users are solely responsible for how they use the content generated by this app. We do not endorse or encourage the creation of misleading, fraudulent, or harmful content. Please use this app responsibly and in compliance with applicable laws and regulations.
        </p>
      </div>

      <div>
        <h2>
          12. Contact Us
        </h2>
        <p>
          If you have any questions or concerns about this Privacy Policy or ChirpFake, please contact us:
        </p>
        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:rovitatech@gmail.com" >
            rovitatech@gmail.com
          </a>
        </p>
      </div>
    </LegalDocument>
  )
}
