export default function Hero() {
  return (
    <section className="section" style={{ paddingTop: 120 }}>
      <div className="container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 60,
          alignItems: "center",
        }}>
          <div>
            <span className="section-label">Letra</span>
            <h1 style={{
              fontFamily: "var(--font-brand)",
              fontSize: 52,
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: 20,
            }}>
              Da intenção<br />à entrega.
            </h1>
            <p style={{
              fontSize: 18,
              color: "var(--brand-text-muted)",
              lineHeight: 1.6,
              marginBottom: 32,
              maxWidth: 480,
            }}>
              Mission Control para engenharia assistida por IA.
              Orquestre agentes, supervise entregas, mantenha controle humano.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a href="#waitlist" className="btn btn-primary">
                Join waitlist
                <span>→</span>
              </a>
              <a href="#demo" className="btn btn-secondary">
                Ver demo
              </a>
            </div>
          </div>
          <div style={{
            background: "rgba(23, 26, 33, 0.72)",
            border: "1px solid rgba(255, 255, 255, 0.06)",
            borderRadius: "var(--radius-lg)",
            padding: 40,
            position: "relative",
            overflow: "hidden",
            minHeight: 360,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <div style={{ textAlign: "center" }}>
              <img
                src="/brand/logos/svg/letra-symbol.svg"
                alt="Letra symbol"
                style={{ width: 80, height: 80, marginBottom: 16, opacity: 0.6 }}
              />
              <div style={{
                fontFamily: "var(--font-mono)",
                fontSize: 28,
                letterSpacing: 8,
                color: "var(--brand-primary)",
                opacity: 0.8,
              }}>
                ●──●──●──◆
              </div>
              <p style={{
                marginTop: 16,
                fontSize: 13,
                color: "var(--brand-text-muted)",
              }}>
                Preview do produto
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
