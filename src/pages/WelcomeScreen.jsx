import { useState } from 'react'

const CATEGORIES = [
  'Groceries & FMCG',
  'Electronics',
  'Clothing & Apparel',
  'Pharmacy & Health',
  'Hardware & Tools',
  'Stationery & Books',
  'Food & Beverages',
  'Cosmetics & Beauty',
]

const STEPS = ['Welcome', 'Store Details', 'Categories']

export default function WelcomeScreen({ onComplete }) {
  const [step, setStep] = useState(0)
  const [storeName, setStoreName] = useState('')
  const [city, setCity] = useState('')
  const [selected, setSelected] = useState([])
  const [saving, setSaving] = useState(false)

  const toggleCategory = (cat) => {
    setSelected((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    )
  }

  const handleFinish = async () => {
    setSaving(true)
    // Simulate saving store preferences
    await new Promise((r) => setTimeout(r, 800))
    setSaving(false)
    onComplete()
  }

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
      <div className="card" style={{ width: '100%', maxWidth: 480, padding: '40px 32px' }}>
        {/* Progress */}
        <div style={{ display: 'flex', gap: 6, marginBottom: 32 }}>
          {STEPS.map((s, i) => (
            <div
              key={s}
              style={{
                flex: 1,
                height: 4,
                borderRadius: 9999,
                background: i <= step ? 'var(--color-accent)' : 'var(--border)',
                transition: 'background 300ms',
              }}
            />
          ))}
        </div>

        {/* Step 0 — Welcome */}
        {step === 0 && (
          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                width: 64,
                height: 64,
                background: 'var(--color-accent)',
                borderRadius: 16,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 700,
                fontSize: 28,
                marginBottom: 20,
              }}
            >
              R
            </div>
            <h1 className="h1" style={{ margin: '0 0 12px' }}>Welcome to RetailerOS!</h1>
            <p className="body-sm" style={{ marginBottom: 8 }}>
              Your store is ready. Let's take 60 seconds to personalise your experience.
            </p>
            <p className="caption" style={{ marginBottom: 36 }}>You can always update these settings later.</p>
            <button
              className="btn btn-primary btn-lg"
              style={{ width: '100%' }}
              onClick={() => setStep(1)}
            >
              Let's get started
              <span className="material-icons-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
            </button>
            <button
              className="btn btn-ghost"
              style={{ width: '100%', marginTop: 10 }}
              onClick={onComplete}
            >
              Skip for now
            </button>
          </div>
        )}

        {/* Step 1 — Store Details */}
        {step === 1 && (
          <div>
            <h2 className="h2" style={{ margin: '0 0 6px' }}>Store Details</h2>
            <p className="body-sm" style={{ marginBottom: 24 }}>How should your store appear to customers?</p>

            <div style={{ marginBottom: 16 }}>
              <label className="label" style={{ display: 'block', marginBottom: 6 }}>Display Name</label>
              <input
                className="input"
                placeholder="e.g. Sharma General Store"
                value={storeName}
                onChange={(e) => setStoreName(e.target.value)}
              />
              <p className="caption" style={{ marginTop: 4 }}>This is shown on receipts and reports</p>
            </div>

            <div style={{ marginBottom: 32 }}>
              <label className="label" style={{ display: 'block', marginBottom: 6 }}>City</label>
              <input
                className="input"
                placeholder="e.g. Bengaluru"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

            <div style={{ display: 'flex', gap: 10 }}>
              <button className="btn btn-secondary" style={{ flex: 1 }} onClick={() => setStep(0)}>
                Back
              </button>
              <button
                className="btn btn-primary"
                style={{ flex: 2 }}
                onClick={() => setStep(2)}
              >
                Continue
                <span className="material-icons-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
              </button>
            </div>
          </div>
        )}

        {/* Step 2 — Categories */}
        {step === 2 && (
          <div>
            <h2 className="h2" style={{ margin: '0 0 6px' }}>What do you sell?</h2>
            <p className="body-sm" style={{ marginBottom: 20 }}>Select all categories that apply to your store.</p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 8,
                marginBottom: 28,
              }}
            >
              {CATEGORIES.map((cat) => {
                const active = selected.includes(cat)
                return (
                  <button
                    key={cat}
                    onClick={() => toggleCategory(cat)}
                    style={{
                      padding: '10px 12px',
                      borderRadius: 'var(--radius-btn)',
                      border: `1.5px solid ${active ? 'var(--color-accent)' : 'var(--border-strong)'}`,
                      background: active ? 'var(--color-accent-muted)' : 'var(--bg-card)',
                      color: active ? 'var(--color-accent-hover)' : 'var(--text-primary)',
                      fontWeight: active ? 600 : 400,
                      fontSize: 13,
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 150ms',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                    }}
                  >
                    {active && (
                      <span className="material-icons-outlined" style={{ fontSize: 14, color: 'var(--color-accent)' }}>
                        check
                      </span>
                    )}
                    {cat}
                  </button>
                )
              })}
            </div>

            <div style={{ display: 'flex', gap: 10 }}>
              <button className="btn btn-secondary" style={{ flex: 1 }} onClick={() => setStep(1)}>
                Back
              </button>
              <button
                className="btn btn-primary"
                style={{ flex: 2 }}
                onClick={handleFinish}
                disabled={saving}
              >
                {saving ? (
                  <>
                    <span className="material-icons-outlined" style={{ fontSize: 16 }}>autorenew</span>
                    Saving…
                  </>
                ) : (
                  <>
                    <span className="material-icons-outlined" style={{ fontSize: 16 }}>rocket_launch</span>
                    Open my store
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
