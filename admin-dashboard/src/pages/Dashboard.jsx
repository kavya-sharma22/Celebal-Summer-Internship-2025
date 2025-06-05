import DataTable from "../DataTable"; // adjust path if needed

function Dashboard() {
  return (
    <section className="p-6">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Dashboard Overview</h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg max-w-xl mx-auto">
          This is your dashboard. You can customize it as per your requirements.
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
        <h3 className="text-2xl font-semibold mb-4 text-left text-gray-900 dark:text-white">User Management</h3>
        <DataTable />
      </div>
    </section>
  );
}

export default Dashboard;
