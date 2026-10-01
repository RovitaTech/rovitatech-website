import type { Metadata } from 'next'
import Link from 'next/link'

import { EmailLink, Item, List, P, PolicyShell, Section, SubSection, linkStyle } from './policy-ui'

export const metadata: Metadata = {
  title: 'Privacy Policy - Carmexio | Rovitatech',
  description: 'Privacy Policy for Carmexio, the app to buy and sell inspected pre-owned cars in Mexico. Learn how account, listing, photo and chat data is handled.',
  keywords: 'privacy policy, Carmexio, used cars Mexico, autos seminuevos, car marketplace, data protection, Rovitatech',
}

export default function CarmexioPrivacyPolicy() {
  return (
    <PolicyShell
      heading="Privacy Policy"
      effectiveDate="Effective Date: October 1, 2026"
      footer="© 2026 RovitaTech. All rights reserved."
    >
      <Section title="Introduction">
        <P>
          This Privacy Policy explains what information Carmexio (the “app”, including the Carmexio mobile apps for iOS and Android and the Carmexio website) collects, how it is used, and the choices you have. Carmexio is a pre-owned car dealer in Mexico: cars are inspected and sold through Carmexio showrooms, and buyers deal with Carmexio, never directly with the car’s owner. The app is provided by RovitaTech (“we”, “us”). Questions? Write to <EmailLink />.
        </P>
        <P>
          <Link href="/privacy-policy/carmexio/es" style={linkStyle}>
            Leer este aviso en español
          </Link>
        </P>
      </Section>

      <Section title="1. Information We Collect">
        <SubSection title="Account information">
          <P>
            You can browse cars, search, and read inspection reports without an account. When you create an account we collect your full name, email address, phone number and a password. You may also add your city and a profile photo.
          </P>
        </SubSection>

        <SubSection title="Car listings you post">
          <P>When you post a car for sale we collect the details you enter, including:</P>
          <List>
            <Item>Make, model, version, year, price, mileage, fuel, transmission, body type, color, features and description</Item>
            <Item>The photos of the car that you take or choose for the ad (one per required angle)</Item>
            <Item>The Carmexio showroom you select to inspect and sell the car</Item>
          </List>
          <P>
            Carmexio staff review every listing before it is published and may add an inspection report (overall score, checklist and body condition) about the car.
          </P>
        </SubSection>

        <SubSection title="Messages">
          <P>
            Messages you send in the in-app chat are conversations between you and a Carmexio showroom. They are stored so that you and Carmexio staff can read and answer them.
          </P>
        </SubSection>

        <SubSection title="Activity in the app">
          <P>
            We store the cars you save as favorites and the listings you post, and we count how many times a listing is viewed. Preferences such as theme, recent searches and whether you have seen the welcome screens are stored only on your device.
          </P>
        </SubSection>

        <SubSection title="Automatically collected data">
          <P>
            We do not use the app for advertising and do not embed third-party analytics or ad SDKs. Our hosting and backend providers (see below) may log standard service data such as IP address, device type and request timestamps for security and reliability purposes.
          </P>
        </SubSection>
      </Section>

      <Section title="2. Device Permissions">
        <List>
          <Item label="Camera:">used only when you take photos of your car for an ad or a profile photo.</Item>
          <Item label="Photo library:">used only when you choose an existing photo for an ad or your profile.</Item>
        </List>
        <P>
          The app does not access your contacts, microphone or precise location. Photos are uploaded only when you take or select them yourself.
        </P>
      </Section>

      <Section title="3. How We Use Information">
        <P>We use the information above only to operate the app’s core features:</P>
        <List>
          <Item>Creating and securing your account</Item>
          <Item>Reviewing, inspecting, publishing and managing the car listings you post</Item>
          <Item>Letting you chat with Carmexio showrooms, and letting staff contact you about your listing, a visit or a test drive</Item>
          <Item>Showing your favorites and the status of your ads</Item>
          <Item>Preventing fraud and keeping the service safe</Item>
        </List>
        <P>
          We do not sell personal information, and we do not use it for advertising or profiling.
        </P>
      </Section>

      <Section title="4. What Other People Can See">
        <List>
          <Item label="Public:">once Carmexio approves a listing, the car’s details, photos and inspection report are visible to everyone who uses the app or website.</Item>
          <Item label="Not public:">your name, email address and phone number are never shown to buyers. Buyers contact the Carmexio showroom, not the owner.</Item>
          <Item label="Carmexio staff:">staff at the showroom handling your car or conversation can see your listing, your messages and your contact details so they can serve you.</Item>
        </List>
      </Section>

      <Section title="5. Where Data Is Stored">
        <P>
          Account, listing and chat data is stored with Supabase (authentication, database and file storage), and the Carmexio API is hosted on Railway. Data is encrypted in transit (HTTPS) and may be processed on servers outside Mexico. These providers process data on our behalf under their own privacy and security practices:{' '}
          <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            supabase.com/privacy
          </a>{' '}
          and{' '}
          <a href="https://railway.com/legal/privacy" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            railway.com/legal/privacy
          </a>
          .
        </P>
      </Section>

      <Section title="6. Sharing of Information">
        <P>We do not share personal information with third parties except:</P>
        <List>
          <Item>Carmexio showroom staff, as described above, to review listings, answer messages and arrange visits</Item>
          <Item>Our service providers (currently Supabase and Railway) who process data on our behalf to run the app</Item>
          <Item>If required by law, regulation, or legal process</Item>
        </List>
      </Section>

      <Section title="7. Calls, WhatsApp and Maps">
        <P>
          The app can open your phone dialer or WhatsApp with a showroom’s number, and your maps app with a showroom’s address, using the apps on your device. Those apps are governed by their own privacy policies; we do not receive the content of your calls or WhatsApp messages.
        </P>
      </Section>

      <Section title="8. Data Retention">
        <P>
          We keep account data for as long as your account is active. You can delete a listing you posted from within the app; its photos are removed from our storage. Chat messages are kept while the conversation’s account exists. When an account is deleted, we delete or anonymize the associated personal data, unless we must keep certain records to comply with legal obligations.
        </P>
      </Section>

      <Section title="9. Deleting Your Account">
        <P>
          To delete your account and the data associated with it, email <EmailLink /> from the email address of your account with the subject “Delete my Carmexio account”. We will confirm and complete the deletion within 30 days.
        </P>
      </Section>

      <Section title="10. Your Rights">
        <P>
          You can review and correct your profile (name, phone, city, photo) and edit or delete your listings directly in the app. You may also ask us to access, correct, delete, or stop using your personal data, or withdraw your consent, by contacting us below.
        </P>
        <P>
          If you are in Mexico, these are your ARCO rights (Acceso, Rectificación, Cancelación y Oposición) under the Ley Federal de Protección de Datos Personales en Posesión de los Particulares. We answer requests within 20 business days.
        </P>
      </Section>

      <Section title="11. Children's Privacy">
        <P>
          The app is intended for adults (18 and over) who want to buy or sell a car. It is not directed at children, and we do not knowingly collect data from children.
        </P>
      </Section>

      <Section title="12. Changes to This Policy">
        <P>
          We may update this policy from time to time. Changes will be posted on this page with a new effective date.
        </P>
      </Section>

      <Section title="13. Contact Us">
        <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
          If you have any questions about this Privacy Policy or our data practices, please contact us at:
        </p>
        <p style={{ color: '#374151', lineHeight: '1.6' }}>
          <strong>RovitaTech</strong>
          <br />
          <strong>Email:</strong> <EmailLink />
        </p>
      </Section>
    </PolicyShell>
  )
}
