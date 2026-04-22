 import { db } from "../db/db";

export const getReport = async () => {
  const rents = await db.rents.toArray();

  const total = rents.reduce((sum, r) => sum + r.total, 0);

  const pending = rents.filter(r => r.status === "pending").length;

  const monthly = rents.reduce((acc, r) => {
    const m = r.month;
    if (!acc[m]) acc[m] = 0;
    acc[m] += r.total;
    return acc;
  }, {});

  const chartData = Object.keys(monthly).map(key => ({
    month: key,
    amount: monthly[key]
  }));

  return { total, pending, chartData };
};
