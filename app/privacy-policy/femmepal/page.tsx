import type { Metadata } from 'next'

import { LegalDocument } from '@/components/legal/legal-document'
import { Item, List, P, Section, SubSection } from '@/components/legal/prose'

export const metadata: Metadata = {
  title: 'Privacy Policy - FemmePal',
  description:
    'Privacy Policy for FemmePal, the period, ovulation, pregnancy and baby tracker. What we collect, why, where it is stored in the EU, how partner sharing works and how to delete your data.',
  keywords:
    'privacy policy, FemmePal, period tracker, cycle tracker, ovulation, pregnancy, baby tracker, health data, GDPR, Rovitatech',
}

export default function FemmePalPrivacyPolicy() {
  return (
    <LegalDocument
      app="femmepal"
      kind="privacy"
      title="Privacy Policy"
      subtitle="FemmePal"
      dates={['Effective Date: October 2, 2026']}
    >
      <Section title="Introduction">
        <P>
          This Privacy Policy explains how FemmePal (the “app”) collects, uses and protects your information. The app is
          provided by RovitaTech (“we”, “us”). FemmePal helps you track your period and cycle, try to conceive, follow a
          pregnancy and log your baby’s first months. Much of what you enter is health information, so we treat all of
          it as sensitive: we use it only to run the app, we never sell it and we never use it for advertising.
          Questions? Write to <a href="mailto:rovitatech@gmail.com">rovitatech@gmail.com</a>.
        </P>
      </Section>

      <Section title="1. Information We Collect">
        <SubSection title="Account information">
          <P>
            To create an account you give us an email address and a password. The password is handled by our
            authentication provider and stored only in hashed form; we never see it. We use your email address to
            confirm your account, to sign you in and to send account emails such as confirmation and password-reset
            messages.
          </P>
        </SubSection>
        <SubSection title="Information you enter">
          <P>Depending on how you use the app, you may enter:</P>
          <List>
            <Item label="Profile:">
              your first name, typical cycle and period length, and what you are tracking (your cycle, trying to
              conceive, a pregnancy or a baby).
            </Item>
            <Item label="Cycle data:">period start and end dates, and daily logs of flow, moods, symptoms and notes.</Item>
            <Item label="Sexual activity:">
              an optional, private entry that you had sex on a given day, used for fertility timing.
            </Item>
            <Item label="Pregnancy:">your due date, or the start of your last period used to estimate it.</Item>
            <Item label="Baby:">
              your baby’s name and birthday, feeds (breast side and duration, or bottle amount), sleep, diaper changes,
              and weight, height and head measurements.
            </Item>
            <Item label="Partner sharing:">
              if you invite a partner, the invite code, your partner’s first name and the sharing choices you make.
            </Item>
          </List>
          <P>
            You decide what to log. Every field except your email, password and first name is optional, and you can
            edit or delete entries at any time.
          </P>
        </SubSection>
        <SubSection title="Automatically collected data">
          <P>
            The app contains no analytics, advertising or tracking SDKs, and it does not access your advertising
            identifier, contacts, photos, location or microphone. Like any online service, our hosting providers record
            standard technical logs, such as IP address, time and the address requested, to keep the service secure and
            reliable.
          </P>
        </SubSection>
        <SubSection title="Stored on your device">
          <P>
            Your sign-in tokens are kept in the iOS Keychain or Android Keystore. Your language and theme choices, and a
            partner’s connection, are saved in the app’s own storage on your device.
          </P>
        </SubSection>
      </Section>

      <Section title="2. How We Use Information">
        <List>
          <Item>To provide the app’s features: predictions of your period, fertile window and ovulation, pregnancy week and milestones, baby summaries and growth charts, and partner sharing.</Item>
          <Item>To create and secure your account, and to send emails about your account.</Item>
          <Item>To keep the service running, prevent abuse and fix problems.</Item>
        </List>
        <P>
          We do not use your information for advertising, marketing profiles or any purpose unrelated to the app, and we
          do not sell or rent it to anyone.
        </P>
      </Section>

      <Section title="3. Legal Basis (EU and UK users)">
        <List>
          <Item label="Health and sexual activity data:">
            your explicit consent (Article 9(2)(a) GDPR), which you give by choosing to enter it. You can withdraw it at
            any time by deleting the data in the app.
          </Item>
          <Item label="Account information:">
            performance of our contract with you (Article 6(1)(b) GDPR), so that we can provide the app.
          </Item>
          <Item label="Technical logs:">
            our legitimate interest in keeping the service secure and reliable (Article 6(1)(f) GDPR).
          </Item>
        </List>
      </Section>

      <Section title="4. Where Data Is Stored">
        <P>Your account and the data you enter are stored with these providers, who process it on our behalf:</P>
        <List>
          <Item label="Supabase:">
            authentication and database, hosted in the European Union (Ireland).{' '}
            <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer">
              supabase.com/privacy
            </a>
          </Item>
          <Item label="Railway:">
            the FemmePal server that the app talks to, hosted in the European Union (Netherlands).{' '}
            <a href="https://railway.com/legal/privacy" target="_blank" rel="noopener noreferrer">
              railway.com/legal/privacy
            </a>
          </Item>
        </List>
        <P>
          All traffic between the app and our server is encrypted with HTTPS. The database only accepts our server’s
          own connection, and every request is limited to the signed-in user’s data.
        </P>
      </Section>

      <Section title="5. Partner Sharing">
        <P>
          Partner sharing is optional and off until you invite someone. Your partner signs up with their own account and
          enters the 6-character code you give them. They then get a read-only view of your cycle phase, period dates and
          a few ideas for how to support you.
        </P>
        <List>
          <Item>You choose whether your moods, symptoms and notes are shared. You can change this at any time.</Item>
          <Item>Your sexual activity entries are never shared.</Item>
          <Item>Your partner can never change your data.</Item>
          <Item>You can remove your partner, and your partner can leave, at any time. Access ends immediately.</Item>
        </List>
      </Section>

      <Section title="6. Sharing of Information">
        <P>We share information only:</P>
        <List>
          <Item>With your partner, if you invite one, as described above.</Item>
          <Item>With the service providers listed in section 4, who process it only to run the app.</Item>
          <Item>If we are required to by law, and then only what is legally required.</Item>
        </List>
        <P>
          We never share your information with advertisers, data brokers, insurers or employers.
        </P>
        <SubSection title="Apple and Google">
          <P>
            Apple or Google may collect diagnostic and crash information according to your device settings and{' '}
            <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">
              Apple’s privacy policy
            </a>{' '}
            or{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              Google’s privacy policy
            </a>
            . This is handled by them, not by us.
          </P>
        </SubSection>
      </Section>

      <Section title="7. Data Retention and Deletion">
        <List>
          <Item>We keep your data for as long as you have an account.</Item>
          <Item>
            <strong>Delete all data</strong> in Profile permanently removes everything you have logged from our servers
            straight away: your profile, periods, daily logs, pregnancy and baby data, and any partner connection.
          </Item>
          <Item>
            To delete your account and email address as well, email us from the address you signed up with. We delete
            the account and all its data within 30 days.
          </Item>
          <Item>
            Copies in our providers’ backups and technical logs are removed on their regular schedule.
          </Item>
        </List>
      </Section>

      <Section title="8. Security">
        <P>
          We protect your information with encryption in transit, hashed passwords, sign-in tokens kept in your device’s
          secure storage, and database rules that keep each account’s data separate. No system is perfectly secure, but
          we work to protect your information and will tell you without undue delay if a breach affects you.
        </P>
      </Section>

      <Section title="9. Children's Privacy">
        <P>
          The app is not directed at children under 13 (or under 16 where local law requires), and we do not knowingly
          collect their personal information. Baby tracking is for parents and caregivers, who enter information about
          their own child. If you believe a child has created an account, contact us and we will delete it.
        </P>
      </Section>

      <Section title="10. Your Rights">
        <P>
          Depending on where you live, including under the GDPR, UK GDPR and CCPA, you have the right to access,
          correct, export or delete your personal information, to restrict or object to its processing, and to withdraw
          consent at any time. You can view and edit your data in the app and delete it in Profile. For anything else,
          email us and we will respond within 30 days. You also have the right to complain to your local data
          protection authority.
        </P>
      </Section>

      <Section title="11. Health Information Notice">
        <P>
          FemmePal provides general information and estimates, not medical advice. Cycle predictions are not a reliable
          form of birth control. Always talk to your doctor or midwife about your health.
        </P>
      </Section>

      <Section title="12. Changes to This Policy">
        <P>
          If we change how the app handles your information, we will update this page and its effective date. For
          significant changes, we will also let you know in the app before they take effect.
        </P>
      </Section>

      <Section title="13. Contact Us">
        <P>If you have any questions about this Privacy Policy or our data practices, please contact us at:</P>
        <P>
          <strong>RovitaTech</strong>
          <br />
          <strong>Email:</strong> <a href="mailto:rovitatech@gmail.com">rovitatech@gmail.com</a>
        </P>
      </Section>
    </LegalDocument>
  )
}
