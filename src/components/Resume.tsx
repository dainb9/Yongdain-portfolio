// src/components/Resume.tsx
import { useState } from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { EXPERIENCES, PROFILE, SKILLS } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { FileText, User, Download } from "lucide-react";
import { generateResumePDF } from "@/lib/pdf-generator";
import InteractiveSkillChart from "./InteractiveSkillChart";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export default function Resume() {
  const { language, t, toggleLanguage } = useLanguage();
  const [activeSkillIndex, setActiveSkillIndex] = useState(0);
  const activeSkillGroup = SKILLS[activeSkillIndex] ?? SKILLS[0];

  // (옵션) 쓰고 있진 않지만 필요하면 레이더 차트에 쓸 수 있음
  const chartData = {
    labels: [
      "React/Next.js",
      "TypeScript",
      "UI/UX Design",
      "Backend (FastAPI)",
      "AI/ML",
      "CS Fundamentals",
    ],
    datasets: [
      {
        label: language === "ko" ? "기술 수준" : "Skill Level",
        data: [90, 85, 80, 75, 70, 80],
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        borderColor: "rgba(59, 130, 246, 1)",
        borderWidth: 2,
        pointBackgroundColor: "rgba(59, 130, 246, 1)",
        pointBorderColor: "#fff",
      },
    ],
  };

  const chartOptions = {
    scales: {
      r: {
        angleLines: {
          color: "rgba(148, 163, 184, 0.25)",
        },
        grid: {
          color: "rgba(148, 163, 184, 0.15)",
        },
        suggestedMin: 40,
        suggestedMax: 100,
        ticks: {
          backdropColor: "transparent",
          color: "rgba(148, 163, 184, 0.8)",
        },
        pointLabels: {
          color: "rgba(148, 163, 184, 0.9)",
          font: {
            size: 11,
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <section id="resume" className="py-8 md:py-16">
      <div className="container">
        {/* 상단 헤더 & 버튼들 */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              {t("resume.title")}
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              {language === "ko"
                ? "프로젝트 중심으로 정리한 이력 요약입니다."
                : "A resume-style summary of my project-based experience."}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => generateResumePDF(language === "ko" ? "ko" : "en")}
              className="inline-flex items-center gap-2 rounded-full px-5 md:px-6"
            >
              <Download className="w-4 h-4" />
              {language === "ko" ? "PDF로 저장" : "Export as PDF"}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="rounded-full px-5 md:px-6"
            >
              {language === "ko" ? "Switch to EN" : "한국어 보기"}
            </Button>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,2.1fr)_minmax(0,1.4fr)] items-start">
          {/* 왼쪽: 요약 + 경험 + 교육 */}
          <div className="space-y-8">
            {/* 맨 위 요약 카드 (이름/현재 포지션) */}
            <Card className="glass-card mb-8 border-primary/15 shadow-soft">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="text-2xl md:text-3xl font-semibold">
                      {PROFILE.name}
                    </h3>
                    <p className="text-primary font-medium">
                      {language === "ko" ? PROFILE.role : PROFILE.roleEn}
                    </p>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-3xl">
                      {language === "ko"
                        ? PROFILE.summary
                        : PROFILE.summaryEn}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 text-xs text-muted-foreground min-w-[180px]">
                    <div>
                      <p className="font-medium text-foreground">
                        {language === "ko" ? "Contact" : "Contact"}
                      </p>
                      <p>{PROFILE.email}</p>
                      <p>{PROFILE.phone}</p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        {language === "ko" ? "Location" : "Location"}
                      </p>
                      <p>{PROFILE.location}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Experience */}
            <Card className="glass-card shadow-soft">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl">
                  {t("resume.experience")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                {EXPERIENCES.map((exp) => (
                  <div
                    key={exp.id}
                    className="border-l border-border/60 pl-4 md:pl-5 space-y-1.5"
                  >
                    <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 md:gap-3">
                      <div>
                        <p className="text-sm font-semibold">{exp.company}</p>
                        <p className="text-xs md:text-sm text-primary font-medium">
                          {language === "ko" ? exp.roleKo ?? exp.role : exp.roleEn ?? exp.role}
                        </p>
                      </div>
                      <p className="text-[11px] md:text-xs text-muted-foreground">
                        {exp.period}
                      </p>
                    </div>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                      {language === "ko" ? exp.description : exp.descriptionEn}
                    </p>
                    <ul className="mt-1.5 text-xs md:text-sm text-muted-foreground/90 space-y-0.5">
                      {(language === "ko" ? exp.achievements : exp.achievementsEn).map(
                        (achievement, i) => (
                          <li key={i}>• {achievement}</li>
                        )
                      )}
                    </ul>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="glass-card shadow-soft border-l-4 border-l-primary/80">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl">
                  {t("resume.education")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                {PROFILE.education.map((edu, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline gap-2">
                      <div>
                        <h4 className="text-lg font-semibold">
                          {edu.school}
                        </h4>
                        <p className="text-primary font-medium">
                          {language === "ko" ? edu.degreeKo : edu.degree}
                        </p>
                      </div>
                      <p className="text-xs text-muted-foreground">{edu.period}</p>
                    </div>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                      {language === "ko" ? edu.detailsKo : edu.details}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* 오른쪽: 스킬 차트 + 커버레터 + Tech Stack */}
          <div className="space-y-8">
            {/* Skill Chart */}
            <Card className="glass-card shadow-soft no-print">
              <CardHeader className="pb-3">
                <CardTitle className="text-2xl">
                  {t("resume.skills")}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                {/* 기존 커스텀 차트 (InteractiveSkillChart) */}
                <InteractiveSkillChart />
                {/* 필요하면 기본 Radar를 아래에 추가할 수도 있음
                <div className="mt-4 h-56">
                  <Radar data={chartData} options={chartOptions as any} />
                </div>
                */}
              </CardContent>
            </Card>

            {/* Cover Letter */}
            <Card className="glass-card bg-gradient-to-br from-primary/8 via-primary/5 to-background border-primary/30 shadow-soft border-l-4 border-l-primary">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl flex items-center gap-2">
                  <FileText className="w-4 h-4 text-primary" />
                  {language === "ko" ? "개발자로서의 방향" : "How I work as a developer"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                {language === "ko" ? (
                  <>
                    <p className="border-l-2 border-primary/30 pl-4">
                      저는 웹과 안드로이드를 중심으로, 사용자가 이해하기 쉬운 화면과 믿을 수 있는 동작을 동시에 만드는 개발자를 지향합니다.

                      AI 기반 DDoS 탐지 시스템, EcoPath, PAW!, StudyLog 같은 프로젝트를 진행하면서 프론트엔드와 백엔드를 모두 경험해 봤습니다.
                      이 과정에서 “보여지는 부분”과 “보이지 않는 부분”이 어떻게 연결되는지, 그리고 작은 설계 차이가 사용자 경험과 안정성에 얼마나
                      큰 영향을 주는지 몸으로 배웠습니다.
                    </p>
                    <p className="border-l-2 border-primary/20 pl-4">
                      앞으로는 React 기반 웹 프론트엔드를 중심 축으로 삼되,
                      FastAPI·네트워크/보안처럼 실시간 데이터를 다루는 백엔드와의 접점을 계속 넓혀 가고 싶습니다.
                      최종적으로는 복잡한 시스템도 사용자가 한 번에 이해할 수 있도록 정리해 주는,
                      “설명이 필요 없는 인터페이스”를 만드는 개발자가 되고자 합니다.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="border-l-2 border-primary/30 pl-4">
                      Direction as a Developer
                      I aim to be a developer who delivers interfaces that are easy to understand and services 
                      that behave reliably, across both web and Android.

                      Through projects like the AI-based DDoS Detection System, 
                      EcoPath, PAW!, and StudyLog, I’ve experienced both frontend and backend. 
                      This taught me how the visible UI and invisible logic are connected, 
                      and how small design decisions can greatly affect user experience and stability.
                    </p>
                    <p className="border-l-2 border-primary/20 pl-4">
                      Going forward, I want to focus on React-based web frontend while continuously 
                      expanding my experience with FastAPI and backend systems that handle real-time data such as networking and security. 
                      Ultimately, I want to become a developer who can turn complex systems into UIs 
                      that “don’t need explanation” for users.
                    </p>
                  </>
                )}
              </CardContent>
            </Card>

            {/* Tech Stack */}
            <Card className="glass-card shadow-soft border-l-4 border-l-primary no-print">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">
                  {t("about.techstack")}
                </CardTitle>
              </CardHeader>
              <CardContent className="md:flex md:gap-8 md:items-start space-y-4 md:space-y-0">
                {/* 왼쪽: 카테고리 탭 */}
                <div className="md:w-40 flex md:flex-col gap-2 md:gap-3 border-b md:border-b-0 md:border-r border-border/60 pb-3 md:pb-0 md:pr-4 overflow-x-auto no-scrollbar text-xs md:text-sm">
                  {SKILLS.map((group, index) => {
                    const Icon = group.icon;
                    const label =
                      language === "ko" ? group.category : group.categoryEn;
                    const isActive = index === activeSkillIndex;
                    return (
                      <button
                        key={group.category}
                        type="button"
                        onClick={() => setActiveSkillIndex(index)}
                        className={cn(
                          "inline-flex items-center gap-2 px-3 py-1.5 md:px-2.5 md:py-1.5 rounded-full md:rounded-lg border text-left whitespace-nowrap transition-colors",
                          isActive
                            ? "bg-primary/10 border-primary/50 text-primary"
                            : "bg-background border-border/60 text-muted-foreground hover:bg-muted/60"
                        )}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        <span>{label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* 오른쪽: 선택한 카테고리의 스킬 목록 */}
                <div className="flex-1">
                  <p className="text-[10px] md:text-xs uppercase tracking-[0.18em] text-muted-foreground/80 mb-2">
                    {language === "ko"
                      ? "Skill Stack Details"
                      : "Skill Stack Details"}
                  </p>
                  <div className="space-y-3">
                    {activeSkillGroup.items.map((skill) => (
                      <div
                        key={skill}
                        className="flex items-center gap-3 text-xs md:text-sm"
                      >
                        <div className="h-8 w-8 rounded-full border border-border/70 flex items-center justify-center text-[11px] font-semibold text-muted-foreground">
                          {skill[0]}
                        </div>
                        <div>
                          <p className="font-medium text-foreground/90">
                            {skill}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
