import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import Demo from "./components/Demo";
import Waitlist from "./components/Waitlist";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <header style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "16px 0",
        background: "rgba(15, 17, 21, 0.8)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
      }}>
        <div className="container" style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
          <a href="/" style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            textDecoration: "none",
          }}>
            <img
              src="/brand/logos/svg/letra-symbol.svg"
              alt="Letra"
              style={{ width: 28, height: 28, opacity: 0.8 }}
            />
            <span style={{
              fontFamily: "var(--font-brand)",
              fontSize: 18,
              fontWeight: 600,
              color: "var(--brand-text)",
            }}>
              letra
            </span>
          </a>
          <nav style={{ display: "flex", gap: 24, alignItems: "center" }}>
            <a href="#problem" style={linkStyle}>Problem</a>
            <a href="#solution" style={linkStyle}>Solution</a>
            <a href="#demo" style={linkStyle}>Demo</a>
            <a href="/brand/" style={linkStyle}>Brand</a>
            <a href="/docs/" style={linkStyle}>Docs</a>
            <a href="/blog/" style={linkStyle}>Blog</a>
            <a href="#waitlist" className="btn btn-primary" style={{ padding: "8px 20px", fontSize: 13 }}>
              Join waitlist
            </a>
          </nav>
        </div>
      </header>
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Demo />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}

const linkStyle = {
  color: "var(--brand-text-muted)",
  textDecoration: "none",
  fontSize: 14,
  fontWeight: 500,
  transition: "color 0.2s",
};
