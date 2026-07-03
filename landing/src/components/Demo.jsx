const steps = [
  "Criação de workspace em 30 segundos",
  "Definição de flow com gates de aprovação",
  "Execução de agentes com supervisão",
  "Aprovação humana em tempo real",
  "Entrega com evidências verificáveis",
];

export default function Demo() {
  return (
    <section className="section" id="demo">
      <div className="container">
        <div style={{ marginBottom: 48 }}>
          <span className="section-label">Demo</span>
          <h2 className="section-title">Veja como funciona</h2>
          <p className="section-subtitle">
            Em menos de 2 minutos você entende como o Letra transforma intenção
            em software com coordenação e controle.
          </p>
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          gap: 40,
          alignItems: "center",
        }}>
          <div style={{
            background: "rgba(23, 26, 33, 0.72)",
            border: "1px solid rgba(255, 255, 255, 0.06)",
            borderRadius: "var(--radius-lg)",
            padding: 32,
            position: "relative",
            minHeight: 320,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <div style={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              background: "var(--brand-primary)",
              opacity: 0.15,
              position: "absolute",
            }} />
            <img
              src="/brand/logos/svg/letra-symbol.svg"
              alt="Letra"
              style={{ width: 48, height: 48, marginBottom: 16, opacity: 0.4 }}
            />
            <p style={{ color: "var(--brand-text-muted)", fontSize: 14 }}>
              Video demo (60s)
            </p>
            <p style={{ color: "var(--brand-text-muted)", fontSize: 12, marginTop: 8 }}>
              Screencast do produto em ação
            </p>
          </div>
          <div>
            <h4 style={{
              fontFamily: "var(--font-ui)",
              fontSize: 16,
              fontWeight: 600,
              marginBottom: 20,
            }}>
              O que você vai ver:
            </h4>
            <ul style={{ listStyle: "none" }}>
              {steps.map((step) => (
                <li
                  key={step}
                  style={{
                    padding: "10px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                    fontSize: 14,
                    color: "var(--brand-text-muted)",
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <span style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "var(--brand-primary)",
                    flexShrink: 0,
                  }} />
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
