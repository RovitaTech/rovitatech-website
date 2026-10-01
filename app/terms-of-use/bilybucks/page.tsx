import type { Metadata } from 'next'

import { LegalDocument } from '@/components/legal/legal-document'

export const metadata: Metadata = {
  title: 'Terms of Use - BilyBucks',
  description:
    'Terms of Use for BilyBucks family chores and rewards app. Read terms for subscriptions, billing, and acceptable use.',
  keywords: 'terms of use, BilyBucks, subscriptions, billing, Rovitatech',
}

export default function BilyBucksTermsOfUse() {
  return (
    <LegalDocument
      app="bilybucks"
      kind="terms"
      title="Terms of Use"
      subtitle="BilyBucks"
      dates={["Last Updated: May 5, 2026"]}
    >
      <div>
        <p>
          These Terms of Use (the &quot;Terms&quot;) govern your access to and use of the BilyBucks mobile application
          and related services (the &quot;Service&quot;) provided by RovitaTech (&quot;we&quot;, &quot;us&quot;,
          or &quot;our&quot;). By using the Service, you agree to these Terms.
        </p>
      </div>

      <div>
        <h2>
          Acceptance of Terms
        </h2>
        <p>
          By downloading, accessing, or using the Service, you confirm that you have read, understood, and agree to be
          bound by these Terms. If you do not agree, do not use the Service.
        </p>
      </div>

      <div>
        <h2>
          Eligibility and Parent Responsibility
        </h2>
        <p>
          The Service is intended for family use. If a child uses the Service, a parent or legal guardian is
          responsible for supervising use and ensuring compliance with these Terms.
        </p>
        <ul>
          <li>
            Parents/guardians are responsible for any information entered into the Service for or by a child, including
            chores, rewards, names, or other content.
          </li>
          <li>
            You must be legally able to enter into a binding agreement in your jurisdiction to create an account and
            make purchases.
          </li>
        </ul>
      </div>

      <div>
        <h2>
          Accounts and Security
        </h2>
        <ul>
          <li>
            <strong>Account accuracy:</strong> You agree to provide accurate account information and to keep it
            updated.
          </li>
          <li>
            <strong>Security:</strong> You are responsible for maintaining the confidentiality of your account
            credentials and for all activity that occurs under your account.
          </li>
          <li>
            <strong>Unauthorized use:</strong> If you believe your account has been compromised, contact us promptly at{' '}
            <a href="mailto:rovitatech@gmail.com" >
              rovitatech@gmail.com
            </a>
            .
          </li>
        </ul>
      </div>

      <div>
        <h2>
          Service Description
        </h2>
        <p>
          BilyBucks is a family-oriented app designed to help households manage chores, responsibilities, and rewards.
          The Service may allow you to:
        </p>
        <ul>
          <li>
            Create and assign chores and tasks
          </li>
          <li>
            Track completions and approvals
          </li>
          <li>
            Award and track virtual &quot;bucks&quot; or points for completed chores
          </li>
        </ul>
        <p>
          We may update, change, or discontinue parts of the Service at any time.
        </p>
      </div>

      <div>
        <h2>
          Subscriptions and Billing
        </h2>
        <p>
          Some features may be offered through premium, auto-renewing subscriptions (&quot;Subscriptions&quot;). When
          you purchase a Subscription:
        </p>
        <ul>
          <li>
            <strong>Store billing:</strong> Billing is handled by the Apple App Store (iOS) or Google Play (Android),
            not by us.
          </li>
          <li>
            <strong>Entitlements:</strong> We may use RevenueCat to validate purchases and manage your entitlement
            status across devices.
          </li>
          <li>
            <strong>Payment method:</strong> Your payment method is managed by Apple or Google. We do not receive or
            store full card or bank details.
          </li>
        </ul>
      </div>

      <div>
        <h2>
          Auto-Renewal
        </h2>
        <p>
          Subscriptions renew automatically unless you cancel before the end of the current billing period. Renewal,
          pricing, and billing dates are determined by Apple or Google and shown in your store account.
        </p>
      </div>

      <div>
        <h2>
          Free Trial (if offered)
        </h2>
        <p>
          If a free trial is offered, it will be presented to you in the App Store or Google Play purchase flow. Unless
          you cancel before the trial ends, your Subscription may automatically convert to a paid Subscription and you
          will be billed by Apple or Google.
        </p>
      </div>

      <div>
        <h2>
          Cancellation and Refunds
        </h2>
        <p>
          You can manage or cancel your Subscription through your Apple ID or Google Play account settings. Refunds and
          billing disputes are handled by Apple or Google under their policies, and we cannot issue refunds directly
          for store purchases.
        </p>
      </div>

      <div>
        <h2>
          Acceptable Use
        </h2>
        <p>
          You agree not to misuse the Service. For example, you will not:
        </p>
        <ul>
          <li>
            Use the Service for unlawful, harmful, or abusive purposes
          </li>
          <li>
            Attempt to interfere with, disrupt, or gain unauthorized access to the Service or related systems
          </li>
          <li>
            Reverse engineer, decompile, or attempt to extract source code except where permitted by law
          </li>
        </ul>
      </div>

      <div>
        <h2>
          User Content and Data
        </h2>
        <p>
          The Service may allow you to input content such as chores, rewards, family member names, and notes
          (&quot;User Content&quot;).
        </p>
        <ul>
          <li>
            <strong>Your responsibility:</strong> You are responsible for User Content you submit and for ensuring you
            have the right to submit it.
          </li>
          <li>
            <strong>Child data:</strong> Parents/guardians are responsible for any child-related information entered
            into the Service.
          </li>
        </ul>
      </div>

      <div>
        <h2>
          Privacy
        </h2>
        <p>
          Our Privacy Policy explains how we collect, use, and share information. Please review it here:{' '}
          <a href="/privacy-policy/bilybucks" >
            Privacy Policy for BilyBucks
          </a>
          .
        </p>
      </div>

      <div>
        <h2>
          Intellectual Property
        </h2>
        <p>
          The Service and its content, features, and functionality are owned by RovitaTech and are protected by
          intellectual property laws. You may not copy, modify, distribute, sell, or lease any part of the Service
          unless we give you written permission.
        </p>
      </div>

      <div>
        <h2>
          Disclaimer of Warranties
        </h2>
        <p>
          The Service is provided on an &quot;as is&quot; and &quot;as available&quot; basis. To the maximum extent
          permitted by law, we disclaim all warranties, express or implied, including implied warranties of
          merchantability, fitness for a particular purpose, and non-infringement.
        </p>
      </div>

      <div>
        <h2>
          Limitation of Liability
        </h2>
        <p>
          To the maximum extent permitted by law, RovitaTech will not be liable for any indirect, incidental, special,
          consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or
          indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (a) your access to
          or use of or inability to access or use the Service; (b) any conduct or content of any third party; or (c)
          unauthorized access, use, or alteration of your transmissions or content.
        </p>
      </div>

      <div>
        <h2>
          Termination
        </h2>
        <p>
          We may suspend or terminate your access to the Service if you violate these Terms or if we discontinue the
          Service. You may stop using the Service at any time. Store subscriptions must be managed through Apple or
          Google as described above.
        </p>
      </div>

      <div>
        <h2>
          Changes to Terms
        </h2>
        <p>
          We may update these Terms from time to time. If we make changes, we will update the &quot;Last Updated&quot;
          date at the top of this page. Continued use of the Service after changes means you accept the updated Terms.
        </p>
      </div>

      <div>
        <h2>
          Governing Law
        </h2>
        <p>
          These Terms are governed by the laws applicable to RovitaTech, without regard to conflict of law principles.
          Where required, consumer protection laws in your jurisdiction may also apply.
        </p>
      </div>

      <div>
        <h2>
          Contact Information
        </h2>
        <p>
          If you have questions about these Terms, contact:
        </p>
        <p>
          <strong>Provider:</strong> RovitaTech
        </p>
        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:rovitatech@gmail.com" >
            rovitatech@gmail.com
          </a>
        </p>
      </div>
    </LegalDocument>
  )
}
