// import React from "react";
// import { SectionLabel, sectionTitle } from "./Skills";

// export default function Awards({ awards, education }) {
//   return (
//     <>
//       <style>{`
//         .awards-section {
//           padding: clamp(2.5rem, 6vw, 5rem) clamp(1.25rem, 5vw, 4rem);
//           background: var(--surface);
//           border-top: 1px solid var(--border);
//           border-bottom: 1px solid var(--border);
//         }
//         .awards-grid {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: clamp(1.5rem, 4vw, 3.5rem);
//         }
//         .award-card {
//           background: var(--surface2);
//           border: 1px solid rgba(245,158,11,0.18);
//           border-radius: var(--radius);
//           padding: clamp(1rem, 2.5vw, 1.5rem);
//           margin-bottom: 0.85rem;
//           transition: border-color 0.2s;
//         }
//         .award-card:hover { border-color: var(--accent3); }
//         .award-inner { display: flex; gap: 10px; align-items: flex-start; }
//         .award-icon { font-size: clamp(1.1rem, 2.5vw, 1.4rem); flex-shrink: 0; }
//         .award-title {
//           font-family: var(--font-display);
//           font-weight: 700;
//           font-size: clamp(0.82rem, 1.3vw, 0.95rem);
//           color: var(--accent3);
//           margin-bottom: 5px;
//           line-height: 1.3;
//         }
//         .award-desc {
//           font-size: clamp(0.75rem, 1.1vw, 0.855rem);
//           color: var(--muted);
//           line-height: 1.6;
//         }
//         .edu-card {
//           background: var(--surface2);
//           border: 1px solid rgba(124,58,237,0.18);
//           border-radius: var(--radius);
//           padding: clamp(1rem, 2.5vw, 1.5rem);
//           margin-bottom: 0.85rem;
//           transition: border-color 0.2s;
//         }
//         .edu-card:hover { border-color: var(--accent2); }
//         .edu-header {
//           display: flex;
//           justify-content: space-between;
//           align-items: flex-start;
//           gap: 0.5rem;
//           margin-bottom: 5px;
//           flex-wrap: wrap;
//         }
//         .edu-degree {
//           font-family: var(--font-display);
//           font-weight: 700;
//           font-size: clamp(0.8rem, 1.3vw, 0.95rem);
//           color: var(--accent2);
//           line-height: 1.3;
//           flex: 1;
//           min-width: 0;
//           word-break: break-word;
//         }
//         .edu-yr {
//           font-size: clamp(0.65rem, 0.95vw, 0.75rem);
//           color: var(--muted);
//           background: rgba(124,58,237,0.1);
//           border: 1px solid rgba(124,58,237,0.2);
//           border-radius: 99px;
//           padding: 2px 10px;
//           white-space: nowrap;
//           flex-shrink: 0;
//         }
//         .edu-inst {
//           font-size: clamp(0.72rem, 1.1vw, 0.82rem);
//           color: var(--muted);
//           line-height: 1.5;
//         }

//         @media (max-width: 700px) {
//           .awards-grid { grid-template-columns: 1fr; }
//         }
//       `}</style>

//       <section className="awards-section" id="awards">
//         <div className="awards-grid">
//           <div>
//             <SectionLabel text="Recognition" />
//             <h2 style={{ ...sectionTitle, marginBottom: "1.25rem" }}>Honors & Awards</h2>
//             {awards.map((a, i) => (
//               <div key={i} className="award-card">
//                 <div className="award-inner">
//                   <span className="award-icon">🏆</span>
//                   <div>
//                     <div className="award-title">{a.title}</div>
//                     <div className="award-desc">{a.description}</div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div>
//             <SectionLabel text="Education" />
//             <h2 style={{ ...sectionTitle, marginBottom: "1.25rem" }}>Academic Background</h2>
//             {education.map((e, i) => (
//               <div key={i} className="edu-card">
//                 <div className="edu-header">
//                   <div className="edu-degree">{e.degree}</div>
//                   <span className="edu-yr">{e.year}</span>
//                 </div>
//                 <div className="edu-inst">{e.institution}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }


import React from "react";
import { SectionLabel } from "./Skills";

export default function Awards({ awards, education }) {
  const maxLen = Math.max(awards.length, education.length);

  return (
    <>
      <style>{`
        .awards-section {
          padding: clamp(2.5rem, 6vw, 5rem) clamp(1.25rem, 5vw, 4rem);
          background: var(--surface);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }

        /* ── Master grid: 2 cols, rows = 1 header + N card rows ── */
        .awards-master-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          column-gap: clamp(1.5rem, 4vw, 3.5rem);
          row-gap: clamp(0.75rem, 2vw, 1rem);
          align-items: stretch; /* every cell in a row matches the tallest */
        }

        /* Header cells — no bottom gap bleed */
        .col-header-cell {
          display: flex;
          flex-direction: column;
          padding-bottom: 0.25rem;
        }

        .col-heading {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: clamp(1.5rem, 3vw, 2.1rem);
          color: var(--text);
          margin: 0 0 0 0;
          line-height: 1.15;
          white-space: nowrap;
        }

        /* ── Award card ── */
        .award-card {
          background: var(--surface2);
          border: 1px solid rgba(245,158,11,0.18);
          border-radius: var(--radius);
          padding: clamp(1rem, 2.5vw, 1.5rem);
          transition: border-color 0.2s;
          display: flex;
          align-items: flex-start;  /* content sits at top */
          gap: 10px;
          /* height: 100% not needed — grid stretch handles it */
        }
        .award-card:hover { border-color: var(--accent3); }

        .award-icon { font-size: clamp(1rem, 2vw, 1.3rem); flex-shrink: 0; margin-top: 2px; }
        .award-text { display: flex; flex-direction: column; }

        .award-title {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: clamp(0.82rem, 1.3vw, 0.95rem);
          color: var(--accent3);
          margin-bottom: 5px;
          line-height: 1.3;
        }
        .award-desc {
          font-size: clamp(0.75rem, 1.1vw, 0.855rem);
          color: var(--muted);
          line-height: 1.6;
        }

        /* ── Education card — SAME height as award card in same row ── */
        .edu-card {
          background: var(--surface2);
          border: 1px solid rgba(124,58,237,0.18);
          border-radius: var(--radius);
          padding: clamp(1rem, 2.5vw, 1.5rem);
          transition: border-color 0.2s;
          display: flex;
          flex-direction: column;
          justify-content: center; /* centre vertically since content is shorter */
        }
        .edu-card:hover { border-color: var(--accent2); }

        .edu-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 0.5rem;
          margin-bottom: 6px;
          flex-wrap: wrap;
        }
        .edu-degree {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: clamp(0.8rem, 1.3vw, 0.95rem);
          color: var(--accent2);
          line-height: 1.3;
          flex: 1;
          min-width: 0;
          word-break: break-word;
        }
        .edu-yr {
          font-size: clamp(0.65rem, 0.95vw, 0.75rem);
          color: var(--muted);
          background: rgba(124,58,237,0.1);
          border: 1px solid rgba(124,58,237,0.2);
          border-radius: 99px;
          padding: 2px 10px;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .edu-inst {
          font-size: clamp(0.72rem, 1.1vw, 0.82rem);
          color: var(--muted);
          line-height: 1.5;
        }

        /* ── Responsive ── */
        @media (min-width: 1400px) {
          .col-heading { font-size: 2.2rem; }
          .award-title, .edu-degree { font-size: 1rem; }
          .award-desc, .edu-inst { font-size: 0.92rem; }
        }

        @media (max-width: 1199px) {
          .col-heading { font-size: clamp(1.2rem, 2.5vw, 1.7rem); }
        }

        @media (max-width: 900px) {
          .col-heading { font-size: clamp(1.1rem, 3vw, 1.4rem); white-space: normal; }
        }

        /* Mobile: kill master grid, show stacked layout */
        @media (max-width: 700px) {
          .awards-master-grid { display: none; }
          .awards-mobile { display: flex !important; }
        }

        @media (max-width: 400px) {
          .awards-section { padding: 2rem 1rem; }
        }

        /* Mobile stacked layout */
        .awards-mobile {
          display: none;
          flex-direction: column;
          gap: 2.5rem;
        }
        .mobile-col { display: flex; flex-direction: column; gap: 0.85rem; }
        .mobile-col .col-heading {
          font-size: clamp(1.5rem, 6vw, 2rem);
          white-space: normal;
          margin-bottom: 0.25rem;
        }
      `}</style>

      <section className="awards-section" id="awards">

        {/* ══ DESKTOP: flat grid, cards share row height ══ */}
        <div className="awards-master-grid">

          {/* Row 0: both headings */}
          <div className="col-header-cell">
            <SectionLabel text="Recognition" />
            <h2 className="col-heading">Honors &amp; Awards</h2>
          </div>
          <div className="col-header-cell">
            <SectionLabel text="Education" />
            <h2 className="col-heading">Academic Background</h2>
          </div>

          {/* Rows 1…N: award + edu card side by side — grid makes them equal height */}
          {Array.from({ length: maxLen }).map((_, i) => (
            <React.Fragment key={i}>

              {awards[i] ? (
                <div className="award-card">
                  <span className="award-icon">🏆</span>
                  <div className="award-text">
                    <div className="award-title">{awards[i].title}</div>
                    <div className="award-desc">{awards[i].description}</div>
                  </div>
                </div>
              ) : <div />}

              {education[i] ? (
                <div className="edu-card">
                  <div className="edu-header">
                    <div className="edu-degree">{education[i].degree}</div>
                    <span className="edu-yr">{education[i].year}</span>
                  </div>
                  <div className="edu-inst">{education[i].institution}</div>
                </div>
              ) : <div />}

            </React.Fragment>
          ))}
        </div>

        {/* ══ MOBILE: clean stacked single column ══ */}
        <div className="awards-mobile">
          <div className="mobile-col">
            <SectionLabel text="Recognition" />
            <h2 className="col-heading">Honors &amp; Awards</h2>
            {awards.map((a, i) => (
              <div key={i} className="award-card">
                <span className="award-icon">🏆</span>
                <div className="award-text">
                  <div className="award-title">{a.title}</div>
                  <div className="award-desc">{a.description}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mobile-col">
            <SectionLabel text="Education" />
            <h2 className="col-heading">Academic Background</h2>
            {education.map((e, i) => (
              <div key={i} className="edu-card">
                <div className="edu-header">
                  <div className="edu-degree">{e.degree}</div>
                  <span className="edu-yr">{e.year}</span>
                </div>
                <div className="edu-inst">{e.institution}</div>
              </div>
            ))}
          </div>
        </div>

      </section>
    </>
  );
}