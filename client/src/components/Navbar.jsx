import { Link } from "react-router-dom";
import { useAuth } from "../authConfig/AuthContext";

const Navbar = () => {
  const {auth} = useAuth()
  return (
    <nav className="w-full h-16 bg-white border-b border-gray-200 flex items-center justify-between px-10">
      {/* Logo / Brand */}
      <div className="text-lg font-semibold text-gray-800">
        Multi-Tenant-Sales
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-8 text-sm font-medium text-gray-700">
        <Link to="/" className="hover:text-black transition">
          Home
        </Link>
        <Link to="/about" className="hover:text-black transition">
          About
        </Link>
        <Link to="/call-logs" className="hover:text-black transition">
          Call Logs
        </Link>
        {/* :::: */}

        {/* {auth?.role === "admin" && (
          <Link to="/my-call-logs" className="hover:text-black transition">
            My Call Logs
          </Link>
        )}

        {auth?.role === "agent" && (
          <Link to="/call-logs" className="hover:text-black transition">
            Call Logs
          </Link>
        )} */}

        <Link to="/leads" className="hover:text-black transition">
          Leads
        </Link>
        <Link to="/user-login" className="hover:text-black transition">
          User Login
        </Link>
        <Link to="/tenant-login" className="hover:text-black transition">
          Admin Login
        </Link>
        <Link
          to="/user-register"
          className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition"
        >
          User Signup
        </Link>
        <Link
          to="/tenant-register"
          className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition"
        >
          Admin Signup
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
