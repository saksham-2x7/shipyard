export default function Loading() {
  return (
    <main className="container" aria-busy="true" aria-live="polite">
      <div className="state-container">
        <div className="state-spinner" aria-hidden="true" />
        <h2 className="state-title">Loading ShipYard…</h2>
        <p className="state-desc">Preparing catalog items and product gear.</p>
        <div className="skeleton-grid" aria-hidden="true">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="skeleton-card">
              <div className="skeleton-art" />
              <div className="skeleton-body">
                <div className="skeleton-line skeleton-tag" />
                <div className="skeleton-line skeleton-title" />
                <div className="skeleton-line skeleton-text" />
                <div className="skeleton-line skeleton-price" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
