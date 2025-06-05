import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  PieChart, Pie, Cell, ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'Jan', users: 400 },
  { name: 'Feb', users: 300 },
  { name: 'Mar', users: 500 },
  { name: 'Apr', users: 200 },
];

const pieData = [
  { name: 'Admin', value: 4 },
  { name: 'Editor', value: 6 },
  { name: 'User', value: 10 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

export default function Charts() {
  return (
    <div className="p-4 space-y-8 w-full max-w-4xl mx-auto">

      <h2 className="text-3xl font-bold text-center mb-6">User Analytics</h2>

      {/* Bar Chart Container */}
      <div style={{ width: '100%', height: 300, backgroundColor: '#f9fafb' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="users" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart Container */}
      <div style={{ width: '100%', height: 300, backgroundColor: '#f9fafb' }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx={150}  // fixed number instead of '50%'
              cy={150}  // fixed number instead of '50%'
              outerRadius={80}
              fill="#8884d8"
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
