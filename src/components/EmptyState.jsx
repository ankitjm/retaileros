export default function EmptyState({ icon = 'inbox', title = 'No data yet', message, action, onAction }) {
  return (
    <div className="empty-state">
      <span className="material-icons-outlined">{icon}</span>
      <h3 className="h3" style={{ margin: '0 0 4px', color: 'var(--text-secondary)' }}>{title}</h3>
      {message && <p>{message}</p>}
      {action && onAction && (
        <button className="btn btn-primary btn-sm" onClick={onAction}>{action}</button>
      )}
    </div>
  )
}
