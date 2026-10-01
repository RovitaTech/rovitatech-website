import type { Metadata } from 'next'

import { LegalDocument } from '@/components/legal/legal-document'

export const metadata: Metadata = {
  title: 'Privacy Policy - MemeForge',
  description: 'Privacy Policy for MemeForge meme creation app. Learn how we protect your data.',
  keywords: 'privacy policy, MemeForge, meme creator, data protection, Rovitatech',
}

export default function MemeForgePrivacyPolicy() {
  return (
    <LegalDocument
      app="memeforge"
      kind="privacy"
      title="Privacy Policy"
      subtitle="MemeForge"
      dates={["Last Updated: January 15, 2026"]}
    >
      <p>
        RovitaTech ("we", "our", or "us") operates the MemeForge mobile application (the "App"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our App.
      </p>
      <p>
        Please read this Privacy Policy carefully. By using the App, you agree to the collection and use of information in accordance with this policy. If you do not agree with the terms of this Privacy Policy, please do not access the App.
      </p>
      <div>
        <h2>
          1. Information We Collect
        </h2>

        <h3>
          1.1 Information You Provide
        </h3>
        <p>
          MemeForge is designed with privacy in mind. We do NOT require you to create an account or provide personal information to use the App. However, we may collect the following:
        </p>
        <ul>
          <li>
            <strong>Media Files:</strong> Photos and videos you select from your device gallery or capture with your camera to create memes. These files are processed locally on your device and are not uploaded to our servers.
          </li>
          <li>
            <strong>Created Content:</strong> Memes you create are stored locally on your device only.
          </li>
        </ul>

        <h3>
          1.2 Automatically Collected Information
        </h3>
        <p>
          When you use the App, we may automatically collect certain information:
        </p>
        <ul>
          <li>
            <strong>Device Information:</strong> Device type, operating system version, unique device identifiers, and mobile network information.
          </li>
          <li>
            <strong>Usage Data:</strong> Information about how you interact with the App, including features used, time spent in the App, and crash reports.
          </li>
          <li>
            <strong>App Performance Data:</strong> Technical data to help us identify and fix bugs and improve app performance.
          </li>
        </ul>

        <h3>
          1.3 Third-Party Services
        </h3>
        <p>
          The App uses third-party services that may collect information used to identify you:
        </p>
        <ul>
          <li>
            <strong>Google AdMob:</strong> For displaying advertisements (free version only)
          </li>
          <li>
            <strong>RevenueCat:</strong> For managing in-app purchases and subscriptions
          </li>
          <li>
            <strong>Google Fonts:</strong> For providing typography options
          </li>
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
          <li>To process your meme creations locally on your device</li>
          <li>To manage in-app purchases and verify premium subscriptions</li>
          <li>To display relevant advertisements (free version only)</li>
          <li>To improve and optimize the App's performance</li>
          <li>To detect, prevent, and address technical issues</li>
          <li>To analyze usage patterns and improve user experience</li>
          <li>To comply with legal obligations</li>
        </ul>
      </div>
      <div>
        <h2>
          3. Data Storage and Security
        </h2>

        <h3>
          3.1 Local Storage
        </h3>
        <p>
          <strong>All your created memes and editing history are stored locally on your device only.</strong> We do not upload your memes, photos, videos, or any creative content to our servers or any cloud storage.
        </p>

        <h3>
          3.2 Security Measures
        </h3>
        <p>
          We implement appropriate technical and organizational security measures to protect your information. However, please note that no method of transmission over the internet or electronic storage is 100% secure.
        </p>

        <h3>
          3.3 Data Retention
        </h3>
        <p>
          Your locally stored memes remain on your device until you delete them through the App or uninstall the App. Usage data collected by third-party services is retained according to their respective privacy policies.
        </p>
      </div>

      <div>
        <h2>
          4. Permissions We Request
        </h2>
        <p>
          The App requires the following permissions to function properly:
        </p>
        <ul>
          <li>
            <strong>Camera:</strong> To capture photos and videos for meme creation
          </li>
          <li>
            <strong>Photo Library/Gallery:</strong> To select existing photos and videos from your device
          </li>
          <li>
            <strong>Storage:</strong> To save your created memes to your device gallery
          </li>
          <li>
            <strong>Internet:</strong> To display ads, process in-app purchases, and load online templates
          </li>
        </ul>
        <p>
          You can manage these permissions in your device settings at any time.
        </p>
      </div>

      <div>
        <h2>
          5. Third-Party Services and Their Privacy Policies
        </h2>
        <p>
          The App integrates with the following third-party services. We encourage you to review their privacy policies:
        </p>
        <ul>
          <li>
            <strong>Google AdMob:</strong>{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" >
              https://policies.google.com/privacy
            </a>
          </li>
          <li>
            <strong>RevenueCat:</strong>{' '}
            <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer" >
              https://www.revenuecat.com/privacy
            </a>
          </li>
          <li>
            <strong>Google Fonts:</strong>{' '}
            <a href="https://developers.google.com/fonts/faq/privacy" target="_blank" rel="noopener noreferrer" >
              https://developers.google.com/fonts/faq/privacy
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h2>
          6. Advertising
        </h2>
        <p>
          The free version of MemeForge displays advertisements through Google AdMob. AdMob may use cookies and similar technologies to serve personalized ads based on your interests. You can opt out of personalized advertising by adjusting your device settings:
        </p>
        <ul>
          <li>
            <strong>iOS:</strong> Settings &gt; Privacy &gt; Advertising &gt; Limit Ad Tracking
          </li>
          <li>
            <strong>Android:</strong> Settings &gt; Google &gt; Ads &gt; Opt out of Ads Personalization
          </li>
        </ul>
        <p>
          Premium subscribers do not see any advertisements.
        </p>
      </div>

      <div>
        <h2>
          7. In-App Purchases
        </h2>
        <p>
          MemeForge offers premium features through in-app purchases managed by RevenueCat. When you make a purchase:
        </p>
        <ul>
          <li>Payment processing is handled by Apple App Store or Google Play Store</li>
          <li>We receive only transaction confirmation and entitlement information</li>
          <li>We do not store your payment card information</li>
          <li>Purchase history is managed by your app store account</li>
        </ul>
      </div>

      <div>
        <h2>
          8. Children's Privacy
        </h2>
        <p>
          MemeForge is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us, and we will take steps to delete such information.
        </p>
      </div>

      <div>
        <h2>
          9. Your Rights and Choices
        </h2>
        <p>
          You have the following rights regarding your information:
        </p>
        <ul>
          <li>
            <strong>Access:</strong> Request information about data we collect
          </li>
          <li>
            <strong>Deletion:</strong> Delete your locally stored memes at any time through the App
          </li>
          <li>
            <strong>Opt-Out:</strong> Disable personalized advertising in your device settings
          </li>
          <li>
            <strong>Uninstall:</strong> Remove the App to delete all locally stored data
          </li>
          <li>
            <strong>Permissions:</strong> Revoke app permissions in your device settings
          </li>
        </ul>
      </div>

      <div>
        <h2>
          10. Contact Us
        </h2>
        <p>
          If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
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
          <strong>App:</strong> MemeForge
        </p>
        <p>
          <strong>Package:</strong> com.rovitatech.memeforge
        </p>
        <p>
          We will respond to your inquiry within 30 days.
        </p>
      </div>

      <div>
        <h2>
          11. Consent
        </h2>
        <p>
          By using MemeForge, you consent to this Privacy Policy and agree to its terms. If you do not agree with this policy, please do not use the App.
        </p>
      </div>
    </LegalDocument>
  )
}
