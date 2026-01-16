import { CallLogList } from "../modules/callLogs/CallLogList";
import { MyCallLogs } from "../modules/callLogs/MyCallLogs";
import { useAuth } from "./AuthContext";

export const RoleBasedCallLogs = () => {
  const { auth } = useAuth();

  // admin → MyCallLogs
  if (auth?.role === "admin") {
    return <MyCallLogs />;
  }

  // agent or undefined → CallLogs
  return <CallLogList />;
};
