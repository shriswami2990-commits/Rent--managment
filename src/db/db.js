import Dexie from "dexie";

export const db = new Dexie("RentManagerDB");

db.version(1).stores({
  tenants: "++id,name,mobile,room,previousUnit,unitRate",
  rents: "++id,tenantId,month,total,status"
});
