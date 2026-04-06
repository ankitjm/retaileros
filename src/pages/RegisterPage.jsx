import { useState } from 'react'

const BUSINESS_TYPES = [
  'General Store',
  'Grocery & FMCG',
  'Electronics',
  'Clothing & Apparel',
  'Pharmacy',
  'Hardware & Tools',
  'Stationery',
  'Other',
]

export default function RegisterPage({ onBack }) {
  const [form, setForm] = useState({
    storeName: '',
    ownerName: '',
    mobile: '',
    city: '',
    businessType: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.storeName.trim()) e.storeName = 'Store name is required'
    if (!form.ownerName.trim()) e.ownerName = 'Owner name is required'
    if (!/^[6-9]\d{9}$/.test(form.mobile)) e.mobile = 'Enter a valid 10-digit mobile number'
    if (!form.city.trim()) e.city = 'City is required'
    if (!form.businessType) e.businessType = 'Select a business type'
    return e
  }

  const handleChange = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }
    setLoading(true)
    // Simulate API call to POST /api/auth/register
    await new Promise((r) => setTimeout(r, 900))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
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
        <div className="card" style={{ width: '100%', maxWidth: 440, padding: '48px 32px', textAlign: 'center' }}>
          <div
            style={{
              width: 56,
              height: 56,
              background: 'var(--color-success-bg)',
              borderRadius: '50%',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 20,
            }}
          >
            <span className="material-icons-outlined" style={{ color: 'var(--color-success)', fontSize: 28 }}>
              check_circle
            </span>
          </div>
          <h2 className="h2" style={{ margin: '0 0 12px' }}>Request Submitted!</h2>
          <p className="body-sm" style={{ margin: '0 0 8px' }}>
            Your request has been submitted. We will contact you on WhatsApp within 24 hours.
          </p>
          <p className="caption" style={{ marginBottom: 32 }}>
            Mobile: +91 {form.mobile}
          </p>
          <button className="btn btn-secondary" style={{ width: '100%' }} onClick={onBack}>
            Back to Login
          </button>
        </div>
      </div>
    )
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
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <div
            style={{
              width: 48,
              height: 48,
              background: 'var(--color-accent)',
              borderRadius: 12,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 700,
              fontSize: 22,
              marginBottom: 16,
            }}
          >
            R
          </div>
          <h1 className="h1" style={{ margin: '0 0 4px' }}>Request Access</h1>
          <p className="body-sm">Fill in your details and we'll set up your store</p>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <Field label="Store Name" error={errors.storeName}>
            <input
              className="input"
              placeholder="e.g. Sharma General Store"
              value={form.storeName}
              onChange={handleChange('storeName')}
              style={errors.storeName ? { borderColor: 'var(--color-error)' } : {}}
            />
          </Field>

          <Field label="Owner Name" error={errors.ownerName}>
            <input
              className="input"
              placeholder="e.g. Ramesh Sharma"
              value={form.ownerName}
              onChange={handleChange('ownerName')}
              style={errors.ownerName ? { borderColor: 'var(--color-error)' } : {}}
            />
          </Field>

          <Field label="Mobile Number" error={errors.mobile}>
            <div style={{ position: 'relative' }}>
              <span
                style={{
                  position: 'absolute',
                  left: 12,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'var(--text-muted)',
                  fontSize: 14,
                  pointerEvents: 'none',
                }}
              >
                +91
              </span>
              <input
                className="input"
                type="tel"
                placeholder="98765 43210"
                value={form.mobile}
                onChange={handleChange('mobile')}
                maxLength={10}
                style={{
                  paddingLeft: 40,
                  ...(errors.mobile ? { borderColor: 'var(--color-error)' } : {}),
                }}
              />
            </div>
          </Field>

          <Field label="City" error={errors.city}>
            <input
              className="input"
              placeholder="e.g. Bengaluru"
              value={form.city}
              onChange={handleChange('city')}
              style={errors.city ? { borderColor: 'var(--color-error)' } : {}}
            />
          </Field>

          <Field label="Business Type" error={errors.businessType} style={{ marginBottom: 24 }}>
            <select
              className="input"
              value={form.businessType}
              onChange={handleChange('businessType')}
              style={errors.businessType ? { borderColor: 'var(--color-error)' } : {}}
            >
              <option value="">Select type…</option>
              {BUSINESS_TYPES.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </Field>

          <button
            className="btn btn-primary"
            type="submit"
            style={{ width: '100%', height: 42, fontSize: 15 }}
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="material-icons-outlined" style={{ fontSize: 16, animation: 'spin 1s linear infinite' }}>
                  autorenew
                </span>
                Submitting…
              </>
            ) : (
              'Submit Request'
            )}
          </button>
        </form>

        <p className="caption" style={{ textAlign: 'center', marginTop: 20 }}>
          Already have an account?{' '}
          <button
            onClick={onBack}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--color-accent)',
              fontWeight: 600,
              fontSize: 12,
              cursor: 'pointer',
              padding: 0,
            }}
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  )
}

function Field({ label, error, children, style }) {
  return (
    <div style={{ marginBottom: 16, ...style }}>
      <label className="label" style={{ display: 'block', marginBottom: 6 }}>{label}</label>
      {children}
      {error && (
        <p style={{ margin: '4px 0 0', fontSize: 12, color: 'var(--color-error)' }}>{error}</p>
      )}
    </div>
  )
}
