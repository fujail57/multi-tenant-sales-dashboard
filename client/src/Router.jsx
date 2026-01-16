import { createBrowserRouter, RouterProvider } from "react-router-dom";
// :::: COMMON ::::
import { PageNotFound } from "./components/PageNotFound";
import { ProtectedRoute } from "./authConfig/ProtectedRoute";
import { TenantRegister } from "./tenantAuth/register/TenantRegister";
import { TenantLogin } from "./tenantAuth/login/TenantLogin";
import { UserRegister } from "./userAuth/register/UserRegister";
import { UserLogin } from "./userAuth/login/UserLogin";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { AddLeads } from "./modules/leads/AddLead";
import { ViewLeads } from "./modules/leads/ViewLeads";
import { EditLead } from "./modules/leads/EditLead";
import { PublicLayout } from "./layout/PublicLayout";
import { Unauthorized } from "./components/Unauthorized";
import { RoleBasedCallLogs } from "./authConfig/RoleBasedCallLogs";
import { RoleBasesLeads } from "./authConfig/RoleBasesLeads";
import { LeadList } from "./modules/leads/LeadList";
import { MyLeadList } from "./modules/leads/MyLeadList";
import { CallLogList } from "./modules/callLogs/CallLogList";
import { AddCallLogs } from "./modules/callLogs/AddCallLogs";
import { AdminAgentLayout } from "./layout/AdminAgentLayout";
import { AdminLayout } from "./layout/AdminLayout";
import { AgentLayout } from "./layout/AgentLayout";

// ::::::::::::::::::::::::::::::::: ROUTER :::::::::::::::::::::::::::::::

const routes = createBrowserRouter([
  // :::: Public Route ::::
  {
    element: <PublicLayout />,
    children: [
      { path: "/tenant-register", element: <TenantRegister /> },
      { path: "/tenant-login", element: <TenantLogin /> },
      { path: "/user-register", element: <UserRegister /> },
      { path: "/user-login", element: <UserLogin /> },
      { path: "/unauthorized", element: <Unauthorized /> },

      // :::
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
    ],
  },

  // ::::::::admin / agent :::::::::::::
  {
    element: <ProtectedRoute allowedRoles={["admin", "agent"]} />,
    children: [
      {
        element: <AdminAgentLayout />,
        children: [
          { path: "/lead/view/:id", element: <ViewLeads /> },
          { path: "/call-logs", element: <CallLogList /> },
          { path: "/leads", element: <LeadList /> },
        ],
      },
    ],
  },

  // ::::::::admin :::::::::::::
  {
    element: <ProtectedRoute allowedRoles={["admin"]} />,
    children: [
      {
        element: <AdminLayout />,
        children: [
          { path: "/call-logs/add", element: <AddCallLogs /> },
          { path: "/lead/add", element: <AddLeads /> },
          { path: "/lead/edit/:id", element: <EditLead /> },
        ],
      },
    ],
  },

  // :::::::: agent :::::::::::::
  // :::::: Use it later if needed
  // {
  //   element: <ProtectedRoute allowedRoles={["agent"]} />,
  //   children: [
  //     {
  //       element: <AgentLayout />,
  //       children: [
  //         { path: "/call-logs", element: <CallLogList /> },
  //         { path: "/leads", element: <LeadList /> },
  //         { path: "/leads", element: <RoleBasesLeads /> },
  //       ],
  //     },
  //   ],
  // },

  // :::: COMMON ::::
  { path: "*", element: <PageNotFound /> },
]);

export const Router = () => {
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
};
