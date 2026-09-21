import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Privacy Policy - PDF4you | Rovitatech',
  description: 'Privacy Policy for PDF4you, the PDF conversion and editing app. Learn how your files and data are handled.',
  keywords: 'privacy policy, PDF4you, PDF converter, PDF tools, data protection, Rovitatech',
}

const linkStyle = { color: '#2563eb', textDecoration: 'none' } as const

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div style={{ marginBottom: '50px' }}>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
        {title}
      </h2>
      {children}
    </div>
  )
}

function SubSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#374151', marginBottom: '15px', marginTop: '30px' }}>
        {title}
      </h3>
      {children}
    </>
  )
}

function P({ children }: { children: ReactNode }) {
  return (
    <p style={{ color: '#374151', lineHeight: '1.7', fontSize: '16px', marginBottom: '15px' }}>
      {children}
    </p>
  )
}

function List({ children }: { children: ReactNode }) {
  return <ul style={{ marginLeft: '20px', marginBottom: '15px' }}>{children}</ul>
}

function Item({ label, children }: { label?: string; children: ReactNode }) {
  return (
    <li style={{ color: '#374151', marginBottom: '12px', lineHeight: '1.6' }}>
      {label ? <strong>{label} </strong> : null}
      {children}
    </li>
  )
}

const providers = [
  {
    name: 'Supabase',
    role: 'Sign-in, accounts and anonymous sessions',
    data: 'email, hashed password, user ID, session tokens, IP address',
  },
  {
    name: 'Railway (or our hosting provider)',
    role: 'Runs our conversion server',
    data: 'uploaded files while being processed, results, request logs',
  },
  {
    name: 'RevenueCat',
    role: 'Manages purchases and Pro status',
    data: 'app user ID, purchase and subscription details, IP address and device information',
  },
  {
    name: 'Apple / Google',
    role: 'Take payments and run the app stores',
    data: 'handled under their own privacy policies',
  },
] as const

export default function PDF4youPrivacyPolicy() {
  return (
    <div className="policy-page" style={{
      minHeight: '100vh',
      backgroundColor: '#f5f5f5',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div className="policy-card" style={{
        maxWidth: '800px',
        width: '100%',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        margin: '20px 0'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#1f2937', marginBottom: '10px' }}>
            Privacy Policy
          </h1>
          <p style={{ color: '#6b7280', marginBottom: '5px', fontSize: '18px' }}>PDF4you</p>
          <p style={{ color: '#9ca3af', fontSize: '14px' }}>Effective Date: September 21, 2026</p>
        </div>

        <div style={{ textAlign: 'left' }}>
          <Section title="Introduction">
            <P>
              This Privacy Policy explains what information PDF4you (the “app”) collects, how it is used, and the choices you have. The app is provided by RovitaTech (“we”, “us”). Questions? Write to{' '}
              <a href="mailto:rovitatech@gmail.com" style={linkStyle}>rovitatech@gmail.com</a>.
            </P>
          </Section>

          <Section title="1. The Short Version">
            <List>
              <Item>You choose a file and a tool. We send the file over an encrypted connection to our server, convert it, and send the result back to you.</Item>
              <Item>We do not show ads, we do not sell your data, and we do not use your files for advertising or to train any product.</Item>
              <Item>You can use the app without an account. An account is optional, and you need one only to buy PDF4you Pro.</Item>
              <Item>We use a few trusted service providers to run the app (hosting, sign-in and purchases). They are listed in section 6.</Item>
            </List>
          </Section>

          <Section title="2. Information We Collect">
            <SubSection title="2.1 Your files">
              <P>
                When you convert or edit a document, the app uploads the file or files you selected, plus the options you chose (for example page ranges, image quality, a watermark text or a signature you drew). If you use Protect PDF or Unlock PDF, the password you type is also sent so the server can perform the action. We use this only to produce the result you asked for. We do not look at the content of your files.
              </P>
            </SubSection>

            <SubSection title="2.2 Account information (optional)">
              <P>
                If you create an account we collect your email address and a password. Passwords are handled by our sign-in provider and stored only in hashed form. We never see them in readable form after they are entered. If you use “forgot password”, we send a reset link to your email address.
              </P>
            </SubSection>

            <SubSection title="2.3 An anonymous ID (everyone)">
              <P>
                So the app can work without an account, it creates a random, anonymous user ID the first time you use it. It contains no name or email. We use it to let you use the service, to apply the free-plan limits (a daily number of conversions, file size and batch size) and to prevent abuse. If you later sign in, this ID is replaced by your account ID.
              </P>
            </SubSection>

            <SubSection title="2.4 Purchases">
              <P>
                If you buy PDF4you Pro, the payment is processed by Apple (App Store) or Google (Google Play). We never receive your card or payment details. Our purchase provider, RevenueCat, receives your app user ID and information about your purchase and subscription (product, dates, renewal and cancellation status) so we can unlock Pro features and let you restore them on another device.
              </P>
            </SubSection>

            <SubSection title="2.5 What is stored on your device">
              <P>
                The app stores on your phone: your theme choice (light or dark), how many free conversions you have used today, and your sign-in session, which is kept in the phone’s secure storage (Keychain on iPhone, Keystore on Android). Converted files are saved in a temporary folder and stay on your device until you delete them or the system clears its cache. Choosing Save or Share copies the file where you choose.
              </P>
            </SubSection>

            <SubSection title="2.6 Technical and log information">
              <P>
                Like most online services, our servers and hosting providers automatically record technical information about each request, such as your IP address, the time, the type and size of the file, the tool used, the app version, and error messages. We use this to keep the service running, find and fix problems, and protect it from abuse.
              </P>
            </SubSection>

            <SubSection title="2.7 What we do not collect">
              <P>
                We do not use advertising or analytics SDKs, we do not track you across other apps or websites, we do not collect your contacts, location, photos library, microphone or camera, and the app only opens files that you choose with the system file picker.
              </P>
            </SubSection>
          </Section>

          <Section title="3. How We Use Information">
            <List>
              <Item>To convert, edit and return your files, and to run the features you use.</Item>
              <Item>To create and secure your account and keep you signed in.</Item>
              <Item>To apply free-plan limits and to provide Pro features you have bought.</Item>
              <Item>To process, restore and manage purchases and subscriptions.</Item>
              <Item>To keep the service safe, prevent abuse and fraud, and fix bugs.</Item>
              <Item>To answer your messages and provide support.</Item>
              <Item>To meet our legal obligations.</Item>
            </List>
            <P>We do not use your data for advertising and we do not sell it.</P>
          </Section>

          <Section title="4. Legal Bases (EEA, UK and Similar Laws)">
            <P>
              Where the law requires a legal basis, we rely on: performing our contract with you (converting your files, running your account, providing Pro); our legitimate interests in keeping the service secure, preventing abuse, and improving reliability; legal obligations; and, where we ask for it, your consent, which you can withdraw at any time.
            </P>
          </Section>

          <Section title="5. How Long We Keep Information">
            <List>
              <Item label="Uploaded files and converted results:">
                kept only as long as needed to complete the conversion and let you download the result, and then deleted promptly.
              </Item>
              <Item label="Account information:">
                kept while your account exists. If you ask us to delete your account we delete or anonymise your personal data within 30 days, except what we must keep by law.
              </Item>
              <Item label="Anonymous ID and usage limits:">
                kept while needed to apply limits and prevent abuse.
              </Item>
              <Item label="Purchase records:">
                kept for as long as needed for accounting, tax and dispute purposes.
              </Item>
              <Item label="Server logs:">
                kept for a limited period, and longer only where needed to investigate abuse or a security incident.
              </Item>
            </List>
          </Section>

          <Section title="6. Who We Share Information With">
            <P>
              We share information only with service providers that help us run the app, and only what they need for that purpose. They act on our instructions and are bound by their own privacy commitments.
            </P>
            <List>
              {providers.map((provider) => (
                <Item key={provider.name} label={`${provider.name}:`}>
                  {provider.role}. <em>Information involved:</em> {provider.data}.
                </Item>
              ))}
            </List>
            <P>
              We may also disclose information if the law requires it, to protect people’s safety or our rights, or in connection with a merger, sale or reorganisation of our business (we would tell you and you could delete your account first).
            </P>
            <P>
              We do not sell your personal information and we do not share it for cross-context behavioural advertising.
            </P>
          </Section>

          <Section title="7. International Transfers">
            <P>
              Our servers and providers may be in countries other than yours, including the United States. When information is transferred outside the EEA or UK we rely on appropriate safeguards, such as the European Commission’s Standard Contractual Clauses.
            </P>
          </Section>

          <Section title="8. Security">
            <P>
              Files and requests travel over encrypted HTTPS connections. Your sign-in session is kept in your phone’s secure storage. Access to our servers is limited and protected. No system is perfectly secure, so we cannot guarantee absolute security. Please do not upload files you are not permitted to share, and keep your password private.
            </P>
          </Section>

          <Section title="9. Your Choices and Rights">
            <P>
              <strong>Everyone:</strong> you can use the app without an account, sign out at any time, delete the files the app saved on your device, and cancel a subscription in your Apple ID or Google Play settings.
            </P>
            <P>
              <strong>Deleting your account and data:</strong> write to{' '}
              <a href="mailto:rovitatech@gmail.com" style={linkStyle}>rovitatech@gmail.com</a>{' '}
              from the email address on your account and we will delete or anonymise your data as described in section 5.
            </P>
            <P>
              <strong>EEA, UK and similar:</strong> you may ask us to access, correct, delete or export your personal data, to restrict or object to some processing, and to withdraw consent. You may also complain to your local data protection authority.
            </P>
            <P>
              <strong>California and similar US states:</strong> you have the right to know what personal information we collect, to access and delete it, to correct it, and not to be discriminated against for using these rights. We do not sell or share personal information as those laws define it.
            </P>
            <P>
              To use any right, email{' '}
              <a href="mailto:rovitatech@gmail.com" style={linkStyle}>rovitatech@gmail.com</a>.
              {' '}We may ask you to confirm it is you, and we will reply within the time the law requires (normally within 30 days).
            </P>
          </Section>

          <Section title="10. Children">
            <P>
              PDF4you is not directed to children under 13 (or under 16 where that is the age of digital consent in your country). We do not knowingly collect their personal information. If you believe a child has given us information, write to{' '}
              <a href="mailto:rovitatech@gmail.com" style={linkStyle}>rovitatech@gmail.com</a>{' '}
              and we will delete it.
            </P>
          </Section>

          <Section title="11. Changes to This Policy">
            <P>
              We may update this policy from time to time. We will change the effective date above, and if the changes are significant we will tell you in the app or by email. Please check this page now and then.
            </P>
          </Section>

          <Section title="12. Contact">
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <p style={{ color: '#374151', lineHeight: '1.6' }}>
              <strong>RovitaTech</strong>
              <br />
              <strong>Email:</strong>{' '}
              <a href="mailto:rovitatech@gmail.com" style={linkStyle}>rovitatech@gmail.com</a>
            </p>
          </Section>

          <div style={{ textAlign: 'center', paddingTop: '40px', marginTop: '40px', borderTop: '1px solid #e5e7eb' }}>
            <p style={{ color: '#9ca3af', fontSize: '14px' }}>
              © 2026 RovitaTech. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
