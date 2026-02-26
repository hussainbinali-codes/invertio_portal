export function StatCard({ title, value, delta }: { title: string; value: string; delta: string }) {
  return (
    <article className="card stat-card">
      <h3>{title}</h3>
      <p>{value}</p>
      <span>{delta}</span>
    </article>
  );
}
