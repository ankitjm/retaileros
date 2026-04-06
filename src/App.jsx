import { Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react'
import AppLayout from './layouts/AppLayout'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import SalesPage from './pages/SalesPage'
import InventoryPage from './pages/InventoryPage'
import CustomersPage from './pages/CustomersPage'
import SchemesPage from './pages/SchemesPage'
import ReportsPage from './pages/ReportsPage'
import SettingsPage from './pages/SettingsPage'

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  const toggleDark = () => {
    setDarkMode(!darkMode)
    document.documentElement.setAttribute('data-theme', !darkMode ? 'dark' : 'light')
  }

  if (!isAuthenticated) {
    return <LoginPage onLogin={() => setIsAuthenticated(true)} darkMode={darkMode} toggleDark={toggleDark} />
  }

  return (
    <AppLayout darkMode={darkMode} toggleDark={toggleDark} onLogout={() => setIsAuthenticated(false)}>
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
