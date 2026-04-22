import { useEffect, useState } from "react";
import { getReport } from "../services/reportService";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

export default function Reports() {
  const [data, setData] = useState({
    total: 0,
    pending: 0,
    chartData: []
  });

  useEffect(() => {
    getReport().then(setData);
  }, []);

  return (
    <div className="p-4 pb-20">
      <h1 className="text-xl font-bold">📊 Reports</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 gap-3 mt-3">
        <div className="card bg-green-500 text-white">
          Total: ₹{data.total}
        </div>
        <div className="card bg-red-500 text-white">
          Pending: {data.pending}
        </div>
      </div>

      {/* Chart */}
      <h2 className="mt-5 font-semibold">Monthly Collection</h2>

      <BarChart width={300} height={200} data={data.chartData}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="amount" />
      </BarChart>
    </div>
  );
}
