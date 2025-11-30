// src/pages/Home.tsx
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Resume from "@/components/Resume";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";

const SECTION_IDS = ["about", "resume", "projects", "contact"] as const;
type SectionId = (typeof SECTION_IDS)[number];

export default function Home() {
  const [activeSection, setActiveSection] = useState<SectionId | undefined>();

  // 현재 보고 있는 섹션 추적
  useEffect(() => {
    const sections = SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => b.intersectionRatio - a.intersectionRatio
          );

        if (visible[0]) {
          const id = visible[0].target.id as SectionId;
          setActiveSection(id);
        }
      },
      {
        threshold: 0.35,
        rootMargin: "-20% 0px -55% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header activeSection={activeSection} />

      <main className="pt-24 pb-20">
        {/* Hero – 애플 느낌의 은은한 그라디언트 + 글로우 */}
        <section className="relative bg-gradient-to-b from-background via-primary/5 to-background border-b border-border/40 overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 right-[-10%] w-72 h-72 rounded-full bg-primary/12 blur-3xl" />
            <div className="absolute bottom-[-25%] left-[-10%] w-80 h-80 rounded-full bg-primary/8 blur-3xl" />
          </div>
          <div className="relative">
            <ScrollReveal as="div" once className="pt-4">
              <Hero />
            </ScrollReveal>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-16 md:py-24">
          <ScrollReveal as="div">
            <About />
          </ScrollReveal>
        </section>

        {/* Resume */}
        <section
          id="resume"
          className="py-16 md:py-24 border-t border-border/40 bg-background"
        >
          <ScrollReveal as="div">
            <Resume />
          </ScrollReveal>
        </section>

        {/* Projects – 카드들은 섹션 안에서 개별적으로 순차 등장 가능 */}
        <section
          id="projects"
          className="py-16 md:py-24 bg-muted/30 border-y border-border/40"
        >
          <ScrollReveal as="div">
            <Projects />
          </ScrollReveal>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16 md:py-24">
          <ScrollReveal as="div">
            <Contact />
          </ScrollReveal>
        </section>
      </main>

      <Footer />
    </div>
  );
}
