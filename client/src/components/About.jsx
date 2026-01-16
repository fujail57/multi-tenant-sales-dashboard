import React from "react";

export const About = () => {
  return (
    <div className="flex justify-center items-center min-h-[60vh] px-4">
      <div className="w-full max-w-3xl border border-gray-300 rounded-lg p-6 shadow-sm">
        <h1 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
          About This Project
        </h1>

        <p className="text-gray-700 leading-relaxed mb-4">
          This application is a frontend demonstration of a multi-tenant sales
          dashboard. It simulates a SaaS platform where multiple organizations
          share the same application while maintaining isolated data and
          role-based access.
        </p>

        <p className="text-gray-700 leading-relaxed">
          The project focuses on frontend architecture, modular design, tenant
          isolation, and role-based access control rather than feature
          completeness.
        </p>
      </div>
    </div>
  );
};
