import type { Metadata } from 'next'

import { LegalDocument } from '@/components/legal/legal-document'

export const metadata: Metadata = {
  title: 'Privacy Policy - OweBuddy',
  description: 'Privacy Policy for OweBuddy bill-splitting app. Learn how we protect your data.',
  keywords: 'privacy policy, OweBuddy, bill splitting, data protection, Rovitatech',
}

export default function OweBuddyPrivacyPolicy() {
  return (
    <LegalDocument
      app="owebuddy"
      kind="privacy"
      title="Privacy Policy"
      subtitle="OweBuddy"
      dates={["Effective Date: January 15, 2026", "Last Updated: January 15, 2026"]}
    >
      <p>
        Welcome to OweBuddy! Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application ("App"). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the App.
      </p>

      <p>
        Key Points:
      </p>
      <ul>
        <li>We only collect information necessary to provide our bill-splitting services</li>
        <li>Your data is securely stored using Firebase services</li>
        <li>We never sell your personal information to third parties</li>
        <li>You have control over your data and can delete it at any time</li>
      </ul>
      <div>
        <h2>
          1. Information We Collect
        </h2>

        <h3>
          1.1 Personal Information
        </h3>
        <p>
          When you register for an account, we may collect:
        </p>
        <ul>
          <li>
            <strong>Email Address:</strong> Used for account creation and authentication
          </li>
          <li>
            <strong>Display Name:</strong> Your chosen username visible to other group members
          </li>
          <li>
            <strong>Phone Number:</strong> Optional, for contact purposes within groups
          </li>
          <li>
            <strong>Profile Information:</strong> Any additional information you choose to provide
          </li>
        </ul>

        <h3>
          1.2 Financial Information
        </h3>
        <p>
          We collect expense-related data including:
        </p>
        <ul>
          <li>Expense amounts and descriptions</li>
          <li>Payment method preferences (Cash, UPI, EasyPaisa, JazzCash)</li>
          <li>Currency preferences</li>
          <li>Group balances and settlement records</li>
        </ul>
        <p>
          <strong>Note:</strong> We do NOT collect or store bank account numbers, credit card details, or payment credentials
        </p>

        <h3>
          1.3 Images and Files
        </h3>
        <ul>
          <li>
            <strong>Receipt Photos:</strong> Images you upload as proof of expenses
          </li>
          <li>
            <strong>Payment Proof Screenshots:</strong> Images uploaded to verify settlements
          </li>
          <li>All images are stored securely in Firebase Storage</li>
        </ul>

        <h3>
          1.4 Usage Data
        </h3>
        <p>
          We automatically collect certain information when you use the App:
        </p>
        <ul>
          <li>Device information (model, operating system version)</li>
          <li>App usage statistics and crash reports</li>
          <li>Log data (timestamps, features accessed)</li>
          <li>IP address and general location data</li>
        </ul>
      </div>
      <div>
        <h2>
          2. How We Use Your Information
        </h2>
        <p>
          We use the collected information for the following purposes:
        </p>

        <h3>
          2.1 Core Functionality
        </h3>
        <ul>
          <li>Create and manage your user account</li>
          <li>Enable bill splitting and expense tracking</li>
          <li>Calculate balances between group members</li>
          <li>Process settlement requests and payment proofs</li>
          <li>Generate PDF expense reports</li>
        </ul>

        <h3>
          2.2 Communication
        </h3>
        <ul>
          <li>Send notifications about group activities and settlements</li>
          <li>Respond to your inquiries and support requests</li>
          <li>Send important updates about the App</li>
        </ul>

        <h3>
          2.3 Improvement and Analytics
        </h3>
        <ul>
          <li>Analyze usage patterns to improve features</li>
          <li>Debug and fix technical issues</li>
          <li>Develop new features based on user needs</li>
          <li>Ensure security and prevent fraud</li>
        </ul>
      </div>

      <div>
        <h2>
          3. How We Share Your Information
        </h2>

        <h3>
          3.1 Within Groups
        </h3>
        <p>
          When you join a group, the following information is visible to other group members:
        </p>
        <ul>
          <li>Your display name</li>
          <li>Expenses you create or are involved in</li>
          <li>Your balance within the group</li>
          <li>Payment proofs you submit (visible to group admins)</li>
        </ul>

        <h3>
          3.2 Service Providers
        </h3>
        <p>
          We use third-party services to operate our App:
        </p>
        <ul>
          <li>
            <strong>Firebase (Google):</strong> Authentication, database, and file storage
          </li>
          <li>
            <strong>Google Fonts:</strong> Typography services
          </li>
          <li>These providers have their own privacy policies and security measures</li>
        </ul>

        <h3>
          3.3 Legal Requirements
        </h3>
        <p>
          We may disclose your information if required to:
        </p>
        <ul>
          <li>Comply with legal obligations or court orders</li>
          <li>Protect our rights, property, or safety</li>
          <li>Prevent fraud or security issues</li>
          <li>Respond to government requests</li>
        </ul>

        <h3>
          3.4 What We DON'T Do
        </h3>
        <ul>
          <li>❌ We do NOT sell your personal information to third parties</li>
          <li>❌ We do NOT share your data with advertisers</li>
          <li>❌ We do NOT use your data for marketing purposes without consent</li>
        </ul>
      </div>
      <div>
        <h2>
          4. Data Security
        </h2>
        <p>
          We implement industry-standard security measures to protect your information:
        </p>
        <ul>
          <li>
            <strong>Encryption:</strong> Data is encrypted in transit using HTTPS/TLS
          </li>
          <li>
            <strong>Firebase Security:</strong> Firestore security rules restrict data access
          </li>
          <li>
            <strong>Authentication:</strong> Secure Firebase Authentication system
          </li>
          <li>
            <strong>Storage Security:</strong> Images stored with access controls
          </li>
          <li>
            <strong>Regular Updates:</strong> We keep our security measures up to date
          </li>
        </ul>
        <p>
          <strong>Important:</strong> While we strive to protect your data, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.
        </p>
      </div>

      <div>
        <h2>
          5. Data Retention
        </h2>
        <ul>
          <li>
            <strong>Active Accounts:</strong> We retain your data as long as your account is active
          </li>
          <li>
            <strong>Deleted Accounts:</strong> Data is deleted within 30 days of account deletion
          </li>
          <li>
            <strong>Group Data:</strong> When you leave a group, your expense history remains for other members but your personal details are anonymized
          </li>
          <li>
            <strong>Backups:</strong> Backup copies may persist for up to 90 days
          </li>
          <li>
            <strong>Legal Requirements:</strong> Some data may be retained longer if required by law
          </li>
        </ul>
      </div>

      <div>
        <h2>
          6. Your Privacy Rights
        </h2>
        <p>
          You have the following rights regarding your personal data:
        </p>

        <h3>
          6.1 Access and Portability
        </h3>
        <ul>
          <li>View all your personal data within the App</li>
          <li>Export your expense data as PDF reports</li>
          <li>Request a copy of your data by contacting us</li>
        </ul>

        <h3>
          6.2 Correction and Update
        </h3>
        <ul>
          <li>Update your profile information anytime</li>
          <li>Correct inaccurate data through the App settings</li>
        </ul>

        <h3>
          6.3 Deletion
        </h3>
        <ul>
          <li>Delete your account through App settings</li>
          <li>Request complete data deletion by contacting us</li>
          <li>Leave groups to remove yourself from shared expenses</li>
        </ul>

        <h3>
          6.4 Opt-Out
        </h3>
        <ul>
          <li>Disable push notifications in device settings</li>
          <li>Opt out of analytics (where applicable)</li>
        </ul>
      </div>
      <div>
        <h2>
          7. Children's Privacy
        </h2>
        <p>
          OweBuddy is not intended for users under the age of 13 (or 16 in the European Union). We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately, and we will delete such information.
        </p>
      </div>

      <div>
        <h2>
          8. International Data Transfers
        </h2>
        <p>
          Your information may be transferred to and stored on servers located outside your country of residence. By using OweBuddy, you consent to the transfer of your information to countries that may have different data protection laws than your country.
        </p>
        <p>
          We use Firebase services, which comply with international data protection standards including GDPR.
        </p>
      </div>

      <div>
        <h2>
          9. Third-Party Links
        </h2>
        <p>
          The App may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies before providing any personal information.
        </p>
      </div>

      <div>
        <h2>
          10. Changes to This Privacy Policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any changes by:
        </p>
        <ul>
          <li>Posting the new Privacy Policy in the App</li>
          <li>Updating the "Last Updated" date</li>
          <li>Sending an in-app notification for significant changes</li>
        </ul>
        <p>
          Your continued use of the App after changes constitutes acceptance of the updated policy.
        </p>
      </div>

      <div>
        <h2>
          11. Regional Privacy Rights
        </h2>

        <h3>
          11.1 GDPR (European Union)
        </h3>
        <p>
          If you are in the EU, you have additional rights under GDPR:
        </p>
        <ul>
          <li>Right to access your personal data</li>
          <li>Right to rectification of inaccurate data</li>
          <li>Right to erasure ("right to be forgotten")</li>
          <li>Right to restrict processing</li>
          <li>Right to data portability</li>
          <li>Right to object to processing</li>
          <li>Right to withdraw consent</li>
        </ul>

        <h3>
          11.2 CCPA (California)
        </h3>
        <p>
          California residents have the right to:
        </p>
        <ul>
          <li>Know what personal information is collected</li>
          <li>Know if personal information is sold or disclosed</li>
          <li>Opt-out of the sale of personal information</li>
          <li>Request deletion of personal information</li>
          <li>Non-discrimination for exercising privacy rights</li>
        </ul>
      </div>

      <div>
        <h2>
          12. Contact Us
        </h2>
        <p>
          If you have questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us:
        </p>

        <p>
          <strong>Support:</strong>{' '}
          <a href="mailto:rovitatech@gmail.com" >
            rovitatech@gmail.com
          </a>
        </p>

      </div>

      <div>
        <h2>
          13. Consent
        </h2>
        <p>
          By using OweBuddy, you consent to this Privacy Policy and agree to its terms. If you do not agree with this policy, please do not use the App.
        </p>
      </div>
    </LegalDocument>
  )
}
