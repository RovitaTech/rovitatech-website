import type { Metadata } from 'next'

import { LegalDocument } from '@/components/legal/legal-document'
import { Item, List, P, Section, SubSection } from '@/components/legal/prose'

export const metadata: Metadata = {
  title: 'Privacy Policy - CrewZeitplan',
  description: 'Privacy Policy for CrewZeitplan, the crew scheduling, attendance and payroll app. Learn how owner and worker data is handled.',
  keywords: 'privacy policy, CrewZeitplan, crew scheduling, attendance, payroll, data protection, Rovitatech',
}

export default function CrewZeitplanPrivacyPolicy() {
  return (
    <LegalDocument
      app="crewzeitplan"
      kind="privacy"
      title="Privacy Policy"
      subtitle="CrewZeitplan"
      dates={["Effective Date: September 22, 2026"]}
    >
      <Section title="Introduction">
        <P>
          This Privacy Policy explains what information CrewZeitplan (the “app”) collects, how it is used, and the choices you have. The app is provided by RovitaTech (“we”, “us”). Questions? Write to{' '}
          <a href="mailto:rovitatech@gmail.com">rovitatech@gmail.com</a>.
        </P>
      </Section>

      <Section title="1. Information We Collect">
        <SubSection title="Account information">
          <P>
            When an owner signs up, we collect an email address and password. When a worker is added by an owner and signs up, we collect the worker’s phone number and password.
          </P>
        </SubSection>

        <SubSection title="Operational data">
          <P>Operational data entered into the App, including:</P>
          <List>
            <Item>Worker names, phone numbers, online/business-license (Gewerbe) status, and hourly wage</Item>
            <Item>Work locations, addresses, opening hours, and site notes</Item>
            <Item>Schedule assignments, attendance records (present, absent, holiday, leave), and tasks</Item>
            <Item>Payroll figures calculated from the above (hours and wages)</Item>
          </List>
        </SubSection>

        <SubSection title="Automatically collected data">
          <P>
            We do not use the App for advertising and do not embed third-party analytics or ad SDKs. Our backend provider (Google Firebase, see below) may log standard service data such as IP address and request timestamps for security and reliability purposes.
          </P>
        </SubSection>
      </Section>

      <Section title="2. How We Use Information">
        <P>
          We use the information above only to operate the App’s core features: authenticating users, building and displaying schedules, recording attendance, calculating payroll, and generating PDF pay statements. We do not sell personal information, and we do not use it for advertising.
        </P>
      </Section>

      <Section title="3. Where Data Is Stored">
        <P>
          Data is stored using Google Firebase (Firebase Authentication and Cloud Firestore). Firebase’s own privacy practices apply to how it processes and secures data on our behalf:{' '}
          <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">
            firebase.google.com/support/privacy
          </a>
        </P>
      </Section>

      <Section title="4. Sharing of Information">
        <P>
          Within an account, an owner can see the data of the workers they manage (schedules, attendance, wages, contact details), and a worker can see their own schedule and earnings. We do not share personal information with third parties except:
        </P>
        <List>
          <Item>Our service providers (currently Firebase/Google Cloud) who process data on our behalf to run the App</Item>
          <Item>If required by law, regulation, or legal process</Item>
        </List>
      </Section>

      <Section title="5. Worker-to-Owner Contact">
        <P>
          The App can open WhatsApp or the phone dialer with a worker’s number, and can open maps with a location’s address, using the device’s own apps. We do not process this contact data ourselves beyond storing the phone number/address the owner entered.
        </P>
      </Section>

      <Section title="6. PDF Statements">
        <P>
          Monthly pay statements are generated as PDF files on the user’s device using the data described above, for the user to save or share. We do not store generated PDFs on our servers.
        </P>
      </Section>

      <Section title="7. Data Retention">
        <P>
          We retain account and operational data for as long as the account is active. An owner can remove a worker or location from within the App. To request deletion of your account and associated data, contact us using the details below.
        </P>
      </Section>

      <Section title="8. Children's Privacy">
        <P>
          The App is intended for business use by adults managing or working a cleaning crew. It is not directed at children, and we do not knowingly collect data from children.
        </P>
      </Section>

      <Section title="9. Your Choices">
        <P>
          You can review and correct most of your data directly in the App (worker details, location details, schedule, attendance). To request access to, correction of, or deletion of your data, contact us below.
        </P>
      </Section>

      <Section title="10. Changes to This Policy">
        <P>
          We may update this policy from time to time. Changes will be posted on this page with a new “Last updated” date.
        </P>
      </Section>

      <Section title="11. Contact Us">
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
