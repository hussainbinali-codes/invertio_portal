const columns = ['Data First', 'Prospect', 'Lead', 'Client', 'Customer'];

export function PipelinePage() {
  return (
    <section>
      <h2>Marketing Pipeline</h2>
      <div className="kanban">
        {columns.map((column) => (
          <div className="kanban-col" key={column}>
            <h4>{column}</h4>
            <article className="card mini"><strong>Invertio Prospect</strong><p>Budget: ₹8,00,000</p></article>
          </div>
        ))}
      </div>
    </section>
  );
}
