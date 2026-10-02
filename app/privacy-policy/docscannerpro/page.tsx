import type { Metadata } from 'next'

import { LegalDocument } from '@/components/legal/legal-document'
import { Item, List, P, Section, SubSection } from '@/components/legal/prose'

export const metadata: Metadata = {
  title: 'Privacy Policy - Docs Scanner Pro',
  description: 'Privacy Policy for Docs Scanner Pro, the iPhone and iPad document scanner. Scans stay on your device; files are only uploaded when you use a conversion tool, and are deleted right after processing.',
  keywords: 'privacy policy, Docs Scanner Pro, document scanner, PDF scanner, OCR, eSign, iPhone, iPad, data protection, Rovitatech',
}

export default function DocsScannerProPrivacyPolicy() {
  return (
    <LegalDocument
      app="docscannerpro"
      kind="privacy"
      title="Privacy Policy"
      subtitle="Docs Scanner Pro"
      dates={["Effective Date: October 2, 2026"]}
    >
      <Section title="Introduction">
        <P>
          This Privacy Policy explains how Docs Scanner Pro (the “app”) for iPhone and iPad handles your information. The app is provided by RovitaTech (“we”, “us”). In short: your scans and documents are stored on your device, most features (scanning, text recognition, organizing) run entirely on your device, and we never sell your data or use it for advertising. Questions? Write to{' '}
          <a href="mailto:rovitatech@gmail.com">rovitatech@gmail.com</a>.
        </P>
      </Section>

      <Section title="1. Information Stored on Your Device">
        <P>The following stays on your iPhone or iPad and is not sent to us:</P>
        <List>
          <Item label="Scans and documents:">
            the pages you scan and the PDFs, images and files you import, along with their titles, page counts, folders and creation dates.
          </Item>
          <Item label="Signatures:">signatures you save for reuse when signing documents.</Item>
          <Item label="Profile details:">
            if you sign in, the name, email address or phone number you provide is saved in the app on your device to personalize it. We do not run our own account servers.
          </Item>
          <Item label="Preferences and usage counters:">
            settings such as Dark Mode, app lock and camera flash, plus counters such as daily scans used, scan streaks and EcoTrack (pages scanned, paper saved).
          </Item>
        </List>
      </Section>

      <Section title="2. On-Device Processing">
        <P>
          Edge detection, auto-crop, image enhancement, text recognition (OCR), document classification into smart folders and expiry-date detection all run on your device using Apple’s frameworks. Your document contents are not sent anywhere for these features.
        </P>
      </Section>

      <Section title="3. Camera, Photos and Notifications">
        <List>
          <Item label="Camera:">used only to scan documents, ID cards, receipts and QR codes. Images are processed on your device.</Item>
          <Item label="Photo Library:">used only to import the images you pick.</Item>
          <Item label="Notifications:">
            if a scanned document has an expiry date (for example a passport or ID), the app can schedule a local reminder on your device. These reminders are not sent through our servers.
          </Item>
          <Item label="Face ID / Touch ID:">
            if you turn on app lock, authentication is handled by iOS. The app never receives your biometric data.
          </Item>
        </List>
        <P>You can change any of these permissions at any time in iOS Settings.</P>
      </Section>

      <Section title="4. Conversion and PDF Tools">
        <P>
          Some tools need a server: converting PDFs to Word, Excel or PowerPoint, compressing PDFs, signing PDFs and adding watermarks. When you use one of them, the file you selected is uploaded over an encrypted (HTTPS) connection to our conversion service, processed, and the result is sent back to your device.
        </P>
        <List>
          <Item>Files are processed in temporary storage and deleted as soon as the request finishes. We do not keep, read, or use them for any other purpose.</Item>
          <Item>
            To protect the service from abuse, the app signs in to it anonymously. This creates a random identifier through our authentication provider, Supabase. It contains no name, email or other personal details.
          </Item>
          <Item>Our hosting provider may keep standard technical logs (such as IP address, time and request size) for security and reliability.</Item>
        </List>
        <P>If you never use these tools, no document leaves your device through them.</P>
      </Section>

      <Section title="5. iCloud Sync">
        <P>
          If you turn on Cloud Sync, your documents and their details (title, page count, category and date) are stored in your private iCloud database through Apple’s CloudKit. This data is protected by your Apple Account and is not accessible to us. You can turn sync off at any time in the app or in iOS Settings.
        </P>
      </Section>

      <Section title="6. Subscriptions and Purchases">
        <P>
          Purchases are processed by Apple. We never see or store your payment details. To manage your subscription and unlock Pro features, the app uses RevenueCat, which receives an anonymous app user ID, your purchase history and basic device information such as app version and country. See{' '}
          <a href="https://www.revenuecat.com/privacy/" target="_blank" rel="noopener noreferrer">
            RevenueCat’s privacy policy
          </a>
          .
        </P>
      </Section>

      <Section title="7. Third-Party Services">
        <P>We only use the following service providers, and only for the purposes described above:</P>
        <List>
          <Item label="Apple (App Store, iCloud/CloudKit):">purchases and optional sync.</Item>
          <Item label="RevenueCat:">subscription management.</Item>
          <Item label="Supabase and Railway:">anonymous sign-in and hosting for the conversion service.</Item>
        </List>
        <P>The app contains no third-party advertising or analytics SDKs, and we do not track you across other apps or websites.</P>
        <SubSection title="Apple">
          <P>
            Apple may collect diagnostic and crash information according to your device settings and{' '}
            <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">
              Apple’s privacy policy
            </a>
            . This is handled by Apple, not by us.
          </P>
        </SubSection>
      </Section>

      <Section title="8. Data Retention and Deletion">
        <List>
          <Item>Documents and app data stay on your device until you delete them, or until you delete the app.</Item>
          <Item>Files sent to the conversion service are deleted immediately after processing.</Item>
          <Item>Synced documents stay in your iCloud until you delete them or turn off sync and remove them from iCloud.</Item>
          <Item>You can export or erase your data at any time from the app’s settings.</Item>
        </List>
      </Section>

      <Section title="9. Security">
        <P>
          Data sent from the app uses encrypted HTTPS connections. On your device, your data is protected by iOS security, and you can add an extra layer with the app’s Face ID / Touch ID lock. No method of storage or transmission is completely secure, but we work to protect your information.
        </P>
      </Section>

      <Section title="10. Children's Privacy">
        <P>
          The app is not directed at children under 13, and we do not knowingly collect personal information from children.
        </P>
      </Section>

      <Section title="11. Your Rights">
        <P>
          Depending on where you live, laws such as the GDPR and CCPA give you rights to access, correct, export or delete your personal data. Because your documents and profile are stored on your device and in your own iCloud, you control them directly in the app. For any request concerning data held by our service providers, contact us below and we will help.
        </P>
      </Section>

      <Section title="12. Changes to This Policy">
        <P>
          If we change how the app handles data, we will update this page and its effective date before the change takes effect.
        </P>
      </Section>

      <Section title="13. Contact Us">
        <p>
          If you have any questions about this Privacy Policy or our data practices, please contact us at:
        </p>
        <p>
          <strong>RovitaTech</strong>
          <br />
          <strong>Email:</strong>{' '}
          <a href="mailto:rovitatech@gmail.com">rovitatech@gmail.com</a>
        </p>
      </Section>
    </LegalDocument>
  )
}
