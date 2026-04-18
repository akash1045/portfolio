
// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// /* 🔥 Count Hook (NEW) */
// function useCountUp(end, duration = 2000) {
//   const [value, setValue] = useState(0);

//   useEffect(() => {
//     let startTime = null;

//     const step = (timestamp) => {
//       if (!startTime) startTime = timestamp;

//       const progress = timestamp - startTime;
//       const percent = Math.min(progress / duration, 1);

//       setValue(Math.floor(percent * end));

//       if (percent < 1) {
//         requestAnimationFrame(step);
//       }
//     };

//     requestAnimationFrame(step);
//   }, [end, duration]);

//   return value;
// }

// export default function Hero({ data }) {
//   const { name, title, subtitle, tagline, contact, stats } = data;

//   const [firstName, ...rest] = name.split(" ");
//   const lastName = rest.join(" ");

//   /* 🔥 Animation Variants */
//   const container = {
//     hidden: {},
//     show: {
//       transition: {
//         staggerChildren: 0.15,
//       },
//     },
//   };

//   const fadeUp = {
//     hidden: { opacity: 0, y: 40 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
//   };

//   const cardAnim = {
//     hidden: { opacity: 0, y: 50, scale: 0.95 },
//     show: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: { duration: 0.5 },
//     },
//   };

//   return (
//     <>
//       <style>{`
//         body {
//           margin: 0;
//           background: #05070d;
//           color: white;
//           font-family: sans-serif;
//           overflow-x: hidden;
//         }

//         .hero {
//           min-height: 100vh;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           padding: clamp(60px, 8vw, 120px) 20px;
//         }

//         .container {
//           width: 100%;
//           max-width: min(1400px, 92vw);
//         }

//         .name {
//           font-size: clamp(2rem, 6vw, 6rem);
//           font-weight: 800;
//           line-height: 1.1;
//         }

//         .gradient {
//           background: linear-gradient(90deg, #00e5ff, #7c3aed);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//         }

//         .sub {
//           margin-top: 12px;
//           color: #aaa;
//         }

//         .tag {
//           margin-top: 10px;
//           color: #888;
//           max-width: 650px;
//         }

//         .btns {
//           display: flex;
//           gap: 12px;
//           margin-top: 25px;
//           flex-wrap: wrap;
//         }

//         .btn {
//           padding: 12px 26px;
//           border-radius: 999px;
//           font-weight: 600;
//           text-decoration: none;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           min-width: 160px;
//         }

//         .primary {
//           background: #00e5ff;
//           color: black;
//         }

//         .outline {
//           border: 1px solid #444;
//           color: white;
//         }

//         @media (max-width: 500px) {
//           .btns {
//             flex-direction: column;
//           }
//           .btn {
//             width: 100%;
//           }
//         }

//         .stats {
//           margin-top: 60px;
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
//           gap: 20px;
//         }

//         .card {
//           padding: 25px;
//           border-radius: 16px;
//           background: rgba(255,255,255,0.05);
//           border: 1px solid rgba(255,255,255,0.08);
//           text-align: center;
//         }

//         .value {
//           font-size: 2rem;
//           font-weight: 800;
//           color: #00e5ff;
//         }

//         .label {
//           margin-top: 8px;
//           color: #aaa;
//         }
//       `}</style>

//       <section className="hero">
//         <motion.div
//           className="container"
//           variants={container}
//           initial="hidden"
//           animate="show"
//         >
//           {/* NAME */}
//           <motion.h1 className="name" variants={fadeUp}>
//             {firstName} <span className="gradient">{lastName}</span>
//           </motion.h1>

//           {/* SUBTITLE */}
//           <motion.p className="sub" variants={fadeUp}>
//             {title} · <span style={{ color: "#00e5ff" }}>{subtitle}</span>
//           </motion.p>

//           {/* TAGLINE */}
//           <motion.p className="tag" variants={fadeUp}>
//             {tagline}
//           </motion.p>

//           {/* BUTTONS */}
//           <motion.div className="btns" variants={fadeUp}>
//             <motion.a
//               href="mailto:your@email.com"
//               className="btn primary"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Get in Touch
//             </motion.a>

//             <motion.a
//               href={`https://${contact.linkedin}`}
//               target="_blank"
//               rel="noreferrer"
//               className="btn outline"
//               whileHover={{ scale: 1.05 }}
//             >
//               LinkedIn
//             </motion.a>
//           </motion.div>

//           {/* 🔥 STATS (UPDATED ONLY HERE) */}
//           <div className="stats">
//             {stats.map((s, i) => {
//               const numeric = parseInt(s.value.replace(/[^0-9]/g, ""));
//               const count = useCountUp(numeric);

//               return (
//                 <motion.div
//                   key={i}
//                   className="card"
//                   variants={cardAnim}
//                   initial="hidden"
//                   animate="show"
//                   whileHover={{
//                     y: -8,
//                     scale: 1.05,
//                     boxShadow: "0 20px 50px rgba(0,229,255,0.2)",
//                   }}
//                 >
//                   {/* 🔢 COUNT ANIMATION */}
//                   <motion.div
//                     className="value"
//                     initial={{ y: 20, opacity: 0 }}
//                     animate={{ y: 0, opacity: 1 }}
//                   >
//                     {count}
//                     {s.value.replace(/[0-9]/g, "")}
//                   </motion.div>

//                   <div className="label">{s.label}</div>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </motion.div>
//       </section>
//     </>
//   );
// }

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

/* ✅ Count Hook */
function useCountUp(end, duration = 2000, decimals = 0) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = timestamp - startTime;
      const percent = Math.min(progress / duration, 1);
      const current = percent * end;

      setValue(
        decimals > 0
          ? parseFloat(current.toFixed(decimals))
          : Math.floor(current)
      );

      if (percent < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [end, duration, decimals]);

  return value;
}

/* ✅ StatCard — hook must be called at component top level, NOT inside map() */
function StatCard({ s }) {
  const cardAnim = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
  };

  // Parse: extract leading number (including decimals) and the rest as suffix
  // e.g. "99.9%" → numeric=99.9, suffix="%", decimals=1
  // e.g. "90M+"  → numeric=90,   suffix="M+", decimals=0
  // e.g. "3.5+"  → numeric=3.5,  suffix="+",  decimals=1
  // e.g. "35+"   → numeric=35,   suffix="+",  decimals=0
  const match = s.value.match(/^(\d+\.?\d*)(.*)/);
  const numeric = match ? parseFloat(match[1]) : 0;
  const suffix = match ? match[2] : s.value;
  const decimals =
    match && match[1].includes(".")
      ? match[1].split(".")[1].length
      : 0;

  const count = useCountUp(numeric, 2000, decimals);

  return (
    <motion.div
      className="card"
      variants={cardAnim}
      initial="hidden"
      animate="show"
      whileHover={{
        y: -8,
        scale: 1.05,
        boxShadow: "0 20px 50px rgba(0,229,255,0.2)",
      }}
    >
      <motion.div
        className="value"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        {decimals > 0 ? count.toFixed(decimals) : count}
        {suffix}
      </motion.div>
      <div className="label">{s.label}</div>
    </motion.div>
  );
}

export default function Hero({ data }) {
  const { name, title, subtitle, tagline, contact, stats } = data;

  const [firstName, ...rest] = name.split(" ");
  const lastName = rest.join(" ");

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <>
      <style>{`
        body {
          margin: 0;
          background: #05070d;
          color: white;
          font-family: sans-serif;
          overflow-x: hidden;
        }

        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: clamp(60px, 8vw, 120px) 20px;
        }

        .container {
          width: 100%;
          max-width: min(1400px, 92vw);
        }

        .name {
          font-size: clamp(2rem, 6vw, 6rem);
          font-weight: 800;
          line-height: 1.1;
        }

        .gradient {
          background: linear-gradient(90deg, #00e5ff, #7c3aed);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .sub {
          margin-top: 12px;
          color: #aaa;
        }

        .tag {
          margin-top: 10px;
          color: #888;
          max-width: 650px;
        }

        .btns {
          display: flex;
          gap: 12px;
          margin-top: 25px;
          flex-wrap: wrap;
        }

        .btn {
          padding: 12px 26px;
          border-radius: 999px;
          font-weight: 600;
          text-decoration: none;
          display: flex;
          justify-content: center;
          align-items: center;
          min-width: 160px;
        }

        .primary {
          background: #00e5ff;
          color: black;
        }

        .outline {
          border: 1px solid #444;
          color: white;
        }

        @media (max-width: 500px) {
          .btns {
            flex-direction: column;
          }
          .btn {
            width: 100%;
          }
        }

        .stats {
          margin-top: 60px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
        }

        .card {
          padding: 25px;
          border-radius: 16px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          text-align: center;
        }

        .value {
          font-size: 2rem;
          font-weight: 800;
          color: #00e5ff;
        }

        .label {
          margin-top: 8px;
          color: #aaa;
        }
      `}</style>

      <section className="hero">
        <motion.div
          className="container"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* NAME */}
          <motion.h1 className="name" variants={fadeUp}>
            {firstName} <span className="gradient">{lastName}</span>
          </motion.h1>

          {/* SUBTITLE */}
          <motion.p className="sub" variants={fadeUp}>
            {title} · <span style={{ color: "#00e5ff" }}>{subtitle}</span>
          </motion.p>

          {/* TAGLINE */}
          <motion.p className="tag" variants={fadeUp}>
            {tagline}
          </motion.p>

          {/* BUTTONS */}
          <motion.div className="btns" variants={fadeUp}>
            <motion.a
              href="mailto:your@email.com"
              className="btn primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>

            <motion.a
              href={`https://${contact.linkedin}`}
              target="_blank"
              rel="noreferrer"
              className="btn outline"
              whileHover={{ scale: 1.05 }}
            >
              LinkedIn
            </motion.a>
          </motion.div>

          {/* ✅ STATS — each card is its own component so hooks work correctly */}
          <div className="stats">
            {stats.map((s, i) => (
              <StatCard key={i} s={s} />
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
}
