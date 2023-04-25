import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import routes from "./Routes/routes";
import Login from "./pages/LoginPage";
import Registration from "./pages/RegistrationPage";
import RouteGuard from "./hooks/auth/RouteGuard";
import Home from "./pages/HomePage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<RouteGuard>{route.element}</RouteGuard>}
          />
        ))}

        <Route exact path={"/"} element={<Login />} />
        <Route exact path={"/Login"} element={<Login />} />
        <Route path={"/Registration"} element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
