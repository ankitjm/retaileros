import { useState } from 'react'
import Badge from '../components/Badge'
import EmptyState from '../components/EmptyState'

const CUSTOMERS = [
  { id: 1, name: 'Rajesh Kumar', phone: '9876543210', email: 'rajesh@email.com', totalOrders: 42, totalSpent: 28450, tier: 'Gold', lastVisit: '2 days ago' },
  { id: 2, name: 'Priya Sharma', phone: '9876543211', email: 'priya@email.com', totalOrders: 28, totalSpent: 18200, tier: 'Silver', lastVisit: '1 day ago' },
  { id: 3, name: 'Amit Patel', phone: '9876543212', email: 'amit@email.com', totalOrders: 65, totalSpent: 52100, tier: 'Gold', lastVisit: 'Today' },
  { id: 4, name: 'Sneha Gupta', phone: '9876543213', email: 'sneha@email.com', totalOrders: 12, totalSpent: 8900, tier: 'Bronze', lastVisit: '1 week ago' },
  { id: 5, name: 'Vikram Singh', phone: '9876543214', email: 'vikram@email.com', totalOrders: 85, totalSpent: 72300, tier: 'Platinum', lastVisit: 'Today' },
  { id: 6, name: 'Neha Reddy', phone: '9876543215', email: 'neha@email.com', totalOrders: 8, totalSpent: 4200, tier: 'Bronze', lastVisit: '2 weeks ago' },
]

const TIER_VARIANT = { Platinum: 'info', Gold: 'warning', Silver: 'neutral', Bronze: 'neutral' }

export default function CustomersPage() {
  const [search, setSearch] = useState('')

  const filtered = CUSTOMERS.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.phone.includes(search)
  )

  return (
    <div>
      <h1 className="page-title">
        <span className="material-icons-outlined">people</span>
        Customers
      </h1>
      <p className="page-subtitle">Manage your customer base and loyalty tiers</p>

      <div className="card">
        <div className="flex items-center justify-between" style={{ marginBottom: 16, flexWrap: 'wrap', gap: 12 }}>
          <div className="h3">All Customers ({CUSTOMERS.length})</div>
          <div className="flex items-center gap-2">
            <input className="input" style={{ width: 220 }} placeholder="Search by name or phone..." value={search} onChange={(e) => setSearch(e.target.value)} />
            <button className="btn btn-primary btn-sm">
              <span className="material-icons-outlined" style={{ fontSize: 16 }}>person_add</span>
              Add Customer
            </button>
          </div>
        </div>

        {filtered.length === 0 ? (
          <EmptyState icon="people" title="No customers found" message="Try a different search term or add a new customer" action="Add Customer" onAction={() => {}} />
        ) : (
          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Orders</th>
                  <th>Total Spent</th>
                  <th>Tier</th>
                  <th>Last Visit</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((c) => (
                  <tr key={c.id}>
                    <td>
                      <div style={{ fontWeight: 500 }}>{c.name}</div>
                      <div className="caption">{c.email}</div>
                    </td>
                    <td>{c.phone}</td>
                    <td style={{ fontWeight: 600 }}>{c.totalOrders}</td>
                    <td>Rs {c.totalSpent.toLocaleString()}</td>
                    <td><Badge variant={TIER_VARIANT[c.tier]}>{c.tier}</Badge></td>
                    <td className="caption">{c.lastVisit}</td>
                    <td>
                      <button className="btn btn-ghost btn-sm">
                        <span className="material-icons-outlined" style={{ fontSize: 16 }}>visibility</span>
                      </button>
                      <button className="btn btn-ghost btn-sm">
                        <span className="material-icons-outlined" style={{ fontSize: 16 }}>edit</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
