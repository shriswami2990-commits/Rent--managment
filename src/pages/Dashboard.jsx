import { useEffect, useState } from "react";
import { getTenants } from "../services/tenantService";

export default function Dashboard() {
  const [tenants, setTenants] = useState([]);

  useEffect(() => {
    getTenants().then(setTenants);
  }, []);

  return (
    <div className="p-4 pb-20">
      <h1 className="text-xl font-bold">🏠 Dashboard</h1>

      <div className="grid grid-cols-2 gap-3 mt-3">
        <div className="card bg-blue-500 text-white">
          Tenants: {tenants.length}
        </div>

        <div className="card bg-green-500 text-white">
          Active Rooms
        </div>
      </div>
    </div>
  );
}
