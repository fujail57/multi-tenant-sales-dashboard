import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useAuth } from "../authConfig/AuthContext";

export const AdminAgentLayout = () => {
  const { auth } = useAuth();
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="w-full">
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-4xl text-center">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Welcome to {auth.role === "agent" ? "Agent" : "Admin"} dashboard
          </h2>

          <Outlet />
        </div>
      </main>
    </div>
  );
};
