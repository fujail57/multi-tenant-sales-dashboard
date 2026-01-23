import React from "react";

export const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About Our Sales Dashboard
          </h1>
          <p className="text-lg text-gray-600">
            A powerful multi-tenant platform designed to simplify lead
            management and boost sales team productivity.
          </p>
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            What We Do
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our multi-tenant sales dashboard enables organizations to manage
            leads, track call logs, and empower sales agents with the tools they
            need to close deals efficiently. Each organization operates in a
            secure, isolated environment while benefiting from a centralized and
            scalable system.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Organization Management
            </h3>
            <p className="text-gray-600">
              Easily register and manage multiple organizations with complete
              data isolation and role-based access control.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Lead & Call Tracking
            </h3>
            <p className="text-gray-600">
              Capture leads, maintain call logs, and keep a complete interaction
              history to improve follow-ups and conversions.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Agent Access & Login
            </h3>
            <p className="text-gray-600">
              Sales agents can securely log in, access assigned leads, and
              update call outcomes in real time.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Scalable & Secure
            </h3>
            <p className="text-gray-600">
              Built with scalability and security in mind, making it suitable
              for startups as well as growing sales teams.
            </p>
          </div>
        </div>

        {/* Audience */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Who It’s For
          </h2>
          <p className="text-gray-600 leading-relaxed">
            This platform is ideal for sales-driven organizations, call centers,
            and agencies that need a reliable system to manage leads, monitor
            agent performance, and streamline daily sales operations.
          </p>
        </div>

        {/* Mission */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Our Mission
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our mission is to simplify sales workflows by providing a modern,
            intuitive, and efficient dashboard that helps teams focus on what
            matters most — closing deals and building relationships.
          </p>
        </div>
      </div>
    </div>
  );
};
