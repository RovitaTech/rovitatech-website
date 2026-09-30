import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Privacy Policy - Rovi Disk Clean | Rovitatech',
  description: 'Privacy Policy for Rovi Disk Clean, the Mac cleaner that runs entirely on your device. No data collection, no analytics, no tracking.',
  keywords: 'privacy policy, Rovi Disk Clean, Mac cleaner, disk cleaner, cache cleaner, on-device, data protection, Rovitatech',
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

export default function RoviDiskCleanPrivacyPolicy() {
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
          <p style={{ color: '#6b7280', marginBottom: '5px', fontSize: '18px' }}>Rovi Disk Clean</p>
          <p style={{ color: '#9ca3af', fontSize: '14px' }}>Effective Date: September 30, 2026</p>
        </div>

        <div style={{ textAlign: 'left' }}>
          <Section title="Introduction">
            <P>
              This Privacy Policy explains how Rovi Disk Clean (the “app”) handles information. The app is provided by RovitaTech (“we”, “us”). In short: the app runs entirely on your Mac, and we do not collect, store, sell or share any personal data. Questions? Write to{' '}
              <a href="mailto:rovitatech@gmail.com" style={linkStyle}>rovitatech@gmail.com</a>.
            </P>
          </Section>

          <Section title="1. Information We Collect">
            <P>
              We do not collect any information. The app has no accounts, no analytics, no advertising and no tracking, and it never sends your files or scan results to us or anyone else.
            </P>
          </Section>

          <Section title="2. What the App Accesses on Your Mac">
            <P>To find files you can safely remove, the app reads the following on your device only:</P>
            <List>
              <Item label="File and folder metadata:">
                names, locations, sizes and modification dates, used to calculate how much space items take and to show labels such as “Modified 3 months ago”.
              </Item>
              <Item label="Installed apps:">
                app names, bundle identifiers and icons, used to show which app a cache belongs to and to detect data left behind by apps that are no longer installed.
              </Item>
              <Item label="Project configuration files:">
                for developer features, Android build.gradle files and the Flutter SDK configuration are read to determine which Android NDK versions your projects use.
              </Item>
              <Item label="Disk capacity:">total and free space of your startup disk, shown in the app.</Item>
            </List>
            <P>
              The app does not open, read or analyze the contents of your documents, photos, messages, emails or other personal files. Large files are identified by their size alone. Scan results exist only in memory while the app is open and are discarded when you quit it.
            </P>
          </Section>

          <Section title="3. What the App Stores">
            <P>
              The app saves a single setting on your Mac: your preferred delete mode (Smart, Always Trash or Always Delete). Nothing else is written, apart from the changes you choose to make when cleaning.
            </P>
          </Section>

          <Section title="4. Deleting Files">
            <P>
              The app never deletes anything on its own. Files are removed only after you review them and confirm. In the default Smart mode, items marked “Review” or “Caution” are moved to the Trash so you can restore them. A built-in safeguard prevents deleting your home folder, Documents, Keychains, iCloud Drive and locations outside your home folder.
            </P>
          </Section>

          <Section title="5. Full Disk Access">
            <P>
              Granting Full Disk Access in System Settings › Privacy &amp; Security is optional. It lets the app include the Trash and data that macOS normally protects in its scan. You can revoke it at any time in the same place. With or without it, no data leaves your Mac.
            </P>
          </Section>

          <Section title="6. Network, Analytics and Third Parties">
            <List>
              <Item>The app does not connect to the internet.</Item>
              <Item>It contains no analytics, advertising or third-party tracking SDKs.</Item>
              <Item>We do not share data with anyone, because we do not have any.</Item>
            </List>
            <SubSection title="Apple">
              <P>
                Apple may collect diagnostic and crash information according to your device settings and{' '}
                <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                  Apple’s privacy policy
                </a>
                . This is handled by Apple, not by us.
              </P>
            </SubSection>
          </Section>

          <Section title="7. Children's Privacy">
            <P>
              The app is not directed at children under 13 and does not collect personal information from anyone.
            </P>
          </Section>

          <Section title="8. Your Rights">
            <P>
              Because we do not collect or process personal data, we hold no data about you to access, correct, export or delete under the GDPR, CCPA or similar laws. If you have questions, contact us below.
            </P>
          </Section>

          <Section title="9. Changes to This Policy">
            <P>
              If we ever change how the app handles data, we will update this page and its effective date before the change takes effect.
            </P>
          </Section>

          <Section title="10. Contact Us">
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
