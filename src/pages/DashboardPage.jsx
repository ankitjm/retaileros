import StatCard from '../components/StatCard'
import Badge from '../components/Badge'
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar,
} from 'recharts'

const revenueData = [
  { name: 'Mon', revenue: 12400 },
  { name: 'Tue', revenue: 18200 },
  { name: 'Wed', revenue: 15800 },
  { name: 'Thu', revenue: 22100 },
  { name: 'Fri', revenue: 19500 },
  { name: 'Sat', revenue: 28900 },
  { name: 'Sun', revenue: 24300 },
]

const categoryData = [
  { name: 'Grocery', sales: 45200 },
  { name: 'FMCG', sales: 32100 },
  { name: 'Dairy', sales: 21800 },
  { name: 'Snacks', sales: 18400 },
  { name: 'Beverages', sales: 15600 },
]

const recentOrders = [
  { id: 'ORD-1042', customer: 'Rajesh Kumar', amount: '2,450', status: 'success', statusText: 'Completed', time: '10 min ago' },
  { id: 'ORD-1041', customer: 'Priya Sharma', amount: '1,820', status: 'warning', statusText: 'Processing', time: '25 min ago' },
  { id: 'ORD-1040', customer: 'Amit Patel', amount: '3,100', status: 'success', statusText: 'Completed', time: '1 hr ago' },
  { id: 'ORD-1039', customer: 'Sneha Gupta', amount: '890', status: 'error', statusText: 'Cancelled', time: '2 hr ago' },
  { id: 'ORD-1038', customer: 'Vikram Singh', amount: '4,250', status: 'success', statusText: 'Completed', time: '3 hr ago' },
]

export default function DashboardPage() {
  return (
    <div>
      <h1 className="page-title">
        <span className="material-icons-outlined">dashboard</span>
        Dashboard
      </h1>
      <p className="page-subtitle">Overview of your store performance</p>

      {/* Stat Cards */}
      <div className="grid-12 grid-cols-4" style={{ marginBottom: 24 }}>
        <StatCard overline="Today's Revenue" value="Rs 28,940" delta="+12.5%" deltaDir="up" sublabel="vs yesterday" icon="payments" />
        <StatCard overline="Orders" value="142" delta="+8.3%" deltaDir="up" sublabel="vs yesterday" icon="shopping_cart" />
        <StatCard overline="Avg. Order Value" value="Rs 1,240" delta="-2.1%" deltaDir="down" sublabel="vs yesterday" icon="receipt_long" />
        <StatCard overline="Active Customers" value="89" delta="+5.0%" deltaDir="up" sublabel="this week" icon="people" />
      </div>

      {/* Charts */}
      <div className="grid-12 grid-cols-2" style={{ marginBottom: 24 }}>
        <div className="card">
          <div className="h3" style={{ marginBottom: 16 }}>Weekly Revenue</div>
          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#F59E0B" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="name" tick={{ fill: 'var(--text-muted)', fontSize: 12 }} axisLine={{ stroke: 'var(--border)' }} />
              <YAxis tick={{ fill: 'var(--text-muted)', fontSize: 12 }} axisLine={{ stroke: 'var(--border)' }} />
              <Tooltip
                contentStyle={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 8,
                  fontSize: 13,
                  color: 'var(--text-primary)',
                }}
              />
              <Area type="monotone" dataKey="revenue" stroke="#F59E0B" strokeWidth={2} fill="url(#colorRevenue)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <div className="h3" style={{ marginBottom: 16 }}>Sales by Category</div>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={categoryData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="name" tick={{ fill: 'var(--text-muted)', fontSize: 12 }} axisLine={{ stroke: 'var(--border)' }} />
              <YAxis tick={{ fill: 'var(--text-muted)', fontSize: 12 }} axisLine={{ stroke: 'var(--border)' }} />
              <Tooltip
                contentStyle={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 8,
                  fontSize: 13,
                  color: 'var(--text-primary)',
                }}
              />
              <Bar dataKey="sales" fill="#F59E0B" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="card">
        <div className="flex items-center justify-between" style={{ marginBottom: 16 }}>
          <div className="h3">Recent Orders</div>
          <button className="btn btn-ghost btn-sm">View All</button>
        </div>
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id}>
                  <td style={{ fontWeight: 600 }}>{order.id}</td>
                  <td>{order.customer}</td>
                  <td>Rs {order.amount}</td>
                  <td><Badge variant={order.status}>{order.statusText}</Badge></td>
                  <td className="caption">{order.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
