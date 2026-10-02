import type { Metadata } from 'next'

import { LegalDocument } from '@/components/legal/legal-document'
import { Item, List, P, Section, SubSection } from '@/components/legal/prose'

export const metadata: Metadata = {
  title: 'Privacy Policy - BrainRewire',
  description: 'Privacy Policy for BrainRewire, the mindful screen-time app for iPhone and Android. Screen time, moods and habits stay on your device. No account, no ads, no tracking.',
  keywords: 'privacy policy, BrainRewire, screen time, digital wellbeing, mood tracker, habit tracker, Family Controls, usage access, iPhone, Android, Rovitatech',
}

export default function BrainRewirePrivacyPolicy() {
  return (
    <LegalDocument
      app="brainrewire"
      kind="privacy"
      title="Privacy Policy"
      subtitle="BrainRewire"
      dates={["Effective Date: October 2, 2026"]}
    >
      <Section title="Introduction">
        <P>
          This Privacy Policy explains how BrainRewire (the “app”) for iPhone, iPad and Android handles your information. The app is provided by RovitaTech (“we”, “us”). In short: everything the app records stays on your device, there is no account, and we never receive, sell or share your data or use it for advertising. BrainRewire sends gentle reminders and never blocks other apps. Questions? Write to{' '}
          <a href="mailto:rovitatech@gmail.com">rovitatech@gmail.com</a>.
        </P>
      </Section>

      <Section title="1. Information Stored on Your Device">
        <P>The following is saved only in the app’s storage on your device and is not sent to us:</P>
        <List>
          <Item label="Profile and settings:">
            the first name you choose to enter, your daily screen-time goal, app goals, reminder times, theme and feature preferences.
          </Item>
          <Item label="Moods:">the mood faces you log, the feelings you pick and any notes you write.</Item>
          <Item label="Habits:">the habits you create and the days and times you complete them.</Item>
          <Item label="Screen-time summaries and reminder history:">
            how long time-draining apps were used and which reminders were shown, used to draw your charts and your brain energy score.
          </Item>
        </List>
        <P>Your brain energy score is calculated on your device from this information and is never uploaded.</P>
      </Section>

      <Section title="2. Screen Time on Android">
        <P>
          To show your screen time and send the reminders you set up, the app asks for the following Android permissions. Each one is used only on your device:
        </P>
        <List>
          <Item label="Usage access:">
            lets the app read which apps were in the foreground and for how long. It never sees what you do, read, watch or type inside any app.
          </Item>
          <Item label="List of installed apps:">
            lets you pick the social, streaming and game apps you want goals for, and shows their names and icons.
          </Item>
          <Item label="Mindful mode (foreground service):">
            a small background service that checks which app is open so a reminder can arrive when you pass your goal. It shows a persistent notification while it runs and never blocks, closes or covers other apps.
          </Item>
          <Item label="Battery optimization exemption and start at boot:">
            optional, so mindful mode keeps working after a restart and is not stopped by the system.
          </Item>
        </List>
      </Section>

      <Section title="3. Screen Time on iPhone and iPad">
        <P>
          On Apple devices the app uses Apple’s Screen Time frameworks (Family Controls and Device Activity), authorized by you for your own device. You choose app groups with Apple’s own app picker. Apple only gives the app anonymous tokens, so BrainRewire, and we, never learn which apps or websites you chose or use.
        </P>
        <List>
          <Item>iOS tells the app’s Screen Time extension when you reach a time threshold, and the app then shows a local notification. The app and its extension share these settings through an app group on your device only.</Item>
          <Item>The app never uses Screen Time to block, hide or restrict apps.</Item>
          <Item>You can revoke access at any time in iOS Settings → Screen Time.</Item>
        </List>
      </Section>

      <Section title="4. Notifications">
        <P>
          Goal reminders, mood check-in reminders and other notices are local notifications created on your device. They are not sent through our servers or any push service.
        </P>
      </Section>

      <Section title="5. What We Do Not Do">
        <List>
          <Item>We do not require an account and do not run servers that receive your data.</Item>
          <Item>The app contains no advertising, analytics or tracking SDKs.</Item>
          <Item>We do not track you across other apps or websites, and we do not sell or share your data.</Item>
        </List>
        <SubSection title="Apple and Google">
          <P>
            Apple and Google may collect diagnostic and crash information according to your device settings and their own privacy policies (
            <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">
              Apple
            </a>
            ,{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              Google
            </a>
            ). This is handled by them, not by us.
          </P>
        </SubSection>
      </Section>

      <Section title="6. Data Retention and Deletion">
        <List>
          <Item>Your data stays on your device until you delete it.</Item>
          <Item>Use Profile → Reset everything in the app to erase all moods, habits, goals and settings at once.</Item>
          <Item>Deleting the app removes all of its data from your device.</Item>
          <Item>Screen-time records kept by the operating system itself are managed by Android or iOS, not by the app.</Item>
        </List>
      </Section>

      <Section title="7. Security">
        <P>
          Your data is protected by your device’s own security, such as your passcode and encryption. Because nothing is sent to us, there is no copy of your data on our side to be exposed.
        </P>
      </Section>

      <Section title="8. Health Disclaimer">
        <P>
          BrainRewire is a digital wellbeing tool. Its brain energy score and suggestions are for motivation only and are not medical advice, diagnosis or treatment.
        </P>
      </Section>

      <Section title="9. Children's Privacy">
        <P>
          The app is not directed at children under 13, and we do not knowingly collect personal information from children. Because no data leaves the device, we do not hold any information about any user.
        </P>
      </Section>

      <Section title="10. Your Rights">
        <P>
          Depending on where you live, laws such as the GDPR and CCPA give you rights to access, correct, export or delete your personal data. Because all of your data is stored only on your device, you control it directly in the app. If you have any question about your rights, contact us below.
        </P>
      </Section>

      <Section title="11. Changes to This Policy">
        <P>
          If we add features that change how data is handled, such as optional sign-in or cloud backup, we will update this page and its effective date before the change takes effect, and such features will be optional.
        </P>
      </Section>

      <Section title="12. Contact Us">
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
