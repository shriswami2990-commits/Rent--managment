import { db } from "../db/db";
import dayjs from "dayjs";

export const generateRent = async (tenant, currentUnit) => {
  const used = currentUnit - tenant.previousUnit;
  const rent = used * tenant.unitRate;

  const total = rent + (tenant.maintenance || 0) + (tenant.extra || 0);

  const record = {
    tenantId: tenant.id,
    month: dayjs().format("YYYY-MM"),
    total,
    status: "pending"
  };

  await db.rents.add(record);

  await db.tenants.update(tenant.id, {
    previousUnit: currentUnit
  });

  return record;
};
