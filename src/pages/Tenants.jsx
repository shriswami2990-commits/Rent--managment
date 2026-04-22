import { useEffect, useState } from "react";
import { getTenants } from "../services/tenantService";

export default function Tenants() {
  const [tenants, setTenants] = useState([]);

  useEffect(() => {
    getTenants().then(setTenants);
  }, []);

  return (
    <div className="p-4 pb-20">
      <h1 className="text-xl font-bold">👤 Tenants</h1>

      {tenants.map((t) => (
        <div key={t.id} className="card">
          <h2 className="font-bold">{t.name}</h2>
          <p>Room: {t.room}</p>
          <p>Mobile: {t.mobile}</p>
          <p>Rate: ₹{t.unitRate}</p>
        </div>
      ))}
    </div>
  );
}
