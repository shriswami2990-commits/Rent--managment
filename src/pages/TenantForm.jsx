import { useState } from "react";
import { addTenant } from "../services/tenantService";

export default function TenantForm() {
  const [form, setForm] = useState({});

  return (
    <div className="p-4">
      <input placeholder="Name" onChange={e=>setForm({...form,name:e.target.value})}/>
      <button onClick={()=>addTenant(form)}>Save</button>
    </div>
  );
}
