import type { Metadata } from 'next'

import { LegalDocument } from '@/components/legal/legal-document'
import { Item, List, P, Section } from '@/components/legal/prose'

export const metadata: Metadata = {
  title: 'Terms of Use - SnapSnatcher',
  description: 'Terms of Use for SnapSnatcher: acceptable use, copyright, rewarded ads, and Premium subscriptions and billing through Google Play.',
  keywords: 'terms of use, SnapSnatcher, subscriptions, billing, copyright, Rovitatech',
}

export default function SnapSnatcherTermsOfUse() {
  return (
    <LegalDocument
      app="snapsnatcher"
      kind="terms"
      title="Terms of Use"
      subtitle="SnapSnatcher"
      dates={["Effective Date: October 8, 2026"]}
    >
      <Section title="1. Acceptance of Terms">
        <P>
          These Terms of Use (the “Terms”) govern your use of the SnapSnatcher app for Android (the “app”) provided by RovitaTech (“we”, “us”). By using the app you agree to these Terms. If you do not agree, do not use the app.
        </P>
      </Section>

      <Section title="2. Eligibility">
        <P>
          You must be at least 13 years old (16 in the European Economic Area) to use the app. To buy Premium you must be able to enter into a binding agreement in your jurisdiction, or have a parent or guardian’s permission.
        </P>
      </Section>

      <Section title="3. The Service">
        <P>
          SnapSnatcher lets you save public videos, photos and audio from links you paste or share into the app. We do not host, publish or own any of that content, and we are not affiliated with, endorsed by or sponsored by any social network or video platform.
        </P>
        <List>
          <Item>Only publicly available content can be fetched. Private, deleted, age-restricted or region-restricted posts may not be available.</Item>
          <Item>Platforms can change, limit or block access at any time, so we cannot guarantee that any link, platform or quality will work.</Item>
          <Item>We may change, suspend or discontinue features at any time.</Item>
        </List>
      </Section>

      <Section title="4. Your Responsibilities and Copyright">
        <P>
          You are responsible for what you download and how you use it. You agree to:
        </P>
        <List>
          <Item>Only download content you own, that is in the public domain, or that you have the rights holder’s permission to download.</Item>
          <Item>Respect copyright, the rights of creators and the terms of the platform the content comes from.</Item>
          <Item>Not redistribute, sell or publicly re-post downloaded content without permission.</Item>
        </List>
        <P>
          If you believe content is being made available through the app in a way that infringes your rights, contact us at{' '}
          <a href="mailto:rovitatech@gmail.com">rovitatech@gmail.com</a> and we will review your request.
        </P>
      </Section>

      <Section title="5. Acceptable Use">
        <P>You agree not to:</P>
        <List>
          <Item>Use the app for anything unlawful, harmful or abusive.</Item>
          <Item>Overload, disrupt or try to gain unauthorized access to our servers, for example with automated or bulk requests.</Item>
          <Item>Reverse engineer, decompile or modify the app, except where the law allows it.</Item>
          <Item>Bypass or tamper with ads, Premium checks or other limits in the app.</Item>
        </List>
      </Section>

      <Section title="6. Free Use and Rewarded Ads">
        <P>
          The lowest quality of each post can be downloaded for free. Higher qualities can be unlocked by watching a rewarded video ad to the end. If no ad is available, we may unlock the higher quality without one. Ads are provided by third-party networks, and we are not responsible for their content or for products they advertise.
        </P>
      </Section>

      <Section title="7. Premium Subscriptions and Billing">
        <P>
          Premium removes ads and unlocks every quality. It is offered as a monthly or yearly subscription, or as a one-time lifetime purchase. Prices are shown in the app before you buy, in your local currency.
        </P>
        <List>
          <Item label="Payment:">purchases are made through Google Play and charged to your Google Play account.</Item>
          <Item label="Auto-renewal:">monthly and yearly subscriptions renew automatically at the end of each period unless you cancel at least 24 hours before it ends.</Item>
          <Item label="Lifetime:">a one-time purchase that does not renew. It covers Premium for as long as the app is offered.</Item>
          <Item label="Price changes:">we may change prices for future billing periods. Google Play will notify you as required, and you can cancel before the new price applies.</Item>
        </List>
      </Section>

      <Section title="8. Cancellation and Refunds">
        <P>
          You can cancel a subscription at any time in Google Play (
          <a href="https://support.google.com/googleplay/answer/7018481" target="_blank" rel="noopener noreferrer">
            how to cancel
          </a>
          ). Premium stays active until the end of the period you have paid for. Deleting the app does not cancel a subscription. Refunds are handled by Google Play under its refund policies, except where the law requires otherwise.
        </P>
      </Section>

      <Section title="9. Privacy">
        <P>
          Our <a href="/privacy-policy/snapsnatcher">Privacy Policy</a> explains how the app handles your information.
        </P>
      </Section>

      <Section title="10. Intellectual Property">
        <P>
          The app, its design, name and logo belong to RovitaTech and are protected by intellectual property laws. Content you download belongs to its respective owners.
        </P>
      </Section>

      <Section title="11. Disclaimer of Warranties">
        <P>
          The app is provided “as is” and “as available”. To the maximum extent permitted by law, we disclaim all warranties, express or implied, including that the app will be uninterrupted, error-free or able to fetch any particular content.
        </P>
      </Section>

      <Section title="12. Limitation of Liability">
        <P>
          To the maximum extent permitted by law, RovitaTech will not be liable for any indirect, incidental, special or consequential damages, or for any loss arising from your use of the app or of content you download. Our total liability is limited to the amount you paid for Premium in the 12 months before the claim.
        </P>
      </Section>

      <Section title="13. Termination">
        <P>
          We may suspend or end your access to the app if you break these Terms. You can stop using the app at any time by deleting it.
        </P>
      </Section>

      <Section title="14. Changes to These Terms">
        <P>
          We may update these Terms. We will post the new version on this page and update its effective date. Continuing to use the app after a change means you accept the updated Terms.
        </P>
      </Section>

      <Section title="15. Governing Law">
        <P>
          These Terms are governed by the laws applicable to RovitaTech, without regard to conflict of law principles. Where required, consumer protection laws in your jurisdiction may also apply.
        </P>
      </Section>

      <Section title="16. Contact Us">
        <p>
          If you have any questions about these Terms, please contact us at:
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
