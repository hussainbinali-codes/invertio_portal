import { StatCard } from '../components/StatCard';

export function DashboardPage() {
  return (
    <section>
      <h2>Executive Dashboard</h2>
      <div className="grid four">
        <StatCard title="Revenue" value="₹42.8L" delta="+12% QoQ" />
        <StatCard title="Active Projects" value="27" delta="5 due this week" />
        <StatCard title="Employees" value="93" delta="4 new joins" />
        <StatCard title="Pipeline" value="164 leads" delta="31 hot leads" />
      </div>
      <div className="grid two">
        <article className="card"><h3>Cash Flow Snapshot</h3><p>Inflow vs outflow trend chart area</p></article>
        <article className="card"><h3>Recent Activities</h3><ul><li>New client converted: Acme Ltd</li><li>Invoice INV-101 paid</li><li>Asset assigned to Rahul</li></ul></article>
      </div>
    </section>
  );
}
