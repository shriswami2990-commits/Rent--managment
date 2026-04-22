import { useState } from "react";
import { addTenant } from "../services/tenantService";

export default function TenantForm() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    room: "",
    previousUnit: 0,
    unitRate: 0,
    maintenance: 0,
    extra: 0
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    await addTenant(form);
    alert("Tenant Added");
  };

  return (
    <div className="p-4 pb-20">
      <h1 className="text-xl font-bold mb-3">➕ Add Tenant</h1>

      <input name="name" placeholder="Name" className="input" onChange={handleChange}/>
      <input name="mobile" placeholder="Mobile" className="input" onChange={handleChange}/>
      <input name="room" placeholder="Room No" className="input" onChange={handleChange}/>

      <h2 className="mt-3 font-semibold">Rent Setup</h2>
      <input name="previousUnit" placeholder="Previous Unit" className="input" onChange={handleChange}/>
      <input name="unitRate" placeholder="Unit Rate" className="input" onChange={handleChange}/>
      <input name="maintenance" placeholder="Maintenance" className="input" onChange={handleChange}/>
      <input name="extra" placeholder="Extra Charges" className="input" onChange={handleChange}/>

      <button onClick={handleSubmit} className="btn">Save Tenant</button>
    </div>
  );
}
