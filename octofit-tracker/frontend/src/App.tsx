const metrics = [
  { label: 'Frontend', value: '5173' },
  { label: 'Backend', value: '8000' },
  { label: 'MongoDB', value: '27017' }
];

export default function App() {
  return (
    <main className="app-shell">
      <section className="overview">
        <p className="eyebrow">OctoFit Tracker</p>
        <h1>Modern fitness tracking across the full stack.</h1>
        <p className="intro">
          React 19, Vite, Express, TypeScript, and MongoDB are ready for the
          first workout workflow.
        </p>
        <div className="metric-grid" aria-label="Application ports">
          {metrics.map((metric) => (
            <div className="metric" key={metric.label}>
              <span>{metric.label}</span>
              <strong>{metric.value}</strong>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
