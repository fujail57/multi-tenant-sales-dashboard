import { createBrowserRouter, RouterProvider } from "react-router-dom";
// layouts

// :::: COMMON ::::
import { PageNotFound } from "./components/PageNotFound";
// import { ProtectedRoute } from "./auth/ProtectedRoute";
import { TenantRegister } from "./tenantAuth/register/TenantRegister";
import { TenantLogin } from "./tenantAuth/login/TenantLogin";
import { UserRegister } from "./userAuth/register/UserRegister";
import { UserLogin } from "./userAuth/login/UserLogin";
import { PublicLayout } from "./components/PublicLayout";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { CallLogList } from "./modules/callLogs/CallLogList";
import { LeadList } from "./modules/leads/LeadList";
import { AddLeads } from "./modules/leads/AddLead";
import { ViewLeads } from "./modules/leads/ViewLeads";
import { EditLead } from "./modules/leads/EditLead";

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

      // :::
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      // :: Call Logs
      { path: "/call-logs", element: <CallLogList /> },
      // :::: Leads
      { path: "/leads", element: <LeadList /> },
      { path: "/lead/add", element: <AddLeads /> },
      { path: "/lead/view/:id", element: <ViewLeads /> },
      { path: "/lead/edit/:id", element: <EditLead /> },
    ],
  },

  // :::: FACTORY ::::

  // ::::::::admin :::::::::::::
  // {
  //   element: <ProtectedRoute allowedRoles={["admin"]} />,
  //   children: [
  //     {
  //       path: "admin",
  //       element: <FactoryLayout />,
  //       children: [
  //         { path: "store", element: <AddOrder /> },
  //         { path: "store", element: <AddOrder /> },
  //       ],
  //     },
  //   ],
  // },

  // ::::::::agent :::::::::::::
  // {
  //   element: <ProtectedRoute allowedRoles={["admin", "agent"]} />,
  //   children: [
  //     {
  //       path: "admin",
  //       element: <FactoryLayout />,
  //       children: [
  //         { path: "store", element: <AddOrder /> },
  //         { path: "store", element: <AddOrder /> },
  //       ],
  //     },
  //   ],
  // },

  // :::: USER- Public ::::
  // {
  //   path: "/user",
  //   element: <UserLayout />,
  //   children: [
  //     { path: "add-store", element: <AddStore /> },
  //     { path: "add-order", element: <AddOrder /> },
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
