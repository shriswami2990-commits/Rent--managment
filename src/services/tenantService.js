import { db } from "../db/db";

export const addTenant = async (data) => {
  return db.tenants.add(data);
};

export const getTenants = async () => {
  return db.tenants.toArray();
};
