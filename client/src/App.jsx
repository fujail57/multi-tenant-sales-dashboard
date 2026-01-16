// import "./App.css";
import { AuthProvider } from "./authConfig/AuthContext";

import { Router } from "./Router";

function App() {
  return (
    <>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </>
  );
}

export default App;
