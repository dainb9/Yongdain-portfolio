// src/components/InteractiveSkillChart.tsx
import React from "react";
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
import { useLanguage } from "@/contexts/LanguageContext";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export default function InteractiveSkillChart() {
  const { language } = useLanguage();

  const labels = [
    "React / Next.js",
    "TypeScript",
    "UI / UX",
    "Backend (FastAPI)",
    "DevOps",
    "CS Fundamentals",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: language === "ko" ? "숙련도" : "Proficiency",
        data: [80, 75, 70, 65, 45, 65], // 학생 기준으로 현실적인 숫자
        backgroundColor: "rgba(59, 130, 246, 0.18)",
        borderColor: "rgba(59, 130, 246, 1)",
        borderWidth: 2,
        pointBackgroundColor: "rgba(59, 130, 246, 1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(59, 130, 246, 1)",
      },
    ],
  };

  const options: any = {
    scales: {
      r: {
        angleLines: {
          color: "rgba(148, 163, 184, 0.25)",
        },
        grid: {
          color: "rgba(148, 163, 184, 0.25)",
        },
        pointLabels: {
          font: {
            size: 11,
            family: "system-ui",
          },
          color: "rgb(148, 163, 184)",
        },
        suggestedMin: 0,
        suggestedMax: 100,
        ticks: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (ctx: any) =>
            `${ctx.label}: ${ctx.formattedValue}/100`,
        },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="space-y-4">
      <div className="h-64 md:h-72">
        <Radar data={data} options={options} />
      </div>
      <div className="grid sm:grid-cols-3 gap-3 text-xs text-muted-foreground">
        <div className="flex items-start gap-2">
          <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
          <p>
            <span className="font-semibold">
              {language === "ko" ? "⭐ 자신 있게 사용" : "⭐ Confident"}
            </span>
            <br />
            {language === "ko"
              ? "수업·개인 프로젝트에서 주력으로 사용하는 기술."
              : "Used as main stack in projects and coursework."}
          </p>
        </div>
        <div className="flex items-start gap-2">
          <span className="mt-1 h-2 w-2 rounded-full bg-primary/70" />
          <p>
            <span className="font-semibold">
              {language === "ko" ? "▲ 프로젝트 경험" : "▲ Project Experience"}
            </span>
            <br />
            {language === "ko"
              ? "프로젝트에 적용해 봤고, 계속 깊게 공부 중인 영역."
              : "Applied in projects; still deepening understanding."}
          </p>
        </div>
        <div className="flex items-start gap-2">
          <span className="mt-1 h-2 w-2 rounded-full bg-primary/40" />
          <p>
            <span className="font-semibold">
              {language === "ko" ? "○ 기초 다짐" : "○ Fundamentals"}
            </span>
            <br />
            {language === "ko"
              ? "교과·실습을 통해 기본 개념과 사용법을 익힌 단계."
              : "Basic knowledge through courses and labs."}
          </p>
        </div>
      </div>
    </div>
  );
}
