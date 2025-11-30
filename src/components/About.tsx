// src/components/About.tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Code2, LineChart, Users } from "lucide-react";

export default function About() {
  const { language } = useLanguage();
  const isKo = language === "ko";

  const heading = isKo ? "핵심 역량" : "Core Strengths";
  const mainTitle = isKo
    ? "유연하게 소통하고 견고하게 개발합니다."
    : "Communicating smoothly, building robustly.";
  const subtitle = isKo
    ? "프론트엔드, 백엔드, AI 프로젝트를 경험하며 정리한 저만의 강점들입니다."
    : "These are the strengths I’ve built through frontend, backend, and AI projects.";

  const cards = [
    {
      id: "frontend",
      icon: Code2,
      title: isKo ? "모던 웹 · 프론트엔드 개발" : "Modern Web & Frontend",
      body: isKo
        ? "React, TypeScript, Tailwind를 사용해 사용자에게 읽기 쉬운 화면과 자연스러운 흐름을 설계합니다. 안드로이드 앱과 웹을 함께 경험하면서, 여러 플랫폼에서 일관된 경험을 만드는 것에 관심이 많습니다."
        : "Using React, TypeScript and Tailwind, I design clear UIs and natural flows. Experience with both Android apps and web helps me keep the experience consistent across platforms.",
      bullets: isKo
        ? [
            "정보 구조를 먼저 정리한 뒤 화면을 설계하는 습관",
            "컴포넌트를 나누어 재사용성과 유지보수성을 고려한 코드 작성",
          ]
        : [
            "Structuring information first, then designing screens",
            "Writing component-based code with reuse and maintainability in mind",
          ],
    },
    {
      id: "quality",
      icon: LineChart,
      title: isKo
        ? "문제 해결과 기능 완성도에 대한 집요함"
        : "Problem Solving & Quality",
      body: isKo
        ? "AI 기반 DDoS 탐지 시스템, StudyLog, PAW! 앱 등을 만들며 디버깅과 개선 작업을 끝까지 붙잡고 가는 경험을 쌓았습니다. 단순히 '동작하는 코드'를 넘어서, 예외 상황과 사용자 경험까지 함께 고민합니다."
        : "Through projects like the AI DDoS detection system, StudyLog and PAW!, I’ve learned to stick with debugging and refinement until the end, thinking beyond 'just works' to edge cases and UX.",
      bullets: isKo
        ? [
            "버그가 나도 원인을 추적해 끝까지 해결하려는 성향",
            "실제 데이터·패킷·로그를 보며 동작을 확인하는 습관",
          ]
        : [
            "Persistence in tracking and fixing bugs to the end",
            "Checking real data/packets/logs to verify behavior",
          ],
    },
    {
      id: "communication",
      icon: Users,
      title: isKo ? "커뮤니케이션 · 협업 · 기록" : "Communication & Collaboration",
      body: isKo
        ? "2인 팀 프로젝트(DDoS 탐지, EcoPath)와 여러 과제에서 역할을 분담하고 문서를 작성해 왔습니다. 제가 맡은 부분을 명확하게 설명하고, 변경 사항을 기록해 팀이 함께 이해할 수 있도록 하는 것을 중요하게 생각합니다."
        : "In team projects like the DDoS system and EcoPath, I shared responsibilities and wrote documentation. I try to explain my part clearly and record changes so that the whole team can understand.",
      bullets: isKo
        ? [
            "회의 내용과 결정 사항을 간단히 정리해서 공유",
            "문서(README, 노션, 발표 자료)로 프로젝트 흐름을 시각화",
          ]
        : [
            "Summarizing meeting notes and decisions for others",
            "Visualizing project flows in docs (README, Notion, slides)",
          ],
    },
  ];

  return (
    <section id="about" className="py-16">
      <div className="container">
        {/* 상단 헤더 */}
        <div className="text-center mb-10">
          <p className="text-xs md:text-sm font-semibold text-primary tracking-[0.2em] uppercase">
            {heading}
          </p>
          <h2 className="mt-2 text-2xl md:text-3xl font-bold tracking-tight">
            {mainTitle}
          </h2>
          <p className="mt-3 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* 카드 3개 그리드 */}
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <Card
                key={card.id}
                className="glass-card shadow-soft border border-border/60 hover:-translate-y-1 hover:shadow-xl hover:border-primary/50 transition-all duration-200"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-base md:text-lg">
                      {card.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                  <p>{card.body}</p>
                  <ul className="text-xs md:text-sm space-y-1.5">
                    {card.bullets.map((b) => (
                      <li key={b}>• {b}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
