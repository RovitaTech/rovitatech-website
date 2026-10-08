import type { Metadata } from 'next'

import { LegalDocument } from '@/components/legal/legal-document'
import { Item, List, P, Section, SubSection } from '@/components/legal/prose'

export const metadata: Metadata = {
  title: 'Privacy Policy - SnapSnatcher',
  description: 'Privacy Policy for SnapSnatcher, the Android app that saves videos, photos and MP3s from public links. No account, files are never stored on our servers, and ads only when you choose to unlock HD.',
  keywords: 'privacy policy, SnapSnatcher, video saver, video downloader, MP3, Android, Start.io, Unity Ads, Rovitatech',
}

export default function SnapSnatcherPrivacyPolicy() {
  return (
    <LegalDocument
      app="snapsnatcher"
      kind="privacy"
      title="Privacy Policy"
      subtitle="SnapSnatcher"
      dates={["Effective Date: October 8, 2026"]}
    >
      <Section title="Introduction">
        <P>
          This Privacy Policy explains how SnapSnatcher (the “app”) for Android handles your information. The app is provided by RovitaTech (“we”, “us”). In short: there is no account, your download history stays on your device, the links you paste are sent to our server only to find the download, downloaded files are never stored on our servers, and ads appear only when you choose to unlock higher quality. Questions? Write to{' '}
          <a href="mailto:rovitatech@gmail.com">rovitatech@gmail.com</a>.
        </P>
      </Section>

      <Section title="1. Information Stored on Your Device">
        <P>The following is saved only in the app’s storage on your device and is not sent to us:</P>
        <List>
          <Item label="Download history:">
            the title, creator name, thumbnail address, quality and file location of each download, so you can find, open and share your saves.
          </Item>
          <Item label="Settings:">your theme, whether smart link detection is on, and whether downloads are copied to your gallery.</Item>
          <Item label="Premium status:">which plan you own, so the app knows not to show ads.</Item>
          <Item label="Downloaded files:">
            saved in the app’s own storage and, if you keep “Save to gallery” on, copied to a SnapSnatcher album in your photo gallery.
          </Item>
        </List>
      </Section>

      <Section title="2. Links You Paste or Share">
        <P>
          To find the download options for a post, the app sends the link you paste or share to our server, together with basic technical details: the app version, Android as the platform, your device language and a random request ID. No name, email address or account is involved.
        </P>
        <List>
          <Item label="Retrieving the post:">
            our server fetches the post’s public information (title, creator, thumbnail and available qualities) from the platform it comes from. To do this it may route the request through third-party download services or proxy servers, which receive the link.
          </Item>
          <Item label="Files are never stored:">
            the videos, photos and audio you download are not saved on our servers. They are downloaded by your device from the platform’s content servers, or passed through our server on the way, without being kept.
          </Item>
          <Item label="Server logs:">
            links can appear in our server logs, which we keep only for a short time to fix problems and prevent abuse.
          </Item>
          <Item label="Statistics:">
            we keep aggregate statistics, such as which platform a request was for and whether it worked, without the link or your IP address.
          </Item>
          <Item label="IP address:">
            like any website, our server sees your IP address while handling a request. We use it only to limit how many requests one device can make and to protect the service.
          </Item>
        </List>
        <P>
          Only links to public content can be fetched. The app never asks for, and we never receive, your passwords for Instagram, TikTok, Facebook, X, Spotify or any other platform.
        </P>
      </Section>

      <Section title="3. Clipboard">
        <P>
          With smart link detection on, the app checks your clipboard when you open it, to offer to fetch a link you have just copied. The check happens on your device; nothing from the clipboard is sent anywhere unless you tap Fetch. You can turn this off in Settings → Smart link detection.
        </P>
      </Section>

      <Section title="4. Advertising">
        <P>
          The lowest quality of every post downloads without ads. If you choose a higher quality, you can unlock it by watching a short rewarded video ad. Premium members are not shown ads.
        </P>
        <P>
          Ads are provided by Start.io and, as a backup, Unity Ads. To show and measure ads and to prevent fraud, these networks may collect your device’s advertising ID, IP address and approximate location derived from it, device and network information (such as model, Android version, language and carrier), and how you interact with ads. They process this information under their own privacy policies:
        </P>
        <List>
          <Item label="Start.io:">
            <a href="https://www.start.io/policy/privacy-policy-site/" target="_blank" rel="noopener noreferrer">
              Start.io Privacy Policy
            </a>
          </Item>
          <Item label="Unity Ads:">
            <a href="https://unity.com/legal/game-player-and-app-user-privacy-policy" target="_blank" rel="noopener noreferrer">
              Unity Privacy Policy
            </a>
          </Item>
        </List>
        <SubSection title="Your ad choices">
          <List>
            <Item>Unity Ads asks for your consent before personalised advertising the first time it shows you an ad. You can change your choice later from the privacy icon shown on its ads.</Item>
            <Item>You can reset or delete your advertising ID at any time in Android Settings → Privacy → Ads (or Google → Ads on some devices). Without it, ads are no longer personalised.</Item>
            <Item>Premium removes ads entirely.</Item>
          </List>
        </SubSection>
      </Section>

      <Section title="5. Premium Purchases">
        <P>
          Premium (monthly, yearly or lifetime) is sold through Google Play, which processes the payment. We never see or store your card or bank details.
        </P>
        <List>
          <Item>The app receives the product you bought and a purchase token from Google Play, and uses them to unlock Premium and to restore it on a new device.</Item>
          <Item>To confirm a purchase is genuine, the app may send the product ID and purchase token to our server, which checks them with Google.</Item>
          <Item>
            Cancellations and refunds are handled by Google Play under its policies (
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              Google Privacy Policy
            </a>
            ).
          </Item>
        </List>
      </Section>

      <Section title="6. Permissions">
        <List>
          <Item label="Internet and network state:">to fetch posts, download files and load ads.</Item>
          <Item label="Storage (Android 10 and older only):">to copy downloads into your gallery. Newer Android versions need no storage permission.</Item>
          <Item label="Google Play Billing:">to sell and restore Premium.</Item>
          <Item label="Advertising ID:">used by the ad networks as described in section 4.</Item>
        </List>
        <P>The app does not access your contacts, precise location, camera or microphone.</P>
      </Section>

      <Section title="7. What We Do Not Do">
        <List>
          <Item>We do not require an account or ask for your name or email address.</Item>
          <Item>We do not sell your personal information.</Item>
          <Item>The app contains no analytics or crash-reporting SDKs of its own.</Item>
          <Item>We do not keep copies of the media you download.</Item>
        </List>
      </Section>

      <Section title="8. How Information Is Shared">
        <P>We share information only as described in this policy:</P>
        <List>
          <Item label="Service providers:">our hosting provider, and the third-party download services and proxies described in section 2, which help retrieve posts.</Item>
          <Item label="Ad networks:">Start.io and Unity Ads, as described in section 4. Some privacy laws treat this as “sharing” for targeted advertising; you can opt out as described there.</Item>
          <Item label="Google:">for app distribution and Premium purchases.</Item>
          <Item label="Legal reasons:">when required by law, or to protect the rights, property or safety of RovitaTech, our users or others.</Item>
        </List>
      </Section>

      <Section title="9. Data Retention and Deletion">
        <List>
          <Item>Your history, settings and downloads stay on your device until you delete them. Use Downloads → Clear to remove the history and SnapSnatcher’s copies of files.</Item>
          <Item>Copies in your gallery stay there until you delete them from your gallery app.</Item>
          <Item>Deleting the app removes its data from your device.</Item>
          <Item>Server logs are deleted automatically after a short period. Because there is no account, we cannot link logs to you; if you have a request about them, contact us below.</Item>
        </List>
      </Section>

      <Section title="10. Security">
        <P>
          Communication between the app and our server is encrypted with HTTPS. Your data on the device is protected by your device’s own security, such as your screen lock and storage encryption.
        </P>
      </Section>

      <Section title="11. Children's Privacy">
        <P>
          SnapSnatcher is not directed at children under 13 (under 16 in the European Economic Area), and we do not knowingly collect personal information from children. If you believe a child has provided us with personal information, contact us and we will delete it.
        </P>
      </Section>

      <Section title="12. Your Rights">
        <P>
          Depending on where you live, laws such as the GDPR and CCPA give you rights to access, correct, delete or export your personal data, to object to processing, and to opt out of the sale or sharing of personal information for targeted advertising. Most of your data is on your device and in your control. For anything held by the ad networks, use the choices in section 4 or their privacy policies. For anything else, contact us below.
        </P>
      </Section>

      <Section title="13. Copyright and Content">
        <P>
          SnapSnatcher does not host or publish any content. Please only download content you own or have permission to use. See our{' '}
          <a href="/terms-of-use/snapsnatcher">Terms of Use</a>.
        </P>
      </Section>

      <Section title="14. Changes to This Policy">
        <P>
          If we change how the app handles data, we will update this page and its effective date before the change takes effect.
        </P>
      </Section>

      <Section title="15. Contact Us">
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
