import React from "react";
import { SectionLabel, sectionTitle } from "./Skills";

export default function Experience({ experience }) {
  const exp = experience[0];
  return (
    <>
      <style>{`
        .exp-section {
          padding: clamp(2.5rem, 6vw, 5rem) clamp(1.25rem, 5vw, 4rem);
          background: var(--surface);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }
        .exp-card {
          background: var(--surface2);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: clamp(1.25rem, 3.5vw, 2.25rem);
          position: relative;
          overflow: hidden;
        }
        .exp-accent-bar {
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 4px;
          background: linear-gradient(to bottom, var(--accent), var(--accent2));
        }
        .exp-header {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }
        .exp-company {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: clamp(1rem, 2.2vw, 1.4rem);
          letter-spacing: -0.01em;
          line-height: 1.2;
        }
        .exp-role {
          color: var(--accent);
          font-weight: 600;
          font-size: clamp(0.78rem, 1.3vw, 0.9rem);
          margin-top: 3px;
          line-height: 1.4;
          word-break: break-word;
        }
        .exp-badge {
          display: inline-block;
          background: rgba(0,229,255,0.1);
          border: 1px solid rgba(0,229,255,0.2);
          border-radius: 99px;
          padding: 4px 13px;
          font-size: clamp(0.7rem, 1.1vw, 0.8rem);
          color: var(--accent);
          font-weight: 600;
          white-space: nowrap;
        }
        .exp-loc {
          color: var(--muted);
          font-size: clamp(0.7rem, 1vw, 0.78rem);
          margin-top: 5px;
        }
        .exp-highlights {
          display: flex;
          flex-direction: column;
          gap: 0.7rem;
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .exp-hl {
          display: flex;
          gap: 0.65rem;
          align-items: flex-start;
        }
        .hl-arrow {
          color: var(--accent);
          font-size: 0.75rem;
          margin-top: 3px;
          flex-shrink: 0;
        }
        .hl-text {
          font-size: clamp(0.8rem, 1.3vw, 0.92rem);
          color: var(--muted);
          line-height: 1.65;
        }
        @media (max-width: 480px) {
          .exp-header { flex-direction: column; }
          .exp-right { text-align: left !important; }
        }
      `}</style>

      <section className="exp-section" id="experience">
        <SectionLabel text="Career" />
        <h2 style={sectionTitle}>Work Experience</h2>

        <div className="exp-card">
          <div className="exp-accent-bar" />
          <div className="exp-header">
            <div>
              <div className="exp-company">{exp.company}</div>
              <div className="exp-role">{exp.role}</div>
            </div>
            <div className="exp-right" style={{ textAlign: "right" }}>
              <div className="exp-badge">{exp.period}</div>
              <div className="exp-loc">📍 {exp.location}</div>
            </div>
          </div>

          <ul className="exp-highlights">
            {exp.highlights.map((h, i) => (
              <li key={i} className="exp-hl">
                <span className="hl-arrow">▸</span>
                <span className="hl-text" dangerouslySetInnerHTML={{ __html: highlightMetrics(h) }} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

function highlightMetrics(text) {
  return text.replace(/(\d[\d,]*\.?\d*[%+x]?(?:\s*(?:hours?|months?|years?|K\+|M\+))?)/g,
    '<strong style="color:var(--accent3)">$1</strong>');
}
