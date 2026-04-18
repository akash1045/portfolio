import React, { useState, useEffect } from "react";

const links = ["About", "Skills", "Experience", "Projects", "Awards", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNav = (section) => {
    setMenuOpen(false);
    const el = document.getElementById(section.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        .navbar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 200;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 clamp(1.25rem, 5vw, 3rem);
          transition: background 0.3s, border-color 0.3s, backdrop-filter 0.3s;
        }
        .navbar.scrolled {
          background: rgba(10,10,15,0.94);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }
        .nav-logo {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: clamp(0.95rem, 2vw, 1.1rem);
          letter-spacing: -0.01em;
          flex-shrink: 0;
          cursor: pointer;
          z-index: 201;
        }
        .nav-desktop {
          display: flex;
          align-items: center;
          gap: clamp(1rem, 2vw, 2rem);
        }
        .nav-link {
          background: none;
          border: none;
          color: var(--muted);
          font-family: var(--font-body);
          font-size: clamp(0.78rem, 1.1vw, 0.875rem);
          cursor: pointer;
          transition: color 0.2s;
          padding: 4px 0;
          white-space: nowrap;
        }
        .nav-link:hover { color: var(--accent); }
        .nav-hire {
          background: var(--accent);
          color: #000;
          padding: 6px 18px;
          border-radius: 99px;
          font-size: clamp(0.72rem, 1vw, 0.82rem);
          font-weight: 700;
          font-family: var(--font-display);
          letter-spacing: 0.02em;
          text-decoration: none;
          transition: opacity 0.2s;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .nav-hire:hover { opacity: 0.82; }
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          z-index: 201;
        }
        .ham-line {
          display: block;
          width: 22px;
          height: 2px;
          background: var(--text);
          border-radius: 2px;
          transition: all 0.28s ease;
        }
        .mobile-menu {
          position: fixed;
          inset: 0;
          z-index: 199;
          background: rgba(10,10,15,0.98);
          backdrop-filter: blur(20px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.25rem;
          padding: 2rem;
        }
        .mobile-link {
          background: none;
          border: none;
          color: var(--text);
          font-family: var(--font-display);
          font-size: clamp(1.6rem, 8vw, 2.5rem);
          font-weight: 700;
          cursor: pointer;
          padding: 0.6rem 1rem;
          letter-spacing: -0.02em;
          transition: color 0.2s;
          width: 100%;
          text-align: center;
        }
        .mobile-link:hover { color: var(--accent); }

        @media (max-width: 768px) {
          .nav-desktop { display: none; }
          .hamburger { display: flex; }
        }

        /* Hide some nav links on smaller laptops to prevent overflow */
        @media (max-width: 1024px) and (min-width: 769px) {
          .nav-link { font-size: 0.78rem; }
          .nav-desktop { gap: 1rem; }
        }
      `}</style>

      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <div className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <span style={{ color: "var(--accent)" }}>AC</span>
          <span style={{ color: "var(--muted)", fontSize: "0.8em", marginLeft: 6, fontWeight: 400 }}>Dev</span>
        </div>

        {/* Desktop */}
        <div className="nav-desktop">
          {links.map(l => (
            <button key={l} className="nav-link" onClick={() => handleNav(l)}>{l}</button>
          ))}
          <a href="mailto:chavanak870@gmail.com" className="nav-hire">Hire Me</a>
        </div>

        {/* Hamburger */}
        <button className="hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
          <span className="ham-line" style={{ transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
          <span className="ham-line" style={{ opacity: menuOpen ? 0 : 1 }} />
          <span className="ham-line" style={{ transform: menuOpen ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
        </button>
      </nav>

      {/* Mobile overlay menu */}
      {menuOpen && (
        <div className="mobile-menu">
          {links.map(l => (
            <button key={l} className="mobile-link" onClick={() => handleNav(l)}>{l}</button>
          ))}
          <a href="mailto:chavanak870@gmail.com" style={{
            marginTop: "1.5rem",
            background: "var(--accent)", color: "#000",
            padding: "12px 36px", borderRadius: 99,
            fontFamily: "var(--font-display)", fontWeight: 700,
            fontSize: "1rem", textDecoration: "none",
          }}>Hire Me</a>
        </div>
      )}
    </>
  );
}
