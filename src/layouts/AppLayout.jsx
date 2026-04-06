import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const NAV_SECTIONS = [
  {
    label: 'Main',
    items: [
      { to: '/', icon: 'dashboard', label: 'Dashboard' },
      { to: '/sales', icon: 'point_of_sale', label: 'Sales / POS' },
      { to: '/inventory', icon: 'inventory_2', label: 'Inventory' },
    ],
  },
  {
    label: 'Manage',
    items: [
      { to: '/customers', icon: 'people', label: 'Customers' },
      { to: '/schemes', icon: 'local_offer', label: 'Schemes' },
      { to: '/reports', icon: 'bar_chart', label: 'Reports' },
    ],
  },
  {
    label: 'System',
    items: [
      { to: '/settings', icon: 'settings', label: 'Settings' },
    ],
  },
]

export default function AppLayout({ children, darkMode, toggleDark, onLogout }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()

  const closeSidebar = () => setSidebarOpen(false)

  return (
    <div className="app-layout">
      {/* Mobile overlay */}
      <div
        className={`sidebar-overlay ${sidebarOpen ? 'open' : ''}`}
        onClick={closeSidebar}
      />

      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-brand">
          <div className="logo-icon">R</div>
          <h1>RetailerOS</h1>
        </div>

        <nav className="sidebar-nav">
          {NAV_SECTIONS.map((section) => (
            <div key={section.label}>
              <div className="sidebar-section-label">{section.label}</div>
              {section.items.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                  onClick={closeSidebar}
                >
                  <span className="material-icons-outlined">{item.icon}</span>
                  <span>{item.label}</span>
                </NavLink>
              ))}
            </div>
          ))}
        </nav>

        <div className="sidebar-footer">
          <button className="nav-item" onClick={onLogout}>
            <span className="material-icons-outlined">logout</span>
            <span>Log Out</span>
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="main-area">
        <header className="header">
          <div className="header-left">
            <button className="menu-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
              <span className="material-icons-outlined">menu</span>
            </button>
            <div className="body-sm" style={{ color: 'var(--text-secondary)' }}>
              {new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
          </div>
          <div className="header-right">
            <button className="btn btn-ghost btn-sm" onClick={toggleDark} title="Toggle dark mode">
              <span className="material-icons-outlined" style={{ fontSize: 18 }}>
                {darkMode ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
            <button className="btn btn-ghost btn-sm" title="Notifications">
              <span className="material-icons-outlined" style={{ fontSize: 18 }}>notifications</span>
            </button>
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: '50%',
                background: 'var(--color-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 700,
                fontSize: 13,
              }}
            >
              AK
            </div>
          </div>
        </header>

        <main className="page-content">
          {children}
        </main>
      </div>
    </div>
  )
}
