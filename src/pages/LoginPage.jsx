import { useState } from 'react'

export default function LoginPage({ onLogin, darkMode, toggleDark }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onLogin()
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
      <div style={{ position: 'absolute', top: 16, right: 16 }}>
        <button className="btn btn-ghost btn-sm" onClick={toggleDark}>
          <span className="material-icons-outlined" style={{ fontSize: 18 }}>
            {darkMode ? 'light_mode' : 'dark_mode'}
          </span>
        </button>
      </div>

      <div className="card" style={{ width: '100%', maxWidth: 400, padding: '40px 32px' }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
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
          <h1 className="h1" style={{ margin: '0 0 4px' }}>RetailerOS</h1>
          <p className="body-sm">Sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 16 }}>
            <label className="label" style={{ display: 'block', marginBottom: 6 }}>Email</label>
            <input
              className="input"
              type="email"
              placeholder="you@store.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div style={{ marginBottom: 24 }}>
            <label className="label" style={{ display: 'block', marginBottom: 6 }}>Password</label>
            <input
              className="input"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="btn btn-primary" type="submit" style={{ width: '100%' }}>
            Sign In
          </button>

          <p className="caption" style={{ textAlign: 'center', marginTop: 16 }}>
            Demo: click Sign In with any credentials
          </p>
        </form>
      </div>
    </div>
  )
}
