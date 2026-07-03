export default function Waitlist() {
  return (
    <section className="section" id="waitlist" style={{
      background: "rgba(23, 26, 33, 0.5)",
      borderTop: "1px solid rgba(255, 255, 255, 0.06)",
      borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
    }}>
      <div className="container">
        <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto" }}>
          <span className="section-label">Early Access</span>
          <h2 className="section-title">Entre na lista de espera</h2>
          <p style={{
            fontSize: 16,
            color: "var(--brand-text-muted)",
            marginBottom: 32,
            lineHeight: 1.5,
          }}>
            Seja um dos primeiros a usar o Letra. Early access limitado para
            times que querem orquestrar agentes com controle humano real.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <input
              type="email"
              placeholder="seu@email.com"
              required
              style={{
                padding: "12px 20px",
                borderRadius: "var(--radius-sm)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                background: "rgba(0, 0, 0, 0.3)",
                color: "var(--brand-text)",
                fontFamily: "var(--font-ui)",
                fontSize: 15,
                minWidth: 280,
                outline: "none",
              }}
              onFocus={(e) => e.target.style.borderColor = "var(--brand-primary)"}
              onBlur={(e) => e.target.style.borderColor = "rgba(255, 255, 255, 0.15)"}
            />
            <button type="submit" className="btn btn-primary">
              Join waitlist
            </button>
          </form>
          <p style={{
            marginTop: 16,
            fontSize: 12,
            color: "var(--brand-text-muted)",
            opacity: 0.7,
          }}>
            No spam. Unsubscribe anytime. Early access invitations sent weekly.
          </p>
        </div>
      </div>
    </section>
  );
}
