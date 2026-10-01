import type { Metadata } from 'next'

import { LegalDocument } from '@/components/legal/legal-document'

export const metadata: Metadata = {
  title: 'Privacy Policy - VidCompres',
  description: 'Privacy Policy for VidCompres video compression app. Learn how we protect your data.',
  keywords: 'privacy policy, VidCompres, video compression, data protection, Rovitatech',
}

export default function VidCompresPrivacyPolicy() {
  return (
    <LegalDocument
      app="vidcompres"
      kind="privacy"
      title="Privacy Policy"
      subtitle="VidCompres"
      dates={["Last Updated: January 15, 2025"]}
    >
      <p>
        RovitaTech ("we", "our", or "us") operates the VidCompres mobile application (the "App"). This Privacy Policy explains how we handle information when you use our App.
      </p>

      <div>
        <h2>
          1. Information Collection and Use
        </h2>

        <h3>
          1.1 Personal Information
        </h3>
        <p>
          VidCompres does not collect, store, or transmit any personal information. We do not require you to create an account, provide an email address, or share any personal details to use the App.
        </p>

        <h3>
          1.2 Video and Media Files
        </h3>
        <p>
          The App processes video files that you select from your device. All video processing occurs locally on your device. We do not:
        </p>
        <ul>
          <li>Upload your videos to our servers</li>
          <li>Store your videos on external servers</li>
          <li>Access your videos without your explicit permission</li>
          <li>Share your videos with third parties</li>
          <li>Analyze the content of your videos</li>
        </ul>

        <h3>
          1.3 Device Permissions
        </h3>
        <p>
          The App requires certain permissions to function properly:
        </p>
        <ul>
          <li>
            <strong>Storage/Media Access:</strong> To read video files you want to process and save processed videos to your device
          </li>
          <li>
            <strong>Camera (Optional):</strong> To record videos directly within the app if you choose to use this feature
          </li>
          <li>
            <strong>Microphone (Optional):</strong> To record audio when capturing videos if you choose to use this feature
          </li>
        </ul>
        <p>
          These permissions are used solely for the App's core functionality and are never used to collect or transmit data.
        </p>
      </div>
      <div>
        <h2>
          2. Data Storage and Processing
        </h2>

        <h3>
          2.1 Local Processing
        </h3>
        <p>
          All video processing, compression, conversion, and editing operations are performed entirely on your device. No data is sent to external servers or cloud services.
        </p>

        <h3>
          2.2 Temporary Files
        </h3>
        <p>
          During video processing, the App may create temporary files on your device. These files are automatically deleted after processing is complete or when you close the App.
        </p>

        <h3>
          2.3 Saved Videos
        </h3>
        <p>
          Processed videos are saved to your device's storage in the location you specify. You have complete control over these files and can delete them at any time.
        </p>
      </div>

      <div>
        <h2>
          3. Third-Party Services
        </h2>
        <p>
          VidCompres does not integrate with any third-party analytics services, advertising networks, or data collection tools. The App operates completely offline and does not require an internet connection for its core functionality.
        </p>
      </div>

      <div>
        <h2>
          4. Data Security
        </h2>
        <p>
          Since all processing occurs locally on your device and we do not collect or transmit any data, your videos and information remain secure on your device. We recommend:
        </p>
        <ul>
          <li>Using device-level security features (passcode, biometric authentication)</li>
          <li>Keeping your device's operating system updated</li>
          <li>Being cautious when sharing processed videos with others</li>
        </ul>
      </div>

      <div>
        <h2>
          5. Children's Privacy
        </h2>
        <p>
          VidCompres does not knowingly collect any information from children under the age of 13. Since we do not collect any personal information from any users, the App is safe for users of all ages. However, parental guidance is recommended for children using the App.
        </p>
      </div>

      <div>
        <h2>
          6. Your Rights and Choices
        </h2>
        <p>
          You have complete control over your data:
        </p>
        <ul>
          <li>
            <strong>Access:</strong> All your videos remain on your device under your control
          </li>
          <li>
            <strong>Deletion:</strong> You can delete any processed videos from your device at any time
          </li>
          <li>
            <strong>Permissions:</strong> You can revoke app permissions through your device settings at any time
          </li>
          <li>
            <strong>Uninstall:</strong> Uninstalling the App will remove all app-related data from your device
          </li>
        </ul>
      </div>

      <div>
        <h2>
          7. No Advertising or Tracking
        </h2>
        <p>
          VidCompres does not:
        </p>
        <ul>
          <li>Display advertisements</li>
          <li>Use tracking cookies or similar technologies</li>
          <li>Collect usage statistics or analytics</li>
          <li>Track your behavior or preferences</li>
          <li>Share data with advertising networks</li>
        </ul>
      </div>

      <div>
        <h2>
          8. Open Source Components
        </h2>
        <p>
          VidCompres uses FFmpeg, an open-source video processing library, for video operations. FFmpeg processing occurs entirely on your device and does not involve any data transmission.
        </p>
      </div>

      <div>
        <h2>
          9. Consent
        </h2>
        <p>
          By using VidCompres, you consent to this Privacy Policy. If you do not agree with this policy, please do not use the App.
        </p>
      </div>

      <div>
        <h2>
          10. Contact Us
        </h2>
        <p>
          If you have any questions, concerns, or suggestions regarding this Privacy Policy or our privacy practices, please contact us:
        </p>
        <p>
          <strong>RovitaTech</strong>
        </p>
        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:support@rovitatech.com" >
            support@rovitatech.com
          </a>
        </p>
        <p>
          <strong>App:</strong> VidCompres
        </p>
        <p>
          We will respond to your inquiry within a reasonable timeframe.
        </p>
      </div>
    </LegalDocument>
  )
}
