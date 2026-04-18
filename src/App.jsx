import React from "react";
import "./index.css";
import { data } from "./data/resume";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Awards from "./components/Awards";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <Navbar name={data.name} />
      <main>
        <Hero data={data} />
        <Skills skills={data.skills} />
        <Experience experience={data.experience} />
        <Projects projects={data.projects} />
        <Awards awards={data.awards} education={data.education} />
        <Contact contact={data.contact} />
      </main>
    </>
  );
}
