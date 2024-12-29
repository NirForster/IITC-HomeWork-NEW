import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import BusinessDetail from "./pages/BusinessDetail";
import Account from "./pages/Account";
import Businesses from "./pages/Businesses";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/business/:id" element={<BusinessDetail />} />
        <Route path="/businesses" element={<Businesses />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
