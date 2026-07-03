const columns = [
  {
    title: "Produto",
    links: [
      { label: "Features", href: "/#solution" },
      { label: "Roadmap", href: "/blog/" },
      { label: "Brand", href: "/brand/" },
      { label: "Changelog", href: "/blog/" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { label: "Documentação", href: "/docs/" },
      { label: "API Reference", href: "/docs/#cli" },
      { label: "Tutorials", href: "/docs/#quickstart" },
      { label: "Brand Guidelines", href: "/brand/" },
    ],
  },
  {
    title: "Comunidade",
    links: [
      { label: "Discord", href: "https://discord.gg/letra" },
      { label: "GitHub", href: "https://github.com/letra" },
      { label: "Twitter", href: "https://twitter.com/letra" },
      { label: "LinkedIn", href: "https://linkedin.com/company/letra" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Contact", href: "mailto:hello@letra.dev" },
      { label: "Status", href: "https://status.letra.dev" },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ padding: "60px 0 40px" }}>
      <div className="container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 40,
        }}>
          {columns.map((col) => (
            <div key={col.title}>
              <h5 style={{
                fontSize: 12,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--brand-text-muted)",
                marginBottom: 16,
              }}>
                {col.title}
              </h5>
              <ul style={{ listStyle: "none" }}>
                {col.links.map((link) => (
                  <li key={link.label} style={{ marginBottom: 8 }}>
                    <a
                      href={link.href}
                      style={{
                        color: "var(--brand-text-muted)",
                        textDecoration: "none",
                        fontSize: 14,
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) => e.target.style.color = "var(--brand-text)"}
                      onMouseLeave={(e) => e.target.style.color = "var(--brand-text-muted)"}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{
          marginTop: 40,
          paddingTop: 24,
          borderTop: "1px solid rgba(255, 255, 255, 0.06)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <img
              src="/brand/logos/svg/letra-symbol.svg"
              alt="Letra"
              style={{ width: 24, height: 24, opacity: 0.4 }}
            />
            <span style={{
              fontFamily: "var(--font-brand)",
              fontSize: 16,
              fontWeight: 600,
              color: "var(--brand-text-muted)",
            }}>
              letra
            </span>
          </div>
          <p style={{
            fontSize: 12,
            color: "var(--brand-text-muted)",
            opacity: 0.6,
          }}>
            &copy; {new Date().getFullYear()} Letra. Da intenção à entrega.
          </p>
        </div>
      </div>
    </footer>
  );
}
