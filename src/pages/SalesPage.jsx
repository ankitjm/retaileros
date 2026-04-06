import { useState } from 'react'
import Badge from '../components/Badge'
import EmptyState from '../components/EmptyState'

const PRODUCTS = [
  { id: 1, name: 'Tata Salt (1kg)', sku: 'SKU-001', price: 28, category: 'Grocery' },
  { id: 2, name: 'Amul Butter (500g)', sku: 'SKU-012', price: 270, category: 'Dairy' },
  { id: 3, name: 'Maggi Noodles (4-pack)', sku: 'SKU-023', price: 56, category: 'FMCG' },
  { id: 4, name: 'Parle-G Biscuit (250g)', sku: 'SKU-034', price: 22, category: 'Snacks' },
  { id: 5, name: 'Coca-Cola (1.25L)', sku: 'SKU-045', price: 68, category: 'Beverages' },
  { id: 6, name: 'Aashirvaad Atta (5kg)', sku: 'SKU-056', price: 295, category: 'Grocery' },
  { id: 7, name: 'Surf Excel (1kg)', sku: 'SKU-067', price: 185, category: 'FMCG' },
  { id: 8, name: 'Mother Dairy Milk (1L)', sku: 'SKU-078', price: 62, category: 'Dairy' },
]

export default function SalesPage() {
  const [cart, setCart] = useState([])
  const [search, setSearch] = useState('')

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id)
      if (existing) {
        return prev.map((i) => i.id === product.id ? { ...i, qty: i.qty + 1 } : i)
      }
      return [...prev, { ...product, qty: 1 }]
    })
  }

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((i) => i.id !== id))
  }

  const updateQty = (id, qty) => {
    if (qty <= 0) return removeFromCart(id)
    setCart((prev) => prev.map((i) => i.id === id ? { ...i, qty } : i))
  }

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0)

  const filtered = PRODUCTS.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.sku.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <h1 className="page-title">
        <span className="material-icons-outlined">point_of_sale</span>
        Sales / POS
      </h1>
      <p className="page-subtitle">Create new sales and manage transactions</p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 20 }}>
        {/* Product browser */}
        <div className="card" style={{ minHeight: 400 }}>
          <div className="flex items-center justify-between" style={{ marginBottom: 16 }}>
            <div className="h3">Products</div>
            <input
              className="input"
              style={{ width: 240 }}
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>SKU</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((p) => (
                  <tr key={p.id}>
                    <td style={{ fontWeight: 500 }}>{p.name}</td>
                    <td className="caption">{p.sku}</td>
                    <td><Badge variant="neutral">{p.category}</Badge></td>
                    <td>Rs {p.price}</td>
                    <td>
                      <button className="btn btn-primary btn-sm" onClick={() => addToCart(p)}>
                        <span className="material-icons-outlined" style={{ fontSize: 16 }}>add</span>
                        Add
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Cart */}
        <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
          <div className="h3" style={{ marginBottom: 16 }}>
            <span className="material-icons-outlined" style={{ fontSize: 20, verticalAlign: 'middle', marginRight: 6 }}>shopping_cart</span>
            Cart ({cart.length})
          </div>

          {cart.length === 0 ? (
            <EmptyState icon="shopping_cart" title="Cart is empty" message="Add products from the list to start a sale" />
          ) : (
            <>
              <div style={{ flex: 1, overflowY: 'auto' }}>
                {cart.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '10px 0',
                      borderBottom: '1px solid var(--border)',
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 500, fontSize: 14 }}>{item.name}</div>
                      <div className="caption">Rs {item.price} each</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="btn btn-secondary btn-sm" style={{ width: 28, padding: 0 }} onClick={() => updateQty(item.id, item.qty - 1)}>-</button>
                      <span style={{ minWidth: 24, textAlign: 'center', fontWeight: 600, fontSize: 14 }}>{item.qty}</span>
                      <button className="btn btn-secondary btn-sm" style={{ width: 28, padding: 0 }} onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
                      <button className="btn btn-ghost btn-sm" style={{ color: 'var(--color-error)', padding: 4 }} onClick={() => removeFromCart(item.id)}>
                        <span className="material-icons-outlined" style={{ fontSize: 16 }}>delete</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ borderTop: '1.5px solid var(--border-strong)', paddingTop: 16, marginTop: 16 }}>
                <div className="flex items-center justify-between" style={{ marginBottom: 12 }}>
                  <span className="h3">Total</span>
                  <span className="h2" style={{ color: 'var(--color-accent)' }}>Rs {total.toLocaleString()}</span>
                </div>
                <button className="btn btn-primary" style={{ width: '100%' }}>
                  <span className="material-icons-outlined" style={{ fontSize: 18 }}>payments</span>
                  Complete Sale
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
