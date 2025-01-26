// Reusable Navbar Component
import { Link } from "react-router-dom";

const Navbar = () => {
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/register", label: "Register" },
    { to: "/login", label: "Login" },
    
  ];

  return (
    <header className="bg-gradient-to-r from-white-500 to-green-500 text-white py-6 shadow-md">
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-2xl sm:text-4xl font-bold text-black hover:text-white-200">
          Saylani Microfinance
        </Link>
        <nav className="flex flex-wrap gap-2 sm:gap-4">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="px-4 py-2 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

// Reusable Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-800 position-fixed text-white py-6 sm:py-8">
      <div className="w-full max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <p className="text-sm">&copy; {new Date().getFullYear()} Saylani Microfinance. All rights reserved.</p>
      </div>
    </footer>
  );
};

// Admin Dashboard Component
const AdminDashboard = () => {
  return (
    <div className="min-h-screen w-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Dashboard Content */}
      <main className="w-full max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-lg sm:text-xl font-bold text-blue-600 mb-4">User Management</h2>
            <p className="text-sm text-gray-700 mb-4">Manage users, approve or reject loan applications, and more.</p>
            <Link
              to="/admin/users"
              className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-700"
            >
              Manage Users
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-lg sm:text-xl font-bold text-blue-600 mb-4">Loan Applications</h2>
            <p className="text-sm text-gray-700 mb-4">Review and process loan applications submitted by users.</p>
            <Link
              to="/admin/loans"
              className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-700"
            >
              View Applications
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-lg sm:text-xl font-bold text-blue-600 mb-4">Reports</h2>
            <p className="text-sm text-gray-700 mb-4">Generate and view reports on loan performance and user activity.</p>
            <Link
              to="/admin/reports"
              className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-700"
            >
              Generate Reports
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AdminDashboard;
