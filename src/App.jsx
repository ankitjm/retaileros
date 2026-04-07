import { Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react'
import AppLayout from './layouts/AppLayout'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import AdminPage from './pages/AdminPage'
import WelcomeScreen from './pages/WelcomeScreen'
import DashboardPage from './pages/DashboardPage'
import SalesPage from './pages/SalesPage'
import InventoryPage from './pages/InventoryPage'
import CustomersPage from './pages/CustomersPage'
import SchemesPage from './pages/SchemesPage'
import ReportsPage from './pages/ReportsPage'
import SettingsPage from './pages/SettingsPage'

// view: 'login' | 'register' | 'admin' | 'welcome' | 'app'
export default function App() {
  // Auto-login for demo: /app/?demo=1 skips the login screen entirely
  const isDemoMode = new URLSearchParams(window.location.search).get('demo') === '1'
  const [view, setView] = useState(isDemoMode ? 'app' : 'login')
  const [isFirstLogin, setIsFirstLogin] = useState(!isDemoMode)
  const [darkMode, setDarkMode] = useState(false)

  const toggleDark = () => {
    setDarkMode(!darkMode)
    document.documentElement.setAttribute('data-theme', !darkMode ? 'dark' : 'light')
  }

  const handleLogin = () => {
    if (isFirstLogin) {
      setView('welcome')
    } else {
      setView('app')
    }
  }

  const handleWelcomeComplete = () => {
    setIsFirstLogin(false)
    setView('app')
  }

  const handleLogout = () => {
    setIsFirstLogin(false) // subsequent logins skip welcome
    setView('login')
  }

  if (view === 'register') {
    return <RegisterPage onBack={() => setView('login')} />
  }

  if (view === 'admin') {
    return <AdminPage onBack={() => setView('login')} />
  }

  if (view === 'welcome') {
    return <WelcomeScreen onComplete={handleWelcomeComplete} />
  }

  if (view !== 'app') {
    return (
      <LoginPage
        onLogin={handleLogin}
        onRegister={() => setView('register')}
        onAdmin={() => setView('admin')}
        darkMode={darkMode}
        toggleDark={toggleDark}
      />
    )
  }

  return (
    <AppLayout darkMode={darkMode} toggleDark={toggleDark} onLogout={handleLogout}>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/sales" element={<SalesPage />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/customers" element={<CustomersPage />} />
        <Route path="/schemes" element={<SchemesPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AppLayout>
  )
}
