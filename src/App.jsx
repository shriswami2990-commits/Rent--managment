import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Tenants from "./pages/Tenants";
import TenantForm from "./pages/TenantForm";
import RentEntry from "./pages/RentEntry";
import Reports from "./pages/Reports";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/tenants" element={<Tenants />} />
        <Route path="/add-tenant" element={<TenantForm />} />
        <Route path="/rent" element={<RentEntry />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
      <Navbar />
    </BrowserRouter>
  );
}
