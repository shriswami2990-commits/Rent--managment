import { useEffect, useState } from "react";
import { getTenants } from "../services/tenantService";
import { generateRent } from "../services/rentService";
import { sendWhatsApp } from "../services/whatsappService";

export default function RentEntry() {
  const [tenants, setTenants] = useState([]);

  useEffect(() => {
    getTenants().then(setTenants);
  }, []);

  const handleGenerate = async (tenant, unit) => {
    const rent = await generateRent(tenant, Number(unit));
    alert(`Total Rent: ₹${rent.total}`);
  };

  return (
    <div className="p-4 pb-20">
      <h1 className="text-xl font-bold">💰 Rent Entry</h1>

      {tenants.map((t) => (
        <div key={t.id} className="card">
          <h2>{t.name} (Room {t.room})</h2>

          <input
            placeholder="Enter Current Unit"
            className="input"
            onChange={(e) => (t.currentUnit = e.target.value)}
          />

          <button
  onClick={async () => {
    const rent = await handleGenerate(t, t.currentUnit);
    sendWhatsApp(t, rent);
  }}
  className="btn bg-green-500"
>
  Generate & Send WhatsApp
</button>
      
        </div>
      ))}
    </div>
  );
}
