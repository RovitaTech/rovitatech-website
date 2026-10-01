import type { ReactNode } from 'react'

/** Layout pieces shared by the English and Spanish Carmexio policy pages. */

export const CONTACT_EMAIL = 'rovitatech@gmail.com'

export const linkStyle = { color: '#2563eb', textDecoration: 'none' } as const

export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div style={{ marginBottom: '50px' }}>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
        {title}
      </h2>
      {children}
    </div>
  )
}

export function SubSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#374151', marginBottom: '15px', marginTop: '30px' }}>
        {title}
      </h3>
      {children}
    </>
  )
}

export function P({ children }: { children: ReactNode }) {
  return (
    <p style={{ color: '#374151', lineHeight: '1.7', fontSize: '16px', marginBottom: '15px' }}>
      {children}
    </p>
  )
}

export function List({ children }: { children: ReactNode }) {
  return <ul style={{ marginLeft: '20px', marginBottom: '15px' }}>{children}</ul>
}

export function Item({ label, children }: { label?: string; children: ReactNode }) {
  return (
    <li style={{ color: '#374151', marginBottom: '12px', lineHeight: '1.6' }}>
      {label ? <strong>{label} </strong> : null}
      {children}
    </li>
  )
}

export function EmailLink() {
  return (
    <a href={`mailto:${CONTACT_EMAIL}`} style={linkStyle}>
      {CONTACT_EMAIL}
    </a>
  )
}

export function PolicyShell({
  heading,
  effectiveDate,
  footer,
  children,
}: {
  heading: string
  effectiveDate: string
  footer: string
  children: ReactNode
}) {
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
            {heading}
          </h1>
          <p style={{ color: '#6b7280', marginBottom: '5px', fontSize: '18px' }}>Carmexio</p>
          <p style={{ color: '#9ca3af', fontSize: '14px' }}>{effectiveDate}</p>
        </div>

        <div style={{ textAlign: 'left' }}>
          {children}

          <div style={{ textAlign: 'center', paddingTop: '40px', marginTop: '40px', borderTop: '1px solid #e5e7eb' }}>
            <p style={{ color: '#9ca3af', fontSize: '14px' }}>{footer}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
