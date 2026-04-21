import { useEffect, useState } from "react";
import { getTenants } from "../services/tenantService";

export default function Tenants() {
  const [tenants, setTenants] = useState([]);

  useEffect(() => {
    getTenants().then(setTenants);
  }, []);

  return (
    <div className="p-4">
      <h1>Tenants</h1>
      {tenants.map(t => (
        <div key={t.id}>{t.name}</div>
      ))}
    </div>
  );
}
