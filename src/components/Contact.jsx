

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { SectionLabel, sectionTitle } from "./Skills";

export default function Contact({ contact }) {
  const [copiedIndex, setCopiedIndex] = useState(null);
  const magnetRefs = useRef([]);

  const items = [
    { icon: "✉", label: "Email", value: contact.email, href: `mailto:${contact.email}`, copy: true },
    { icon: "📞", label: "Phone", value: contact.phone, href: `tel:${contact.phone}` },
    { icon: "in", label: "LinkedIn", value: contact.linkedin, href: contact.linkedinUrl, external: true },
    { icon: "📍", label: "Location", value: contact.location },
  ];

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleMouseMove = (e, i) => {
    const el = magnetRefs.current[i];
    if (!el) return;

    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) * 0.08;
    const y = (e.clientY - r.top - r.height / 2) * 0.08;

    el.style.transform = `translate(${x}px, ${y}px)`;
    el.style.setProperty("--x", `${e.clientX - r.left}px`);
    el.style.setProperty("--y", `${e.clientY - r.top}px`);
  };

  const resetMagnet = (i) => {
    const el = magnetRefs.current[i];
    if (el) el.style.transform = "translate(0,0)";
  };

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <style>{`
        /* ===== SECTION ===== */
        .contact-section {
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
          padding: clamp(2rem, 5vw, 6rem) clamp(1rem, 5vw, 5rem);
        }

        /* ===== HEADER ===== */
        .contact-header {
          max-width: 900px;
          margin-bottom: clamp(1.5rem, 3vw, 2rem);
        }

        .contact-heading {
          margin-bottom: 0.5rem;
        }

        .contact-desc {
          color: var(--muted);
          font-size: clamp(0.9rem, 1.2vw, 1rem);
          line-height: 1.7;
          max-width: 700px;
        }

        /* ===== GRID ===== */
        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: clamp(1rem, 2vw, 1.8rem);
          margin-top: 1.5rem;
        }

        /* ===== CARD ===== */
        .contact-card {
          background: var(--surface2);
          border: 1px solid var(--border);
          border-radius: 18px;

          padding: clamp(1.4rem, 3vw, 2.5rem);

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          text-align: center;
          gap: 10px;

          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .contact-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(0,229,255,0.15), transparent 60%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .contact-card:hover::before {
          opacity: 1;
        }

        .contact-card:hover {
          transform: translateY(-6px);
          border-color: var(--accent);
          box-shadow: 0 12px 30px rgba(0,229,255,0.25);
        }

        /* ===== CONTENT ===== */
        .contact-icon {
          font-size: clamp(1.2rem, 2vw, 1.5rem);
        }

        .contact-lbl {
          font-size: 0.7rem;
          letter-spacing: 0.12em;
          color: var(--muted);
          text-transform: uppercase;
          font-weight: 700;
        }

        .contact-val {
          font-size: clamp(0.85rem, 1vw, 1rem);
          color: var(--text);
          text-decoration: none;

          word-break: break-word;
          max-width: 100%;
        }

        .contact-val:hover {
          color: var(--accent);
        }

        .contact-val--copied {
          color: var(--accent);
        }

        /* ===== CTA ===== */
        .contact-cta-row {
          margin-top: clamp(2rem, 4vw, 3rem);
          display: flex;
          justify-content: center;
        }

        .contact-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;

          padding: 12px 32px;
          border-radius: 999px;

          font-weight: 700;
          color: #fff;
          text-decoration: none;

          background: linear-gradient(135deg, var(--accent), var(--accent2));
          transition: all 0.3s ease;
          position: relative;
        }

        .contact-cta::after {
          content: "";
          position: absolute;
          inset: -2px;
          border-radius: inherit;
          background: linear-gradient(135deg, var(--accent), var(--accent2));
          filter: blur(12px);
          opacity: 0;
          transition: 0.3s;
          z-index: -1;
        }

        .contact-cta:hover::after {
          opacity: 1;
        }

        .contact-cta:hover {
          transform: scale(1.07);
        }

        /* ===== FOOTER ===== */
        .contact-footer {
          text-align: center;
          margin-top: clamp(2rem, 5vw, 4rem);
          font-size: 0.8rem;
          color: var(--muted);
        }

        /* ===== RESPONSIVE BREAKPOINTS ===== */

        /* Mobile */
        @media (max-width: 480px) {
          .contact-section {
            padding: 2rem 1rem;
          }

          .contact-grid {
            grid-template-columns: 1fr;
          }
        }

        /* Tablets */
        @media (min-width: 481px) and (max-width: 768px) {
          .contact-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* Large screens / TV */
        @media (min-width: 1600px) {
          .contact-section {
            max-width: 1800px;
          }

          .contact-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
      `}</style>

      <section className="contact-section" id="contact">
        <motion.div variants={container} initial="hidden" whileInView="show">

          <div className="contact-header">
            <SectionLabel text="Contact" />

            <motion.h2 style={sectionTitle} className="contact-heading" variants={fadeUp}>
              Let's Build Something
            </motion.h2>

            <motion.p className="contact-desc" variants={fadeUp}>
              Available for full-time roles and exciting fintech and enterprise projects.
              Let's connect and build scalable, high-performance systems together.
            </motion.p>
          </div>

          <motion.div className="contact-grid" variants={container}>
            {items.map((item, i) => (
              <motion.div
                key={i}
                ref={(el) => (magnetRefs.current[i] = el)}
                className="contact-card"
                variants={fadeUp}
                onMouseMove={(e) => handleMouseMove(e, i)}
                onMouseLeave={() => resetMagnet(i)}
                onClick={() => item.copy && handleCopy(item.value, i)}
              >
                <span className="contact-icon">{item.icon}</span>
                <span className="contact-lbl">{item.label}</span>

                {item.href ? (
                  <a
                    href={item.href}
                    className={`contact-val ${copiedIndex === i ? "contact-val--copied" : ""}`}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    onClick={(e) => {
                      if (item.copy) {
                        e.preventDefault();
                        handleCopy(item.value, i);
                      }
                    }}
                  >
                    {copiedIndex === i ? "✓ Copied!" : item.value}
                  </a>
                ) : (
                  <span className="contact-val">{item.value}</span>
                )}
              </motion.div>
            ))}
          </motion.div>

          <div className="contact-cta-row">
            <motion.a href={`mailto:${contact.email}`} className="contact-cta">
              ✉ Send Email
            </motion.a>
          </div>

          <motion.p className="contact-footer">
            Built with React · Designed to impress · © {new Date().getFullYear()} Akash Chavan
          </motion.p>

        </motion.div>
      </section>
    </>
  );
}