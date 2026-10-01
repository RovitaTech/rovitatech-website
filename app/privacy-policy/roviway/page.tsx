import type { Metadata } from 'next'

import { LegalDocument } from '@/components/legal/legal-document'

export const metadata: Metadata = {
  title: 'Privacy Policy - RoviWay',
  description: 'Privacy Policy for RoviWay navigation app. Learn how we protect your data and what information we collect.',
  keywords: 'privacy policy, RoviWay, navigation app, data protection, Rovitatech',
}

export default function RoviWayPrivacyPolicy() {
  return (
    <LegalDocument
      app="roviway"
      kind="privacy"
      title="Privacy Policy"
      subtitle="RoviWay"
      dates={["Last Updated: January 2025"]}
    >
      <p>
        At <strong>RoviWay</strong>, we respect your privacy and are committed to protecting your personal data. 
        This privacy policy explains what information we collect, what we don't collect, and how we use your data.
      </p>

      <div>
        <h2>
          📊 What Information We Collect
        </h2>

        <h3>
          ✅ We DO Collect:
        </h3>
        <ul>
          <li>
            <strong>Location Data:</strong> Your current location to provide navigation and nearby attractions (only when you use the app)
          </li>
          <li>
            <strong>Search History:</strong> Your searched destinations and routes to improve recommendations
          </li>
          <li>
            <strong>Saved Routes:</strong> Routes and places you bookmark for quick access
          </li>
          <li>
            <strong>App Usage Data:</strong> How you interact with the app to improve user experience
          </li>
          <li>
            <strong>Device Information:</strong> Device type, OS version, and app version for technical support
          </li>
        </ul>

        <h3>
          ❌ We DO NOT Collect:
        </h3>
        <ul>
          <li>
            <strong>Personal Identity:</strong> No name, email, or phone number required
          </li>
          <li>
            <strong>Payment Information:</strong> No credit card or banking details
          </li>
          <li>
            <strong>Contacts:</strong> We don't access your contact list
          </li>
          <li>
            <strong>Photos/Media:</strong> We don't access your photos or media files
          </li>
          <li>
            <strong>SMS/Call Logs:</strong> We don't read your messages or call history
          </li>
          <li>
            <strong>Background Location:</strong> We don't track your location when app is closed
          </li>
          <li>
            <strong>Microphone/Camera:</strong> We don't access your microphone or camera
          </li>
        </ul>
      </div>

      <div>
        <h2>
          🎯 How We Use Your Information
        </h2>
        <ul>
          <li>
            <strong>Navigation:</strong> To provide accurate transit directions and routes
          </li>
          <li>
            <strong>Recommendations:</strong> To suggest nearby attractions and destinations
          </li>
          <li>
            <strong>Saved Data:</strong> To store your favorite routes and places locally on your device
          </li>
          <li>
            <strong>App Improvement:</strong> To analyze usage patterns and fix bugs
          </li>
          <li>
            <strong>Performance:</strong> To optimize app speed and reliability
          </li>
        </ul>
      </div>

      <div>
        <h2>
          🔒 Data Storage & Security
        </h2>

        <h3>
          Local Storage
        </h3>
        <p>
          Most of your data (saved routes, preferences) is stored locally on your device and never leaves your phone.
        </p>

        <h3>
          Cloud Storage
        </h3>
        <p>
          We use secure cloud services only for:
        </p>
        <ul>
          <li>Real-time transit data from public APIs</li>
          <li>Destination information and reviews</li>
          <li>Map data and navigation</li>
        </ul>

        <h3>
          Security Measures
        </h3>
        <ul>
          <li>All data transmission is encrypted (HTTPS/SSL)</li>
          <li>No data is sold to third parties</li>
          <li>Regular security audits and updates</li>
        </ul>
      </div>

      <div>
        <h2>
          🌐 Third-Party Services
        </h2>
        <p>
          We use the following third-party services:
        </p>
        <ul>
          <li>
            <strong>Google Maps API:</strong> For maps and navigation (subject to Google's privacy policy)
          </li>
          <li>
            <strong>Transit APIs:</strong> For real-time public transport data
          </li>
          <li>
            <strong>Places API:</strong> For destination information and reviews
          </li>
        </ul>
        <p className="legal-fine">
          These services have their own privacy policies. We recommend reviewing them.
        </p>
      </div>

      <div>
        <h2>
          👤 Your Rights
        </h2>
        <p>
          You have the right to:
        </p>
        <ul>
          <li>
            <strong>Access:</strong> View what data we have about you
          </li>
          <li>
            <strong>Delete:</strong> Request deletion of your data
          </li>
          <li>
            <strong>Control:</strong> Turn off location services anytime in app settings
          </li>
          <li>
            <strong>Export:</strong> Download your saved routes and places
          </li>
          <li>
            <strong>Opt-out:</strong> Disable analytics and tracking
          </li>
        </ul>
      </div>

      <div>
        <h2>
          🔄 Data Retention
        </h2>
        <ul>
          <li>
            <strong>Location Data:</strong> Not stored permanently, only used during active session
          </li>
          <li>
            <strong>Search History:</strong> Kept for 90 days, then automatically deleted
          </li>
          <li>
            <strong>Saved Routes:</strong> Kept until you delete them
          </li>
          <li>
            <strong>Usage Analytics:</strong> Anonymized and kept for 12 months
          </li>
        </ul>
      </div>

      <div>
        <h2>
          👶 Children's Privacy
        </h2>
        <p>
          RoviWay does not knowingly collect data from children under 13. If you believe a child has provided us with personal information, please contact us immediately.
        </p>
      </div>

      <div>
        <h2>
          🔔 Changes to Privacy Policy
        </h2>
        <p>
          We may update this privacy policy from time to time. We will notify you of any changes by:
        </p>
        <ul>
          <li>Posting the new policy in the app</li>
          <li>Updating the "Last Updated" date</li>
          <li>Sending an in-app notification for major changes</li>
        </ul>
      </div>

      <div>
        <h2>
          📱 Permissions Explained
        </h2>
        <h3>
          Why We Need Certain Permissions:
        </h3>
        <ul>
          <li>
            <strong>Location:</strong> To show your position on the map and provide directions
          </li>
          <li>
            <strong>Internet:</strong> To fetch real-time transit data and maps
          </li>
          <li>
            <strong>Storage:</strong> To save your favorite routes and offline maps
          </li>
        </ul>
        <p className="legal-fine">
          You can revoke these permissions anytime in your device settings.
        </p>
      </div>

      <div>
        <h2>
          🌍 International Users
        </h2>
        <p>
          RoviWay is available worldwide. Your data may be processed in different countries, but we ensure the same level of protection regardless of location.
        </p>
      </div>

      <div>
        <h2>
          🚫 What We Will Never Do
        </h2>
        <ul>
          <li>Sell your personal data to advertisers</li>
          <li>Share your location with third parties without consent</li>
          <li>Track you when the app is closed</li>
          <li>Send spam or unwanted notifications</li>
          <li>Access your personal files or contacts</li>
        </ul>
      </div>

      <div>
        <h2>
          📧 Contact Us
        </h2>
        <p>
          If you have questions about this privacy policy or your data:
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
