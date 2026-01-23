import React from "react";
import { useAuth } from "../../authConfig/AuthContext";
import { CallLogList } from "./CallLogList";
import { MyCallLogs } from "./MyCallLogs";
import { Loading } from "../../components/Loading";

export const CallLogPage = () => {
  const { auth } = useAuth();

  if (!auth) {
    return <Loading />;
  }

  return <div>{auth?.role === "agent" ? <CallLogList /> : <MyCallLogs />}</div>;
};
