import { useAuth } from "../../authConfig/AuthContext";
import { LeadList } from "./LeadList";
import { MyLeadList } from "./MyLeadList";

export const LeadListPage = () => {
  const { auth } = useAuth();
  if (!auth) {
    return <Loading />;
  }
  return <div>{auth.role === "agent" ? <LeadList /> : <MyLeadList />}</div>;
};
