import { LeadList } from "../modules/leads/LeadList";
import { MyLeadList } from "../modules/leads/MyLeadList";
import { useAuth } from "./AuthContext";

export const RoleBasesLeads = () => {
  const { auth } = useAuth();

  // admin → MyLeadList
  if (auth?.role === "admin") {
    return <MyLeadList />;
  }

  // agent or undefined → LeadList
  return <LeadList />;
};
