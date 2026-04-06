import { useState } from 'react'
import Badge from '../components/Badge'
import EmptyState from '../components/EmptyState'

const INVENTORY = [
  { id: 1, name: 'Tata Salt (1kg)', sku: 'SKU-001', category: 'Grocery', stock: 245, reorder: 50, price: 28, status: 'success' },
  { id: 2, name: 'Amul Butter (500g)', sku: 'SKU-012', category: 'Dairy', stock: 12, reorder: 30, price: 270, status: 'error' },
  { id: 3, name: 'Maggi Noodles (4-pack)', sku: 'SKU-023', category: 'FMCG', stock: 89, reorder: 40, price: 56, status: 'success' },
  { id: 4, name: 'Parle-G Biscuit (250g)', sku: 'SKU-034', category: 'Snacks', stock: 320, reorder: 60, price: 22, status: 'success' },
  { id: 5, name: 'Coca-Cola (1.25L)', sku: 'SKU-045', category: 'Beverages', stock: 28, reorder: 25, price: 68, status: 'warning' },
  { id: 6, name: 'Aashirvaad Atta (5kg)', sku: 'SKU-056', category: 'Grocery', stock: 8, reorder: 20, price: 295, status: 'error' },
  { id: 7, name: 'Surf Excel (1kg)', sku: 'SKU-067', category: 'FMCG', stock: 156, reorder: 40, price: 185, status: 'success' },
  { id: 8, name: 'Mother Dairy Milk (1L)', sku: 'SKU-078', category: 'Dairy', stock: 0, reorder: 50, price: 62, status: 'error' },
  { id: 9, name: 'Britannia Bread', sku: 'SKU-089', category: 'Snacks', stock: 42, reorder: 30, price: 45, status: 'success' },
  { id: 10, name: 'Pepsi (2L)', sku: 'SKU-090', category: 'Beverages', stock: 18, reorder: 20, price: 85, status: 'warning' },
]

const STATUS_MAP = {
  success: 'In Stock',
  warning: 'Low Stock',
  error: 'Critical',
}

export default function InventoryPage() {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')

  const filtered = INVENTORY.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) || item.sku.toLowerCase().includes(search.toLowerCase())
    const matchesFilter = filter === 'all' || item.status === filter
    return matchesSearch && matchesFilter
  })

  const lowStockCount = INVENTORY.filter((i) => i.status === 'error' || i.status === 'warning').length
  const totalValue = INVENTORY.reduce((sum, i) => sum + i.stock * i.price, 0)

  return (
    <div>
      <h1 className="page-title">
        <span className="material-icons-outlined">inventory_2</span>
        Inventory
      </h1>
      <p className="page-subtitle">Track stock levels and manage products</p>

      {/* Summary */}
      <div className="grid-12 grid-cols-3" style={{ marginBottom: 24 }}>
        <div className="stat-card">
          <div className="stat-overline">Total Products</div>
          <div className="stat-value">{INVENTORY.length}</div>
        </div>
        <div className="stat-card">
          <div className="stat-overline">Low / Critical Stock</div>
          <div className="stat-value" style={{ color: 'var(--color-error)' }}>{lowStockCount}</div>
        </div>
        <div className="stat-card">
          <div className="stat-overline">Total Stock Value</div>
          <div className="stat-value">Rs {totalValue.toLocaleString()}</div>
        </div>
      </div>

      {/* Table */}
      <div className="card">
        <div className="flex items-center justify-between" style={{ marginBottom: 16, flexWrap: 'wrap', gap: 12 }}>
          <div className="h3">Stock Overview</div>
          <div className="flex items-center gap-2">
            <input className="input" style={{ width: 200 }} placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
            <select className="input" style={{ width: 140 }} value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="all">All Status</option>
              <option value="success">In Stock</option>
              <option value="warning">Low Stock</option>
              <option value="error">Critical</option>
            </select>
            <button className="btn btn-primary btn-sm">
              <span className="material-icons-outlined" style={{ fontSize: 16 }}>add</span>
              Add Product
            </button>
          </div>
        </div>

        {filtered.length === 0 ? (
          <EmptyState icon="inventory_2" title="No products found" message="Try adjusting your search or filter criteria" />
        ) : (
          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>SKU</th>
                  <th>Category</th>
                  <th>Stock</th>
                  <th>Reorder Level</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((item) => (
                  <tr key={item.id}>
                    <td style={{ fontWeight: 500 }}>{item.name}</td>
                    <td className="caption">{item.sku}</td>
                    <td><Badge variant="neutral">{item.category}</Badge></td>
                    <td style={{ fontWeight: 600 }}>{item.stock}</td>
                    <td>{item.reorder}</td>
                    <td>Rs {item.price}</td>
                    <td><Badge variant={item.status}>{STATUS_MAP[item.status]}</Badge></td>
                    <td>
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
