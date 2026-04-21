export default function Card({ title, value }) {
  return (
    <div className="bg-blue-500 text-white p-4 rounded-xl">
      <p>{title}</p>
      <h2>{value}</h2>
    </div>
  );
}
