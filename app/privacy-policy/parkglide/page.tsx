import type { Metadata } from 'next'

import { LegalDocument } from '@/components/legal/legal-document'

export const metadata: Metadata = {
  title: 'Privacy Policy - Park Glide',
  description: 'Privacy Policy for Park Glide parking finder app. Learn how we protect your data.',
  keywords: 'privacy policy, Park Glide, parking finder, data protection, Rovitatech',
}

export default function ParkGlidePrivacyPolicy() {
  return (
    <LegalDocument
      app="parkglide"
      kind="privacy"
      title="Privacy Policy"
      subtitle="Park Glide - Parking Finder App"
      dates={["Last Updated: November 21, 2024"]}
    >
      <p>
        RovitaTech ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use the Park Glide mobile application (the "App"). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the App.
      </p>

      <div>
        <h2>
          1. Information We Collect
        </h2>

        <h3>
          1.1 Location Information
        </h3>
        <p>
          Park Glide requires access to your device's location services to provide you with nearby parking spaces. We collect:
        </p>
        <ul>
          <li>Real-time GPS location data when you use the parking search feature</li>
          <li>Location data is used only while the app is in use</li>
          <li>Location information is not stored on our servers</li>
          <li>Location data is processed locally on your device</li>
        </ul>

        <h3>
          1.2 Usage Data
        </h3>
        <p>
          We may collect information about how you access and use the App, including:
        </p>
        <ul>
          <li>Search queries and preferences</li>
          <li>Saved parking locations (stored locally on your device)</li>
          <li>App features you interact with</li>
          <li>Device information (model, operating system version)</li>
        </ul>

        <h3>
          1.3 Third-Party Data
        </h3>
        <p>
          Park Glide integrates with third-party services to provide parking information:
        </p>
        <ul>
          <li>
            <strong>Google Maps API:</strong> Used to display parking locations and provide navigation
          </li>
          <li>
            <strong>Google Places API:</strong> Used to retrieve parking space information, reviews, and ratings
          </li>
        </ul>
      </div>

      <div>
        <h2>
          2. How We Use Your Information
        </h2>
        <p>
          We use the information we collect to:
        </p>
        <ul>
          <li>Provide parking space search functionality based on your location</li>
          <li>Display nearby parking options with accurate distance calculations</li>
          <li>Enable navigation to selected parking locations</li>
          <li>Save your favorite parking spots locally on your device</li>
          <li>Improve app performance and user experience</li>
          <li>Respond to your inquiries and provide customer support</li>
        </ul>
      </div>

      <div>
        <h2>
          3. Data Storage and Security
        </h2>
        <p>
          We implement appropriate technical and organizational security measures to protect your information:
        </p>
        <ul>
          <li>Location data is processed in real-time and not stored on our servers</li>
          <li>Saved parking locations are stored locally on your device using secure storage</li>
          <li>We do not maintain a database of user locations or personal information</li>
          <li>All data transmission uses secure HTTPS connections</li>
        </ul>
      </div>

      <div>
        <h2>
          4. Third-Party Services
        </h2>
        <p>
          Park Glide uses the following third-party services:
        </p>

        <h3>
          4.1 Google Maps Platform
        </h3>
        <p>
          We use Google Maps API and Google Places API to provide mapping and parking information. Your use of these services is subject to Google's Privacy Policy:{' '}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" >
            https://policies.google.com/privacy
          </a>
        </p>

        <h3>
          4.2 External Navigation
        </h3>
        <p>
          When you tap "Get Directions," the app opens Google Maps or your default navigation app. Your interaction with these apps is governed by their respective privacy policies.
        </p>
      </div>

      <div>
        <h2>
          5. Data Sharing and Disclosure
        </h2>
        <p>
          We do not sell, trade, or rent your personal information to third parties. We may share information only in the following circumstances:
        </p>
        <ul>
          <li>
            <strong>With Your Consent:</strong> We may share information when you give us explicit permission
          </li>
          <li>
            <strong>Legal Requirements:</strong> If required by law, court order, or governmental authority
          </li>
          <li>
            <strong>Service Providers:</strong> With third-party services (like Google Maps) necessary to operate the app
          </li>
        </ul>
      </div>

      <div>
        <h2>
          6. Your Privacy Rights
        </h2>
        <p>
          You have the following rights regarding your information:
        </p>
        <ul>
          <li>
            <strong>Access:</strong> You can access your saved parking locations within the app
          </li>
          <li>
            <strong>Deletion:</strong> You can delete saved parking spots at any time
          </li>
          <li>
            <strong>Location Control:</strong> You can disable location services in your device settings
          </li>
          <li>
            <strong>App Removal:</strong> Uninstalling the app removes all locally stored data
          </li>
        </ul>
      </div>

      <div>
        <h2>
          7. Children's Privacy
        </h2>
        <p>
          Park Glide is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
        </p>
      </div>

      <div>
        <h2>
          8. Changes to This Privacy Policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any changes by:
        </p>
        <ul>
          <li>Updating the "Last Updated" date at the top of this policy</li>
          <li>Posting the new Privacy Policy in the app and on our website</li>
          <li>Sending you a notification through the app (for material changes)</li>
        </ul>
        <p>
          Your continued use of the App after any changes indicates your acceptance of the updated Privacy Policy.
        </p>
      </div>

      <div>
        <h2>
          9. International Users
        </h2>
        <p>
          Park Glide is available globally. If you are accessing the App from outside your country of residence, please note that your information may be processed in countries with different data protection laws.
        </p>
      </div>

      <div>
        <h2>
          10. California Privacy Rights
        </h2>
        <p>
          If you are a California resident, you have specific rights under the California Consumer Privacy Act (CCPA):
        </p>
        <ul>
          <li>Right to know what personal information is collected</li>
          <li>Right to know if personal information is sold or disclosed</li>
          <li>Right to opt-out of the sale of personal information</li>
          <li>Right to deletion of personal information</li>
          <li>Right to non-discrimination for exercising your rights</li>
        </ul>
        <p>
          <strong>Note:</strong> Park Glide does not sell your personal information.
        </p>
      </div>

      <div>
        <h2>
          Contact Us
        </h2>
        <p>
          If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
        </p>
        <p>
          <strong>RovitaTech</strong>
        </p>
        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:rovitatech@gmail.com" >
            rovitatech@gmail.com
          </a>
        </p>
        <p>
          <strong>App:</strong> Park Glide
        </p>
      </div>
    </LegalDocument>
  )
}
