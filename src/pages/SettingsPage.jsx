import { useState } from 'react'

export default function SettingsPage() {
  const [storeName, setStoreName] = useState('Sharma General Store')
  const [storePhone, setStorePhone] = useState('9876543210')
  const [storeEmail, setStoreEmail] = useState('contact@sharmastore.com')
  const [gst, setGst] = useState('29AABCS1429B1Z1')
  const [address, setAddress] = useState('42, MG Road, Bengaluru, Karnataka 560001')
  const [currency, setCurrency] = useState('INR')
  const [taxRate, setTaxRate] = useState('18')

  return (
    <div>
      <h1 className="page-title">
        <span className="material-icons-outlined">settings</span>
        Settings
      </h1>
      <p className="page-subtitle">Configure your store profile and preferences</p>

      <div style={{ maxWidth: 720 }}>
        {/* Store Profile */}
        <div className="card" style={{ marginBottom: 20 }}>
          <div className="h3" style={{ marginBottom: 20 }}>Store Profile</div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div>
              <label className="label" style={{ display: 'block', marginBottom: 6 }}>Store Name</label>
              <input className="input" value={storeName} onChange={(e) => setStoreName(e.target.value)} />
            </div>
            <div>
              <label className="label" style={{ display: 'block', marginBottom: 6 }}>Phone</label>
              <input className="input" value={storePhone} onChange={(e) => setStorePhone(e.target.value)} />
            </div>
            <div>
              <label className="label" style={{ display: 'block', marginBottom: 6 }}>Email</label>
              <input className="input" value={storeEmail} onChange={(e) => setStoreEmail(e.target.value)} />
            </div>
            <div>
              <label className="label" style={{ display: 'block', marginBottom: 6 }}>GST Number</label>
              <input className="input" value={gst} onChange={(e) => setGst(e.target.value)} />
            </div>
            <div style={{ gridColumn: '1 / -1' }}>
              <label className="label" style={{ display: 'block', marginBottom: 6 }}>Address</label>
              <textarea className="input" value={address} onChange={(e) => setAddress(e.target.value)} />
            </div>
          </div>
        </div>

        {/* Billing */}
        <div className="card" style={{ marginBottom: 20 }}>
          <div className="h3" style={{ marginBottom: 20 }}>Billing & Tax</div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div>
              <label className="label" style={{ display: 'block', marginBottom: 6 }}>Currency</label>
              <select className="input" value={currency} onChange={(e) => setCurrency(e.target.value)}>
                <option value="INR">INR (Indian Rupee)</option>
                <option value="USD">USD (US Dollar)</option>
              </select>
            </div>
            <div>
              <label className="label" style={{ display: 'block', marginBottom: 6 }}>Default Tax Rate (%)</label>
              <input className="input" type="number" value={taxRate} onChange={(e) => setTaxRate(e.target.value)} />
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="card" style={{ marginBottom: 20 }}>
          <div className="h3" style={{ marginBottom: 20 }}>Notifications</div>

          {[
            { label: 'Low stock alerts', desc: 'Get notified when products fall below reorder level' },
            { label: 'Daily sales summary', desc: 'Receive end-of-day sales report via email' },
            { label: 'New customer registration', desc: 'Alert when a new customer is added' },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 0',
                borderBottom: i < 2 ? '1px solid var(--border)' : 'none',
              }}
            >
              <div>
                <div style={{ fontWeight: 500, fontSize: 14 }}>{item.label}</div>
                <div className="caption">{item.desc}</div>
              </div>
              <label style={{ position: 'relative', display: 'inline-block', width: 44, height: 24, cursor: 'pointer' }}>
                <input type="checkbox" defaultChecked={i < 2} style={{ opacity: 0, width: 0, height: 0 }} />
                <span
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: i < 2 ? 'var(--color-accent)' : 'var(--border-strong)',
                    borderRadius: 9999,
                    transition: 'background 200ms',
                  }}
                >
                  <span
                    style={{
                      position: 'absolute',
                      top: 2,
                      left: i < 2 ? 22 : 2,
                      width: 20,
                      height: 20,
                      background: 'white',
                      borderRadius: '50%',
                      transition: 'left 200ms',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
                    }}
                  />
                </span>
              </label>
            </div>
          ))}
        </div>

        {/* Danger zone */}
        <div className="card" style={{ borderColor: 'var(--color-error)' }}>
          <div className="h3" style={{ color: 'var(--color-error)', marginBottom: 12 }}>Danger Zone</div>
          <p className="body-sm" style={{ margin: '0 0 16px' }}>These actions are irreversible. Proceed with caution.</p>
          <div className="flex gap-2">
            <button className="btn btn-danger btn-sm">Reset All Data</button>
            <button className="btn btn-danger btn-sm">Delete Store</button>
          </div>
        </div>

        {/* Save */}
        <div style={{ marginTop: 24, display: 'flex', justifyContent: 'flex-end', gap: 12 }}>
          <button className="btn btn-secondary">Cancel</button>
          <button className="btn btn-primary">
            <span className="material-icons-outlined" style={{ fontSize: 16 }}>save</span>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  )
}
