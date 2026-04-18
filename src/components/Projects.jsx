

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categoryColors = {
  Languages: "var(--accent)",
  Frameworks: "var(--accent2)",
  Tools: "var(--accent3)",
  Databases: "#34d399",
  Concepts: "#f472b6",
};

export function SectionLabel({ text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        marginBottom: "0.75rem",
      }}
    >
      <span style={{ width: 22, height: 1, background: "var(--accent)" }} />
      <span
        style={{
          fontSize: "0.7rem",
          color: "var(--accent)",
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
        }}
      >
        {text}
      </span>
    </motion.div>
  );
}

export const sectionTitle = {
  fontFamily: "var(--font-display)",
  fontWeight: 800,
  fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)",
  letterSpacing: "-0.02em",
  marginBottom: "1.75rem",
  lineHeight: 1.1,
};

export default function Skills({ skills }) {
  const categories = Object.keys(skills || {});
  const [active, setActive] = useState(categories[0] || "");

  if (!skills || categories.length === 0) return null;

  return (
    <>
      <style>{`
        .skills-section {
          padding-top: clamp(2.5rem, 6vw, 5rem);
          padding-bottom: clamp(2.5rem, 6vw, 5rem);
          width: 100%;
          box-sizing: border-box;
        }

        .skill-tabs {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-bottom: 2rem;
        }

        .skill-tab {
          padding: 7px 18px;
          border-radius: 999px;
          border: 1px solid var(--border);
          font-family: var(--font-display);
          font-weight: 600;
          font-size: clamp(0.7rem, 1vw, 0.88rem);
          cursor: pointer;
          transition: all 0.25s ease;
          white-space: nowrap;
          background: transparent;
          line-height: 1;
        }

        .skill-tab:hover { transform: translateY(-2px); }

        /*
         * GRID: auto-rows forces EVERY row to be the same fixed height.
         * This is the key — regardless of how many lines the text takes,
         * every cell in every row is identical height.
         * Chips use height:100% to fill the cell completely.
         */
        .skill-chips {
          display: grid;
          gap: 1rem;                          /* generous gap, matches desktop */
          grid-template-columns: repeat(5, 1fr);
          grid-auto-rows: 64px;              /* ALL rows locked to same height */
          width: 100%;
          align-items: stretch;              /* chips stretch to fill the row */
        }

        .skill-chip {
          /* Fill the locked grid cell 100% */
          width: 100%;
          height: 100%;
          min-width: 0;

          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          text-align: center;

          padding: 0 12px;
          border-radius: 12px;
          background: var(--surface2);
          border: 1px solid var(--border);

          font-size: clamp(0.72rem, 1vw, 0.88rem);
          font-family: var(--font-display);
          font-weight: 500;
          line-height: 1.25;

          word-break: break-word;
          overflow-wrap: break-word;
          hyphens: auto;
          box-sizing: border-box;
          transition: all 0.3s ease;
          cursor: default;
        }

        .skill-chip:hover {
          transform: translateY(-5px) scale(1.04);
          box-shadow: 0 8px 24px rgba(0,0,0,0.2);
        }

        .skill-chip-arrow {
          flex-shrink: 0;
          font-size: 0.65rem;
          line-height: 1;
        }

        /* ── Responsive ── */

        /* Laptop ≤1100px → 4 cols, same row height */
        @media (max-width: 1100px) {
          .skill-chips {
            grid-template-columns: repeat(4, 1fr);
            grid-auto-rows: 64px;
            gap: 0.9rem;
          }
        }

        /* Tablet ≤768px → 3 cols */
        @media (max-width: 768px) {
          .skill-chips {
            grid-template-columns: repeat(3, 1fr);
            grid-auto-rows: 64px;
            gap: 0.8rem;
          }
          .skill-chip { font-size: 0.78rem; }
        }

        /* Large phone ≤540px → 3 cols, taller rows for wrapping text */
        @media (max-width: 540px) {
          .skill-chips {
            grid-template-columns: repeat(3, 1fr);
            grid-auto-rows: 68px;            /* slightly taller so wrapped text fits */
            gap: 0.6rem;
          }
          .skill-chip {
            font-size: 0.72rem;
            padding: 0 7px;
            border-radius: 10px;
          }
        }

        /* Small phone ≤380px → 2 cols */
        @media (max-width: 380px) {
          .skill-chips {
            grid-template-columns: repeat(2, 1fr);
            grid-auto-rows: 64px;
            gap: 0.55rem;
          }
          .skill-chip { font-size: 0.72rem; }
        }
      `}</style>

      <section className="skills-section" id="skills">
        <SectionLabel text="Expertise" />

        <motion.h2
          style={sectionTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Technical Skills
        </motion.h2>

        {/* Category Tabs */}
        <div className="skill-tabs">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              className="skill-tab"
              onClick={() => setActive(cat)}
              whileTap={{ scale: 0.95 }}
              animate={{
                borderColor:
                  active === cat ? categoryColors[cat] : "var(--border)",
                background:
                  active === cat ? `${categoryColors[cat]}18` : "transparent",
                color:
                  active === cat ? categoryColors[cat] : "var(--muted)",
              }}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Uniform chip grid */}
        <motion.div layout className="skill-chips">
          <AnimatePresence>
            {skills?.[active]?.map((skill, i) => (
              <motion.div
                key={skill}
                className="skill-chip"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.05 }}
                style={{ borderColor: `${categoryColors[active]}40` }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = categoryColors[active];
                  e.currentTarget.style.background = `${categoryColors[active]}15`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `${categoryColors[active]}40`;
                  e.currentTarget.style.background = "var(--surface2)";
                }}
              >
                <span
                  className="skill-chip-arrow"
                  style={{ color: categoryColors[active] }}
                >
                  ▸
                </span>
                {skill}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </>
  );
}