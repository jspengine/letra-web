const problems = [
  {
    icon: "🎯",
    title: "Agentes sem supervisão",
    desc: "IA gera código sem contexto, sem aprovação, sem rastro. Você descobre problemas depois, quando já está em produção.",
  },
  {
    icon: "🔗",
    title: "Handoffs quebrados",
    desc: "Cada agente trabalha isolado. Não há coordenação entre etapas do desenvolvimento. O que um fez o outro desfaz.",
  },
  {
    icon: "👁️",
    title: "Falta de visibilidade",
    desc: "Não sabe o que está acontecendo, quem está fazendo, nem quando vai terminar. O progresso é uma caixa preta.",
  },
];

export default function Problem() {
  return (
    <section className="section" id="problem">
      <div className="container">
        <div style={{ marginBottom: 48 }}>
          <span className="section-label">O Problema</span>
          <h2 className="section-title">Engenharia com IA ainda é um caos</h2>
          <p className="section-subtitle">
            Ferramentas de IA prometem velocidade, mas sem coordenação você ganha
            velocidade no erro certo.
          </p>
        </div>
        <div className="grid-3">
          {problems.map((p) => (
            <div className="card" key={p.title}>
              <div className="card-icon">{p.icon}</div>
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
