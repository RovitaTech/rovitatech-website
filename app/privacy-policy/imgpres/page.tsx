import type { Metadata } from 'next'

import { LegalDocument } from '@/components/legal/legal-document'

export const metadata: Metadata = {
  title: 'Privacy Policy - ImgPres',
  description: 'Privacy Policy for ImgPres image processing app. Learn how we protect your data.',
  keywords: 'privacy policy, ImgPres, image processing, data protection, Rovitatech',
}

export default function ImgPresPrivacyPolicy() {
  return (
    <LegalDocument
      app="imgpres"
      kind="privacy"
      title="Privacy Policy"
      subtitle="ImgPres - Image Processing Studio"
      dates={["Last Updated: January 15, 2026"]}
    >
      <p>
        Privacy First: ImgPres processes all images locally on your device. Your images never leave your device and are not uploaded to any servers.
      </p>

      <div>
        <h2>
          1. Information We Collect
        </h2>
        <p>
          ImgPres is designed with privacy in mind. We do not collect, store, or transmit any personal information or image data.
        </p>
        <p>
          What we DO NOT collect:
        </p>
        <ul>
          <li>Your images or any image data</li>
          <li>Personal information (name, email, phone number)</li>
          <li>Device identifiers or advertising IDs</li>
          <li>Location data</li>
          <li>Usage analytics or tracking data</li>
          <li>Crash reports or diagnostic data</li>
        </ul>
      </div>

      <div>
        <h2>
          2. How We Use Information
        </h2>
        <p>
          Since we do not collect any personal information or image data, there is no information to use, share, or process beyond the local image processing functions of the app.
        </p>
      </div>

      <div>
        <h2>
          3. Image Processing
        </h2>
        <p>
          All image processing operations (compression, resizing, cropping, format conversion) are performed entirely on your device using local processing power.
        </p>
        <p>
          This means:
        </p>
        <ul>
          <li>Images are processed locally and never uploaded to external servers</li>
          <li>No internet connection is required for core functionality</li>
          <li>You maintain complete control over your images</li>
          <li>Processed images are saved directly to your device</li>
        </ul>
      </div>

      <div>
        <h2>
          4. Permissions
        </h2>
        <p>
          ImgPres may request the following permissions to function properly:
        </p>
        <ul>
          <li>
            <strong>Storage/Photos Access:</strong> To read images you want to process and save processed images to your device
          </li>
          <li>
            <strong>Camera Access:</strong> To capture new photos for processing (optional)
          </li>
        </ul>
        <p>
          These permissions are used solely for the app's core functionality and no data is transmitted outside your device.
        </p>
      </div>

      <div>
        <h2>
          5. Third-Party Services
        </h2>
        <p>
          ImgPres does not integrate with any third-party analytics, advertising, or data collection services. The app operates completely offline for image processing functions.
        </p>
      </div>

      <div>
        <h2>
          6. Data Security
        </h2>
        <p>
          Since all processing happens locally on your device:
        </p>
        <ul>
          <li>Your images remain under your complete control</li>
          <li>No data transmission means no risk of data breaches during transfer</li>
          <li>Image security depends on your device's security measures</li>
        </ul>
      </div>

      <div>
        <h2>
          7. Children's Privacy
        </h2>
        <p>
          ImgPres does not collect any personal information from anyone, including children under 13. The app is safe for users of all ages as it operates entirely offline for image processing.
        </p>
      </div>

      <div>
        <h2>
          8. Your Rights
        </h2>
        <p>
          Since we do not collect or store any personal data:
        </p>
        <ul>
          <li>There is no personal data to access, modify, or delete</li>
          <li>You maintain complete control over all images processed through the app</li>
          <li>You can uninstall the app at any time with no data retention concerns</li>
        </ul>
      </div>

      <div>
        <h2>
          9. Contact Information
        </h2>
        <p>
          If you have any questions about this privacy policy or ImgPres, please contact us:
        </p>
        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:rovitatech@gmail.com" >
            rovitatech@gmail.com
          </a>
        </p>
        <p>
          <strong>App:</strong> ImgPres - Image Processing Studio
        </p>
      </div>
    </LegalDocument>
  )
}
