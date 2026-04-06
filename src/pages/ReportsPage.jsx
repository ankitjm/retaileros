import StatCard from '../components/StatCard'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend,
} from 'recharts'

const monthlyData = [
  { name: 'Jan', revenue: 245000, orders: 1820 },
  { name: 'Feb', revenue: 268000, orders: 1950 },
  { name: 'Mar', revenue: 312000, orders: 2340 },
  { name: 'Apr', revenue: 289000, orders: 2100 },
]

const categoryBreakdown = [
  { name: 'Grocery', value: 35 },
  { name: 'FMCG', value: 25 },
  { name: 'Dairy', value: 18 },
  { name: 'Snacks', value: 12 },
  { name: 'Beverages', value: 10 },
]

const COLORS = ['#F59E0B', '#2563EB', '#16A34A', '#DC2626', '#8B5CF6']

export default function ReportsPage() {
  return (
    <div>
      <h1 className="page-title">
        <span className="material-icons-outlined">bar_chart</span>
        Reports & Analytics
      </h1>
      <p className="page-subtitle">Detailed insights into your business performance</p>

      {/* KPIs */}
      <div className="grid-12 grid-cols-4" style={{ marginBottom: 24 }}>
        <StatCard overline="Monthly Revenue" value="Rs 3.12L" delta="+16.4%" deltaDir="up" sublabel="vs last month" icon="trending_up" />
        <StatCard overline="Monthly Orders" value="2,340" delta="+20.0%" deltaDir="up" sublabel="vs last month" icon="receipt" />
        <StatCard overline="Return Rate" value="2.8%" delta="-0.4%" deltaDir="up" sublabel="improvement" icon="assignment_return" />
        <StatCard overline="Customer Retention" value="78%" delta="+3.2%" deltaDir="up" sublabel="vs last month" icon="loyalty" />
      </div>

      {/* Charts */}
      <div className="grid-12 grid-cols-2" style={{ marginBottom: 24 }}>
        <div className="card">
          <div className="h3" style={{ marginBottom: 16 }}>Revenue Trend</div>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={monthlyData}>
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
              <Line type="monotone" dataKey="revenue" stroke="#F59E0B" strokeWidth={2.5} dot={{ r: 4, fill: '#F59E0B' }} />
              <Line type="monotone" dataKey="orders" stroke="#2563EB" strokeWidth={2} dot={{ r: 3, fill: '#2563EB' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <div className="h3" style={{ marginBottom: 16 }}>Sales by Category</div>
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={categoryBreakdown}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                dataKey="value"
                label={({ name, value }) => `${name} ${value}%`}
              >
                {categoryBreakdown.map((entry, i) => (
                  <Cell key={entry.name} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Export */}
      <div className="card">
        <div className="flex items-center justify-between">
          <div>
            <div className="h3">Export Reports</div>
            <p className="body-sm" style={{ margin: '4px 0 0' }}>Download detailed reports for accounting or analysis</p>
          </div>
          <div className="flex gap-2">
            <button className="btn btn-secondary btn-sm">
              <span className="material-icons-outlined" style={{ fontSize: 16 }}>table_chart</span>
              Export CSV
            </button>
            <button className="btn btn-secondary btn-sm">
              <span className="material-icons-outlined" style={{ fontSize: 16 }}>picture_as_pdf</span>
              Export PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
