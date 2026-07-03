const solutions = [
  {
    icon: "🎮",
    title: "Orquestração de agentes",
    desc: "Conecte múltiplos agentes em fluxos coordenados com gates de aprovação humana entre cada etapa.",
  },
  {
    icon: "📊",
    title: "Supervisão em tempo real",
    desc: "Veja o que cada agente está fazendo, quando precisa da sua decisão, e o que foi entregue com evidências.",
  },
  {
    icon: "✅",
    title: "Entrega verificável",
    desc: "Cada etapa tem rastro. Cada decisão tem registro. Cada entrega tem validação. Nada é caixa preta.",
  },
];

export default function Solution() {
  return (
    <section className="section" id="solution">
      <div className="container">
        <div style={{ marginBottom: 48 }}>
          <span className="section-label">A Solução</span>
          <h2 className="section-title">Coordenação, não apenas automação</h2>
          <p className="section-subtitle">
            Letra é a camada operacional que conecta intenção humana, agentes de IA
            e entrega de software com supervisão em cada etapa.
          </p>
        </div>
        <div className="grid-3">
          {solutions.map((s) => (
            <div className="card" key={s.title}>
              <div className="card-icon">{s.icon}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
        <div style={{
          textAlign: "center",
          marginTop: 48,
          fontFamily: "var(--font-mono)",
          fontSize: 32,
          letterSpacing: 12,
          color: "var(--brand-primary)",
          opacity: 0.7,
        }}>
          ●──●──●──◆
        </div>
      </div>
    </section>
  );
}
