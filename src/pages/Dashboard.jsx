import Card from "../components/Card";

export default function Dashboard() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <Card title="Tenants" value="10" />
        <Card title="Revenue" value="₹50000" />
      </div>
    </div>
  );
}
