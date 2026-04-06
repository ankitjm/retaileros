export default function StatCard({ overline, value, delta, deltaDir, sublabel, icon }) {
  return (
    <div className="stat-card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <div className="stat-overline">{overline}</div>
          <div className="stat-value">{value}</div>
          {delta && (
            <div className={`stat-delta ${deltaDir === 'up' ? 'up' : 'down'}`}>
              {deltaDir === 'up' ? '+' : ''}{delta}
            </div>
          )}
          {sublabel && <div className="stat-sublabel">{sublabel}</div>}
        </div>
        {icon && (
          <span
            className="material-icons-outlined"
            style={{ fontSize: 32, color: 'var(--color-accent)', opacity: 0.7 }}
          >
            {icon}
          </span>
        )}
      </div>
    </div>
  )
}
