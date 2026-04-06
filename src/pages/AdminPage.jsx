import { useState } from 'react'

// Mock pending registrations seeded for demo
const SEED_REGISTRATIONS = [
  {
    id: 1,
    storeName: 'Ravi Kirana Store',
    ownerName: 'Ravi Kumar',
    mobile: '9876543210',
    city: 'Bengaluru',
    businessType: 'Grocery & FMCG',
    submittedAt: '2026-04-05T09:14:00Z',
    status: 'pending',
  },
  {
    id: 2,
    storeName: 'Priya Electronics',
    ownerName: 'Priya Nair',
    mobile: '9123456789',
    city: 'Mumbai',
    businessType: 'Electronics',
    submittedAt: '2026-04-05T14:22:00Z',
    status: 'pending',
  },
  {
    id: 3,
    storeName: 'Sanjay Hardware',
    ownerName: 'Sanjay Verma',
    mobile: '9988776655',
    city: 'Delhi',
    businessType: 'Hardware & Tools',
    submittedAt: '2026-04-06T08:05:00Z',
    status: 'pending',
  },
]

function generateStoreCode() {
  const prefix = 'ROS'
  const mid = Math.random().toString(36).toUpperCase().slice(2, 8)
  const suffix = Math.random().toString(36).toUpperCase().slice(2, 6)
  return `${prefix}-${mid}-${suffix}`
}

export default function AdminPage({ onBack }) {
  const [authed, setAuthed] = useState(false)
  const [adminPass, setAdminPass] = useState('')
  const [authError, setAuthError] = useState('')
  const [registrations, setRegistrations] = useState(SEED_REGISTRATIONS)
  const [actionResult, setActionResult] = useState(null) // { id, type: 'approved'|'rejected', storeCode? }
  const [processing, setProcessing] = useState(null)

  const handleAdminLogin = (e) => {
    e.preventDefault()
    // Hardcoded demo admin password
    if (adminPass === 'admin123') {
      setAuthed(true)
    } else {
      setAuthError('Invalid admin password')
    }
  }

  const handleApprove = async (reg) => {
    setProcessing(reg.id)
    // Simulate API: approve registration → create retailer record + trigger WATI WhatsApp
    await new Promise((r) => setTimeout(r, 1000))
    const storeCode = generateStoreCode()
    setRegistrations((prev) =>
      prev.map((r) => (r.id === reg.id ? { ...r, status: 'approved', storeCode } : r))
    )
    setActionResult({ id: reg.id, type: 'approved', storeCode, mobile: reg.mobile })
    setProcessing(null)
  }

  const handleReject = async (reg) => {
    setProcessing(reg.id)
    await new Promise((r) => setTimeout(r, 600))
    setRegistrations((prev) =>
      prev.map((r) => (r.id === reg.id ? { ...r, status: 'rejected' } : r))
    )
    setActionResult({ id: reg.id, type: 'rejected' })
    setProcessing(null)
  }

  const pending = registrations.filter((r) => r.status === 'pending')
  const reviewed = registrations.filter((r) => r.status !== 'pending')

  if (!authed) {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'var(--bg-secondary)',
          padding: 16,
        }}
      >
        <div className="card" style={{ width: '100%', maxWidth: 380, padding: '40px 32px' }}>
          <div style={{ textAlign: 'center', marginBottom: 28 }}>
            <div
              style={{
                width: 48,
                height: 48,
                background: 'var(--color-brand-800)',
                borderRadius: 12,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                marginBottom: 16,
              }}
            >
              <span className="material-icons-outlined" style={{ fontSize: 24 }}>admin_panel_settings</span>
            </div>
            <h1 className="h1" style={{ margin: '0 0 4px' }}>Admin Panel</h1>
            <p className="body-sm">Retailer registration approvals</p>
          </div>

          <form onSubmit={handleAdminLogin}>
            <div style={{ marginBottom: 20 }}>
              <label className="label" style={{ display: 'block', marginBottom: 6 }}>Admin Password</label>
              <input
                className="input"
                type="password"
                placeholder="Enter admin password"
                value={adminPass}
                onChange={(e) => { setAdminPass(e.target.value); setAuthError('') }}
                style={authError ? { borderColor: 'var(--color-error)' } : {}}
              />
              {authError && (
                <p style={{ margin: '4px 0 0', fontSize: 12, color: 'var(--color-error)' }}>{authError}</p>
              )}
              <p className="caption" style={{ marginTop: 6 }}>Demo: use <code>admin123</code></p>
            </div>
            <button className="btn btn-primary" type="submit" style={{ width: '100%' }}>
              Sign In as Admin
            </button>
          </form>

          <p className="caption" style={{ textAlign: 'center', marginTop: 20 }}>
            <button
              onClick={onBack}
              style={{ background: 'none', border: 'none', color: 'var(--color-accent)', fontWeight: 600, fontSize: 12, cursor: 'pointer', padding: 0 }}
            >
              ← Back to retailer login
            </button>
          </p>
        </div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-secondary)', padding: '32px 16px' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 28 }}>
          <div>
            <h1 className="h1" style={{ margin: '0 0 4px' }}>Registration Approvals</h1>
            <p className="body-sm">{pending.length} pending request{pending.length !== 1 ? 's' : ''}</p>
          </div>
          <button className="btn btn-ghost btn-sm" onClick={onBack}>
            <span className="material-icons-outlined" style={{ fontSize: 16 }}>logout</span>
            Exit
          </button>
        </div>

        {/* Action result toast */}
        {actionResult && (
          <div
            className="card"
            style={{
              marginBottom: 20,
              borderColor: actionResult.type === 'approved' ? 'var(--color-success)' : 'var(--color-error)',
              background: actionResult.type === 'approved' ? 'var(--color-success-bg)' : 'var(--color-error-bg)',
              display: 'flex',
              alignItems: 'flex-start',
              gap: 12,
            }}
          >
            <span
              className="material-icons-outlined"
              style={{
                color: actionResult.type === 'approved' ? 'var(--color-success)' : 'var(--color-error)',
                fontSize: 20,
                marginTop: 2,
              }}
            >
              {actionResult.type === 'approved' ? 'check_circle' : 'cancel'}
            </span>
            <div>
              {actionResult.type === 'approved' ? (
                <>
                  <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--color-success)' }}>
                    Retailer approved — store code assigned
                  </div>
                  <div className="body-sm" style={{ marginTop: 2 }}>
                    Store code <strong>{actionResult.storeCode}</strong> sent to +91 {actionResult.mobile} via WhatsApp.
                  </div>
                  <div className="caption" style={{ marginTop: 2 }}>
                    WhatsApp message: "Welcome to RetailerOS! Your store code is {actionResult.storeCode}. Login at retaileros.in/app"
                  </div>
                </>
              ) : (
                <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--color-error)' }}>
                  Registration rejected.
                </div>
              )}
            </div>
            <button
              onClick={() => setActionResult(null)}
              style={{ marginLeft: 'auto', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', padding: 0 }}
            >
              <span className="material-icons-outlined" style={{ fontSize: 18 }}>close</span>
            </button>
          </div>
        )}

        {/* Pending */}
        {pending.length === 0 ? (
          <div className="card" style={{ textAlign: 'center', padding: '48px 32px' }}>
            <span className="material-icons-outlined" style={{ fontSize: 40, color: 'var(--text-muted)', display: 'block', marginBottom: 12 }}>
              inbox
            </span>
            <p className="body-sm">No pending registrations</p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
            {pending.map((reg) => (
              <RegistrationCard
                key={reg.id}
                reg={reg}
                processing={processing === reg.id}
                onApprove={() => handleApprove(reg)}
                onReject={() => handleReject(reg)}
              />
            ))}
          </div>
        )}

        {/* Reviewed */}
        {reviewed.length > 0 && (
          <>
            <div className="overline" style={{ marginBottom: 12 }}>Reviewed</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {reviewed.map((reg) => (
                <RegistrationCard key={reg.id} reg={reg} reviewed />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

function RegistrationCard({ reg, processing, onApprove, onReject, reviewed }) {
  const date = new Date(reg.submittedAt).toLocaleDateString('en-IN', {
    day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit',
  })

  return (
    <div
      className="card"
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 16,
        opacity: reviewed ? 0.7 : 1,
      }}
    >
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: 10,
          background: 'var(--bg-secondary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          fontWeight: 700,
          fontSize: 16,
          color: 'var(--text-secondary)',
        }}
      >
        {reg.storeName[0].toUpperCase()}
      </div>

      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 4 }}>
          <span style={{ fontWeight: 600, fontSize: 15, color: 'var(--text-primary)' }}>{reg.storeName}</span>
          <span className="badge badge-neutral" style={{ fontSize: 11 }}>{reg.businessType}</span>
          {reg.status === 'approved' && <span className="badge badge-success" style={{ fontSize: 11 }}>Approved</span>}
          {reg.status === 'rejected' && <span className="badge badge-error" style={{ fontSize: 11 }}>Rejected</span>}
        </div>
        <div className="body-sm" style={{ marginBottom: 2 }}>
          {reg.ownerName} · +91 {reg.mobile} · {reg.city}
        </div>
        <div className="caption">{date}</div>
        {reg.storeCode && (
          <div className="caption" style={{ marginTop: 4 }}>
            Store code: <strong>{reg.storeCode}</strong>
          </div>
        )}
      </div>

      {!reviewed && (
        <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
          <button
            className="btn btn-danger btn-sm"
            onClick={onReject}
            disabled={processing}
          >
            Reject
          </button>
          <button
            className="btn btn-primary btn-sm"
            onClick={onApprove}
            disabled={processing}
          >
            {processing ? (
              <span className="material-icons-outlined" style={{ fontSize: 14 }}>autorenew</span>
            ) : (
              <>
                <span className="material-icons-outlined" style={{ fontSize: 14 }}>check</span>
                Approve
              </>
            )}
          </button>
        </div>
      )}
    </div>
  )
}
