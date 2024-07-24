import { useEffect, useState } from "react";
import SignIn from "./components/auth/Login";
import { Route, Routes } from "react-router-dom";
import ForgotPassword from "./components/auth/ForgotPassword";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./components/global/Topbar";
import SideBar from "./components/global/Sidebar";
import Dashboard from "./components/dashboard";
import { ColorModeContext, useMode } from "./theme";
import Restaurants from "./components/restaurants";
import Orders from "./components/orders";
import Invoice from "./components/billing";

function App() {
  const [theme, colorMode] = useMode();
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [loginDetails, setLoginDetails] = useState();

  let authDetails = localStorage.getItem("authDetails");

  useEffect(() => {
    if (authDetails) {
      setLoginDetails(JSON.parse(authDetails));
      setIsLogin(true);
    }
  }, [authDetails]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {isLogin && <SideBar loginDetails={loginDetails} />}
          <main className="content">
            {isLogin && <Topbar setIsLogin={setIsLogin} />}
            <Routes>
              <Route path="/forgotPassword" element={<ForgotPassword />} />
              <Route path="/" element={<SignIn setIsLogin={setIsLogin} />} />
              <Route path="/dashboard" element={isLogin && <Dashboard />} />
              <Route path="/restaurants" element={isLogin && <Restaurants />} />
              <Route path="/orders" element={isLogin && <Orders />} />
              <Route path="/invoices" element={isLogin && <Invoice />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
