

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
  const [active, setActive] = useState("Languages");
  const categories = Object.keys(skills);

  return (
    <>
      <style>{`
        .skills-section {
          padding: clamp(2.5rem, 6vw, 5rem) clamp(0.5rem, 4vw, 3rem);
          max-width: 1400px;
          margin: 0 auto;
        }

        /* Tabs */
        .skill-tabs {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-bottom: 2rem;
        }

        .skill-tab {
          padding: 8px 16px;
          border-radius: 999px;
          border: 1px solid var(--border);
          font-family: var(--font-display);
          font-weight: 600;
          font-size: clamp(0.72rem, 1vw, 0.9rem);
          cursor: pointer;
          transition: all 0.25s ease;
          white-space: nowrap;
        }

        .skill-tab:hover {
          transform: translateY(-2px);
        }

        /* Cards Grid */
        .skill-chips {
          display: grid;
          gap: 1rem;
          grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
        }

        /* Card */
        .skill-chip {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          text-align: center;
          padding: 12px 16px;
          min-height: 72px;
          border-radius: 12px;
          backdrop-filter: blur(10px);
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          font-size: clamp(0.8rem, 1vw, 0.95rem);
          transition: all 0.3s ease;
          box-sizing: border-box;
          white-space: normal;
          word-break: keep-all;
          overflow-wrap: normal;
          overflow: visible;
        }

        .skill-chip:hover {
          transform: translateY(-6px) scale(1.05);
          box-shadow: 0 10px 30px rgba(0,0,0,0.25);
        }

        /* Mobile - 2 columns */
        @media (max-width: 480px) {
          .skill-chips {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* Tablet - 3 columns */
        @media (min-width: 481px) and (max-width: 768px) {
          .skill-chips {
            grid-template-columns: repeat(3, 1fr);
          }
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

        {/* Tabs */}
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
                  active === cat
                    ? `${categoryColors[cat]}18`
                    : "transparent",
                color:
                  active === cat
                    ? categoryColors[cat]
                    : "var(--muted)",
              }}
              transition={{ duration: 0.25 }}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Skill Cards */}
        <motion.div layout className="skill-chips">
          <AnimatePresence mode="wait">
            {skills[active].map((skill, i) => (
              <motion.div
                key={skill}
                className="skill-chip"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.08 }}
                style={{
                  borderColor: `${categoryColors[active]}40`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = categoryColors[active];
                  e.currentTarget.style.background = `${categoryColors[active]}15`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `${categoryColors[active]}40`;
                  e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                }}
              >
                <span style={{ color: categoryColors[active], flexShrink: 0 }}>
                  ▸
                </span>
                <span style={{ whiteSpace: "inherit" }}>
                  {skill}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </>
  );
}