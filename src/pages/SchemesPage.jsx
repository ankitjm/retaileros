import Badge from '../components/Badge'
import EmptyState from '../components/EmptyState'

const SCHEMES = [
  { id: 1, name: 'Buy 2 Get 1 Free', type: 'BOGO', category: 'FMCG', status: 'active', startDate: '2026-03-01', endDate: '2026-04-30', redemptions: 342 },
  { id: 2, name: 'Flat 15% Off Dairy', type: 'Discount', category: 'Dairy', status: 'active', startDate: '2026-04-01', endDate: '2026-04-15', redemptions: 128 },
  { id: 3, name: 'Rs 50 Off on Rs 500+', type: 'Coupon', category: 'All', status: 'active', startDate: '2026-03-15', endDate: '2026-05-15', redemptions: 567 },
  { id: 4, name: 'Loyalty Double Points', type: 'Loyalty', category: 'All', status: 'scheduled', startDate: '2026-04-10', endDate: '2026-04-20', redemptions: 0 },
  { id: 5, name: 'Summer Combo Pack', type: 'Bundle', category: 'Beverages', status: 'expired', startDate: '2026-02-01', endDate: '2026-03-31', redemptions: 891 },
]

const STATUS_VARIANT = { active: 'success', scheduled: 'info', expired: 'neutral' }

export default function SchemesPage() {
  return (
    <div>
      <h1 className="page-title">
        <span className="material-icons-outlined">local_offer</span>
        Schemes & Promotions
      </h1>
      <p className="page-subtitle">Manage offers, discounts, and loyalty programs</p>

      <div className="card">
        <div className="flex items-center justify-between" style={{ marginBottom: 16, flexWrap: 'wrap', gap: 12 }}>
          <div className="h3">All Schemes</div>
          <button className="btn btn-primary btn-sm">
            <span className="material-icons-outlined" style={{ fontSize: 16 }}>add</span>
            Create Scheme
          </button>
        </div>

        {SCHEMES.length === 0 ? (
          <EmptyState icon="local_offer" title="No schemes yet" message="Create your first promotional scheme to boost sales" action="Create Scheme" onAction={() => {}} />
        ) : (
          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr>
                  <th>Scheme Name</th>
                  <th>Type</th>
                  <th>Category</th>
                  <th>Period</th>
                  <th>Redemptions</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {SCHEMES.map((s) => (
                  <tr key={s.id}>
                    <td style={{ fontWeight: 500 }}>{s.name}</td>
                    <td><Badge variant="neutral">{s.type}</Badge></td>
                    <td>{s.category}</td>
                    <td className="caption">{s.startDate} to {s.endDate}</td>
                    <td style={{ fontWeight: 600 }}>{s.redemptions}</td>
                    <td><Badge variant={STATUS_VARIANT[s.status]}>{s.status.charAt(0).toUpperCase() + s.status.slice(1)}</Badge></td>
                    <td>
                      <button className="btn btn-ghost btn-sm">
                        <span className="material-icons-outlined" style={{ fontSize: 16 }}>edit</span>
                      </button>
                      <button className="btn btn-ghost btn-sm" style={{ color: 'var(--color-error)' }}>
                        <span className="material-icons-outlined" style={{ fontSize: 16 }}>delete</span>
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
