// src/components/Projects.tsx
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { ExternalLink, FileText } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

type ProjectReadmeSection = {
  heading: string;
  body: string;
};

type Project = {
  id: string;
  order: number; // 타임라인 정렬용 (숫자 클수록 최근)
  name: string;
  period: string;
  type: string;
  deploymentUrl?: string;
  repoUrl?: string;
  roleKo: string;
  roleEn: string;
  summaryKo: string;
  summaryEn: string;
  techStack: string[];
  highlightKo: string[];
  highlightEn: string[];
  readmeKo: ProjectReadmeSection[];
  readmeEn: ProjectReadmeSection[];
};

const PROJECTS: Project[] = [
  {
    id: "trpg-platform",
    order: 5,
    name: "TRPG 시나리오 플랫폼",
    period: "2025.07.10 - 진행 중 (개인 프로젝트)",
    type: "Web / Personal",
    deploymentUrl: undefined,
    repoUrl: undefined,
    roleKo: "TRPG 플랫폼 기획 · UX/UI 설계 · 프론트엔드 프로토타입 구현",
    roleEn: "Planning, UX/UI design, frontend prototype",
    summaryKo:
      "혼자 TRPG를 즐기거나 온라인 친구들과 함께 플레이할 수 있는 웹 기반 시나리오 공유 플랫폼입니다. 캐릭터, 세계관, 분기 구조를 템플릿으로 정의하고, 시나리오를 따라가며 선택지를 고를 수 있는 흐름을 설계 중입니다.",
    summaryEn:
      "A web-based TRPG scenario sharing platform for solo or online group sessions. It defines templates for characters, world, and branching structures, and lets users play scenarios through choice-based flows.",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    highlightKo: [
      "TRPG 시나리오 템플릿 구조 정의 (등장인물, 세계관, 분기 노드 등)",
      "선택지 기반 진행과 로그 기록이 가능한 화면 플로우 기획 및 프로토타입 구현",
    ],
    highlightEn: [
      "Designed TRPG scenario template structures (characters, world, branching nodes, etc.)",
      "Planned and prototyped choice-based flow with play logs for scenarios",
    ],
    readmeKo: [
      {
        heading: "📌 Summary",
        body:
          "TRPG 시나리오를 업로드하고, 혼자 혹은 온라인 친구들과 함께 플레이할 수 있는 웹 플랫폼입니다. 기존 TRPG 커뮤니티에서 사용하던 문서 위주의 시트를, 웹 UI로 더 쉽게 다룰 수 있도록 바꾸는 것을 목표로 합니다.",
      },
      {
        heading: "🤔 Background",
        body:
          "TRPG와 세계관 설정, 캐릭터 만들기를 좋아해서, 직접 만든 시나리오를 정리·공유할 수 있는 공간이 있으면 좋겠다고 생각해 시작한 프로젝트입니다. 혼자 놀더라도 ‘게임처럼’ 즐길 수 있게 만드는 것이 목표입니다.",
      },
      {
        heading: "🔍 Meaning",
        body:
          "실제 개발에 앞서 정보 구조와 화면 플로우를 먼저 설계해 보면서, 서비스 기획 단계에서 고려해야 하는 요소들(재사용 가능한 템플릿, 선택지 구조, 로그 저장 방식 등)을 직접 정의해 보고 있습니다.",
      },
      {
        heading: "🔨 Technology Stack(s)",
        body: "React, TypeScript, Vite, Tailwind CSS",
      },
      {
        heading: "⚙️ Status",
        body:
          "현재는 화면 설계 및 일부 프로토타입 구현 단계이며, 추후 시나리오 저장/불러오기 및 온라인 세션 공유 기능까지 확장할 예정입니다.",
      },
    ],
    readmeEn: [
      {
        heading: "📌 Summary",
        body:
          "A web platform for uploading and playing TRPG scenarios, either solo or with online friends. It aims to replace document-based sheets with a more intuitive web UI.",
      },
      {
        heading: "🤔 Background",
        body:
          "Since I enjoy TRPG, world building, and character creation, I wanted a place where I can整理 and share my original scenarios, and where playing them feels more like a game.",
      },
      {
        heading: "🔍 Meaning",
        body:
          "By designing information architecture and screen flows before full development, I learned how to define reusable templates, branching choices, and log structures at the planning stage.",
      },
      {
        heading: "🔨 Technology Stack(s)",
        body: "React, TypeScript, Vite, Tailwind CSS",
      },
      {
        heading: "⚙️ Status",
        body:
          "Currently at the screen-design and prototype stage. I plan to add scenario save/load and online session sharing later.",
      },
    ],
  },
  {
    id: "ddos-ai",
    order: 4,
    name: "AI 기반 DDoS 탐지 시스템",
    period: "2025.03.05 - 2025.06.23 (2인 팀 프로젝트)",
    type: "Backend / AI / Security",
    deploymentUrl: undefined,
    repoUrl: "https://github.com/go5rae/ddos-detection.git",
    roleKo: "기획 · 백엔드 개발 · ML 모델 수정 및 시스템 구조 설계",
    roleEn: "Planning, backend dev, ML model refinement & system design",
    summaryKo:
      "네트워크 패킷 기반으로 DDoS 공격을 탐지하고, 공격 유형 분류와 위험도 점수, 대응 가이드를 자동 생성하는 AI 기반 백엔드 시스템입니다. 실시간 패킷 수집, FastAPI 기반 예측 API, PDF 리포트까지 하나의 서비스 흐름으로 구성했습니다.",
    summaryEn:
      "An AI-based backend system that detects DDoS attacks from network packets, classifies attack types, and automatically generates risk scores and response guides. It connects real-time packet capture, FastAPI prediction endpoints, and PDF reporting into one flow.",
    techStack: ["Python", "FastAPI", "Scikit-learn", "Scapy", "JWT", "PDF Report"],
    highlightKo: [
      "머신러닝 기반 DDoS 탐지 모델 학습 및 하이퍼파라미터 튜닝",
      "Scapy로 실시간 패킷 수집 → FastAPI 예측 API 연동 구조 설계",
      "공격 유형·위험도 점수·대응 가이드를 포함한 리포트 자동 생성",
    ],
    highlightEn: [
      "Trained and tuned ML models for DDoS detection",
      "Designed a pipeline from Scapy-based packet capture to FastAPI prediction APIs",
      "Generated reports including attack type, risk scores, and response guides",
    ],
    readmeKo: [
      {
        heading: "📌 Summary",
        body:
          "실제/시뮬레이션 트래픽을 기반으로 DDoS 공격 여부를 예측하고, 공격 유형과 위험도를 점수화한 뒤 대응 가이드를 자동 생성하는 시스템입니다. Swagger UI로 테스트할 수 있는 API 서버와, PDF 리포트 생성 기능을 포함합니다.",
      },
      {
        heading: "🤔 Background",
        body:
          "네트워크 보안 과제에서 출발했지만, 단순 로그 분석이 아니라 ‘실시간 패킷을 수집하고 AI로 위험도를 판단하는 백엔드 서비스’를 만들어 보고 싶어 2인 팀 프로젝트로 확장했습니다.",
      },
      {
        heading: "🔍 Meaning",
        body:
          "ML 모델 구현뿐 아니라 FastAPI 기반 REST API, JWT 인증, 실시간 패킷 수집 스크립트(realtime_sniffer.py), PDF 리포트까지 연결하면서 실제 서비스에 가까운 백엔드 아키텍처를 경험한 프로젝트입니다.",
      },
      {
        heading: "🔨 Technology Stack(s)",
        body:
          "Python, FastAPI, Scikit-learn, Scapy, Uvicorn, JWT, ReportLab(or 기타 PDF 라이브러리)",
      },
      {
        heading: "⚙️ Setup & Usage",
        body: [
          "# Install packages",
          "pip install -r requirements.txt",
          "",
          "# Run API server",
          "uvicorn main:app --reload",
          "",
          "# (Optional) Run real-time packet sniffer",
          "python realtime_sniffer.py",
        ].join("\n"),
      },
    ],
    readmeEn: [
      {
        heading: "📌 Summary",
        body:
          "An AI-based DDoS detection system that predicts attack presence and type from packet features, assigns risk scores, and auto-generates response guides. It ships with a FastAPI server (with Swagger UI) and PDF report generation.",
      },
      {
        heading: "🤔 Background",
        body:
          "Starting from a network security assignment, I wanted to build not just an ML model but a full backend service that can capture traffic in real time and evaluate risk using AI.",
      },
      {
        heading: "🔍 Meaning",
        body:
          "By connecting an ML model, FastAPI REST APIs, JWT auth, real-time packet collection, and PDF reporting, I gained experience designing backend architecture closer to a real-world service.",
      },
      {
        heading: "🔨 Technology Stack(s)",
        body:
          "Python, FastAPI, Scikit-learn, Scapy, Uvicorn, JWT, ReportLab(or other PDF libraries)",
      },
      {
        heading: "⚙️ Setup & Usage",
        body: [
          "# Install packages",
          "pip install -r requirements.txt",
          "",
          "# Run API server",
          "uvicorn main:app --reload",
          "",
          "# (Optional) Run real-time sniffer",
          "python realtime_sniffer.py",
        ].join("\n"),
      },
    ],
  },
  {
    id: "ecopath",
    order: 3,
    name: "EcoPath – 친환경 루틴 만들기 앱",
    period: "2025.03.05 - 2025.06.23 (팀 프로젝트)",
    type: "Android / Frontend",
    deploymentUrl: undefined,
    repoUrl: undefined,
    roleKo: "서비스 설계 · Android 앱 프론트엔드 · UI/UX 디자인",
    roleEn: "Service design, Android frontend, UI/UX",
    summaryKo:
      "일상 속 친환경 행동을 ‘루틴’으로 만들고 기록할 수 있는 Android 앱입니다. 포인트·랭킹보다, 사진과 피드를 중심으로 친환경 행동을 공유하는 캠페인 느낌의 인터페이스를 설계했습니다.",
    summaryEn:
      "An Android app that helps users build eco-friendly habits as routines and share them with photos in a community feed, focusing on a light campaign-like experience rather than points or rankings.",
    techStack: ["Kotlin", "Android Studio", "XML UI", "Firebase(계획)"],
    highlightKo: [
      "핵심 화면(온보딩, 로그인/회원가입, 메인 피드, 루틴 등록) 플로우 설계 및 구현",
      "사진 기반 친환경 활동 공유 피드 UI 기획 및 구현",
    ],
    highlightEn: [
      "Designed and implemented core flows: onboarding, auth, main feed, routine creation",
      "Planned and implemented a photo-based campaign-like eco activity feed UI",
    ],
    readmeKo: [
      {
        heading: "📌 Summary",
        body:
          "EcoPath는 사용자가 오늘 실천한 친환경 행동을 ‘루틴’ 단위로 기록하고, 사진과 함께 공유할 수 있는 Android 애플리케이션입니다. 사용자는 체크인하듯 친환경 루틴을 쌓아가며, 다른 사람들의 실천도 피드에서 확인할 수 있습니다.",
      },
      {
        heading: "🤔 Background",
        body:
          "탄소 수치나 통계만 보여주는 서비스보다는, 가볍게 ‘오늘 나 이런 거 했다’를 기록하고 공유하는 경험이 더 동기부여가 된다고 생각해 기획했습니다.",
      },
      {
        heading: "🔍 Meaning",
        body:
          "안드로이드 프론트엔드와 UI/UX 디자인을 직접 맡아, 화면 설계부터 실제 구현까지 전체 앱 플로우를 경험한 프로젝트입니다.",
      },
      {
        heading: "🔨 Technology Stack(s)",
        body: "Android, Kotlin, XML UI, (Planned) Firebase, Room 등",
      },
      {
        heading: "⚙️ Setup & Usage",
        body: [
          "1) Android Studio로 프로젝트 열기",
          "2) 에뮬레이터 또는 실제 기기에 빌드",
          "3) 회원가입 후 Eco 루틴 등록 및 피드 업로드 흐름 테스트",
        ].join("\n"),
      },
    ],
    readmeEn: [
      {
        heading: "📌 Summary",
        body:
          "EcoPath is an Android app where users record eco-friendly actions as routines and share them with photos. Instead of focusing on numbers, it emphasizes a light campaign-like experience.",
      },
      {
        heading: "🤔 Background",
        body:
          "I felt that simple, shareable eco actions are more motivating than just seeing carbon statistics, so I designed a service where users can say, “This is what I did today.”",
      },
      {
        heading: "🔍 Meaning",
        body:
          "By taking ownership of Android frontend and UI/UX, I experienced the entire flow from screen design to actual implementation.",
      },
      {
        heading: "🔨 Technology Stack(s)",
        body: "Android, Kotlin, XML UI, (Planned) Firebase, Room, etc.",
      },
      {
        heading: "⚙️ Setup & Usage",
        body: [
          "1) Open the project in Android Studio",
          "2) Build on an emulator or real device",
          "3) Sign up, create eco routines, and test posting on the feed",
        ].join("\n"),
      },
    ],
  },
  {
    id: "studylog",
    order: 2,
    name: "StudyLog – 학습 기록용 미니 웹 서비스",
    period: "2024.12.17 - 2025.02.04 (개인 프로젝트)",
    type: "Frontend / Simple Backend",
    deploymentUrl: undefined,
    repoUrl: undefined,
    roleKo: "학습 기록 UI 설계 · 태그 필터링 · 간단한 상태 관리 구현",
    roleEn: "UI design, tag-based filtering, simple state management",
    summaryKo:
      "하루 공부 내용을 간단하게 기록하고, 태그별로 정리해 나중에 다시 찾아볼 수 있도록 만든 미니 웹 서비스입니다. ‘오늘 뭐 했지?’를 빠르게 확인하는 데 초점을 맞췄습니다.",
    summaryEn:
      "A mini web service for quickly logging what you studied today and organizing logs by tags, optimized for fast daily review.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    highlightKo: [
      "React + TypeScript 기반 컴포넌트 분리 및 상태 관리 연습",
      "태그 기반 필터링 및 간단한 검색 기능 구현",
    ],
    highlightEn: [
      "Practiced component design and state management with React + TypeScript",
      "Implemented tag-based filtering and simple search features",
    ],
    readmeKo: [
      {
        heading: "📌 Summary",
        body:
          "StudyLog는 하루 학습 내용을 짧게 기록하고, 태그로 분류해 나중에 다시 찾아볼 수 있는 학습 기록용 미니 웹 서비스입니다. 캘린더보다 ‘오늘 한 것’을 빠르게 훑어보는 데 초점을 맞추었습니다.",
      },
      {
        heading: "🤔 Background",
        body:
          "Notion에만 기록해 두면 ‘오늘 뭐 했지?’를 한 번에 보기 어렵다는 점이 아쉬워, 아주 가벼운 전용 도구를 직접 만들어 보게 되었습니다.",
      },
      {
        heading: "🔍 Meaning",
        body:
          "실제 프로젝트라는 전제로 React + TypeScript + Tailwind 조합을 사용하여, 리스트 렌더링·검색·필터링·상태 관리를 연습한 프로젝트입니다.",
      },
      {
        heading: "🔨 Technology Stack(s)",
        body: "React, TypeScript, Vite, Tailwind CSS",
      },
      {
        heading: "⚙️ Setup & Usage",
        body: [
          "# Install packages",
          "npm install",
          "",
          "# Run dev server",
          "npm run dev",
        ].join("\n"),
      },
    ],
    readmeEn: [
      {
        heading: "📌 Summary",
        body:
          "StudyLog is a small web app that lets you log what you studied today and organize it with tags, focusing on quick daily review rather than full calendar features.",
      },
      {
        heading: "🤔 Background",
        body:
          "Using only Notion made it hard to see “what I did today” at a glance, so I decided to build a dedicated lightweight tool.",
      },
      {
        heading: "🔍 Meaning",
        body:
          "Under the assumption of a real project, I used React + TypeScript + Tailwind to practice list rendering, search, filtering, and state management.",
      },
      {
        heading: "🔨 Technology Stack(s)",
        body: "React, TypeScript, Vite, Tailwind CSS",
      },
      {
        heading: "⚙️ Setup & Usage",
        body: [
          "# Install packages",
          "npm install",
          "",
          "# Run dev server",
          "npm run dev",
        ].join("\n"),
      },
    ],
  },
  {
    id: "paw",
    order: 1,
    name: "PAW! – 걸음수 기반 가상 펫 키우기 앱",
    period: "2024.08.26 - 2024.12.09 (개인 프로젝트)",
    type: "Android / Gamified Fitness",
    deploymentUrl: undefined,
    repoUrl: undefined,
    roleKo: "앱 기획 · 단독 개발",
    roleEn: "Planning & solo development",
    summaryKo:
      "걸음수 데이터를 기반으로 가상 반려동물을 키우는 게임형 운동 앱입니다. 사용자의 하루 걸음수가 많을수록 펫이 성장하고, 애니메이션과 연출로 보상을 느낄 수 있도록 설계했습니다.",
    summaryEn:
      "A gamified walking app where users raise a virtual pet using real-world step counts. The more you walk, the more your pet grows with animations and feedback.",
    techStack: ["Kotlin", "Android Studio", "Google Fit API", "Room DB", "Lottie"],
    highlightKo: [
      "Google Fit API를 통해 실제 걸음수 데이터를 연동",
      "걸음수에 따라 펫의 상태/애니메이션이 달라지는 성장 로직 구현",
    ],
    highlightEn: [
      "Integrated real step count data via Google Fit API",
      "Implemented growth logic where the pet’s state and animations change based on steps",
    ],
    readmeKo: [
      {
        heading: "📌 Summary",
        body:
          "PAW!는 사용자의 걸음수를 기반으로 가상 펫을 키우는 Android 앱입니다. 단순 걸음수 그래프 대신, 캐릭터 성장과 연출에 집중해 운동 습관 형성을 돕는 것이 목적입니다.",
      },
      {
        heading: "🤔 Background",
        body:
          "운동 기록 앱은 많지만, 숫자 위주라 재미가 부족하다고 느껴 ‘펫 키우기’ 요소를 결합한 프로젝트를 기획했습니다.",
      },
      {
        heading: "🔍 Meaning",
        body:
          "외부 헬스 데이터(Google Fit) 연동, 애니메이션(Lottie) 활용, Room DB를 이용한 간단한 기록 저장 등 Android 개발의 여러 요소를 한 번에 경험한 프로젝트입니다.",
      },
      {
        heading: "🔨 Technology Stack(s)",
        body: "Kotlin, Android Studio, Google Fit API, Room DB, Lottie",
      },
      {
        heading: "⚙️ Setup & Usage",
        body: [
          "1) Android Studio에서 프로젝트 열기",
          "2) Google Fit API 키 설정",
          "3) 앱 빌드 후, 걸음수 동기화 및 펫 성장 확인",
        ].join("\n"),
      },
    ],
    readmeEn: [
      {
        heading: "📌 Summary",
        body:
          "PAW! is an Android app where you raise a virtual pet using your daily step count. Instead of charts, it focuses on character growth and feedback animations.",
      },
      {
        heading: "🤔 Background",
        body:
          "I felt most fitness apps were too number-centric, so I combined step tracking with a virtual pet concept to make walking more fun.",
      },
      {
        heading: "🔍 Meaning",
        body:
          "Through this project, I experienced integrating external health data (Google Fit), using animations (Lottie), and storing data with Room DB in an Android app.",
      },
      {
        heading: "🔨 Technology Stack(s)",
        body: "Kotlin, Android Studio, Google Fit API, Room DB, Lottie",
      },
      {
        heading: "⚙️ Setup & Usage",
        body: [
          "1) Open the project in Android Studio",
          "2) Configure Google Fit API keys",
          "3) Build the app, sync step data, and observe pet growth",
        ].join("\n"),
      },
    ],
  },
];

export default function Projects() {
  const { language } = useLanguage();
  const isKo = language === "ko";
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // order 기준으로 최신 → 과거 순 정렬 (타임라인)
  const sortedProjects = [...PROJECTS].sort((a, b) => b.order - a.order);

  return (
    <section id="projects" className="py-16">
      <div className="container">
        {/* 헤더 */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <p className="text-sm text-primary font-semibold">
              03. {isKo ? "Projects" : "Projects"}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-1">
              {isKo ? "프로젝트 타임라인" : "Project Timeline"}
            </h2>
            <p className="text-sm md:text-base text-muted-foreground mt-2 max-w-2xl">
              {isKo
                ? "학기 팀프로젝트와 개인 프로젝트를 시간 순으로 정리했습니다. 각각의 README 스타일 상세 내용을 모달로 확인할 수 있습니다."
                : "A chronological list of team and personal projects. You can view README-style details for each project in a modal."}
            </p>
          </div>
        </div>

        {/* 타임라인 레이아웃 */}
        <div className="relative border-l border-border/60 pl-6 space-y-10">
          {sortedProjects.map((project) => {
            const readmeSections = isKo ? project.readmeKo : project.readmeEn;
            const highlight = isKo ? project.highlightKo : project.highlightEn;
            const role = isKo ? project.roleKo : project.roleEn;
            const summary = isKo ? project.summaryKo : project.summaryEn;

            return (
              <div key={project.id} className="relative group">
                {/* 타임라인 점 */}
                <span className="absolute -left-[11px] top-3 w-5 h-5 rounded-full bg-primary shadow ring-2 ring-background group-hover:scale-110 group-hover:bg-primary/90 transition-transform" />

                <Card
                  className="
                    glass-card shadow-soft border border-border/60 
                    transition-all duration-200 
                    group-hover:-translate-y-1.5 group-hover:shadow-2xl group-hover:border-primary/60 group-hover:bg-muted/40
                  "
                >
                  <CardContent className="p-6 space-y-4">
                    {/* 상단: 제목 + 기간 + 타입 */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                      <div className="space-y-1">
                        <h3 className="text-lg md:text-xl font-semibold">
                          {project.name}
                        </h3>
                        <p className="text-xs md:text-sm text-muted-foreground">
                          {project.period}
                        </p>
                        <p className="mt-1 text-xs font-medium text-primary/90">
                          {role}
                        </p>
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-2">
                        <span className="inline-flex items-center rounded-full bg-primary/8 px-3 py-1 text-[11px] font-medium text-primary border border-primary/20">
                          {project.type}
                        </span>
                        <div className="flex flex-wrap gap-2 justify-end">
                          {project.repoUrl && (
                            <Button
                              asChild
                              size="xs"
                              variant="outline"
                              className="h-7 px-2 rounded-full text-[11px]"
                            >
                              <a
                                href={project.repoUrl}
                                target="_blank"
                                rel="noreferrer"
                              >
                                GitHub
                                <ExternalLink className="w-3 h-3 ml-1" />
                              </a>
                            </Button>
                          )}
                          {project.deploymentUrl && (
                            <Button
                              asChild
                              size="xs"
                              variant="outline"
                              className="h-7 px-2 rounded-full text-[11px]"
                            >
                              <a
                                href={project.deploymentUrl}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Live
                                <ExternalLink className="w-3 h-3 ml-1" />
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* 요약 */}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {summary}
                    </p>

                    {/* 하이라이트 */}
                    <div className="space-y-1">
                      <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wide">
                        {isKo ? "주요 포인트" : "Highlights"}
                      </p>
                      <ul className="text-xs text-muted-foreground/90 space-y-1.5">
                        {highlight.map((item) => (
                          <li key={item}>• {item}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack 태그 */}
                    <div className="space-y-1">
                      <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wide">
                        Tech Stack
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-background text-[11px] border-border/60"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* 상세 모달 버튼 */}
                    <div className="pt-2 border-t border-border/60 mt-1 flex justify-end">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="gap-2 text-xs px-0 hover:text-primary"
                        onClick={() => setActiveProject(project)}
                      >
                        <FileText className="w-4 h-4" />
                        {isKo ? "README 스타일 상세 보기" : "View README-style details"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>

      {/* 상세 모달 */}
      <Dialog
        open={!!activeProject}
        onOpenChange={(open) => {
          if (!open) setActiveProject(null);
        }}
      >
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          {activeProject && (
            <>
              <DialogHeader>
                <DialogTitle>{activeProject.name}</DialogTitle>
                <DialogDescription className="space-y-1 text-xs">
                  <p className="text-muted-foreground">
                    {activeProject.period} ·{" "}
                    {isKo ? activeProject.roleKo : activeProject.roleEn}
                  </p>
                  <p className="text-muted-foreground/80">
                    {isKo
                      ? activeProject.summaryKo
                      : activeProject.summaryEn}
                  </p>
                </DialogDescription>
              </DialogHeader>

              <div className="mt-4 space-y-4 text-sm leading-relaxed">
                {(isKo
                  ? activeProject.readmeKo
                  : activeProject.readmeEn
                ).map((section) => (
                  <div key={section.heading} className="space-y-1.5">
                    <p className="font-semibold">{section.heading}</p>
                    <p className="text-muted-foreground whitespace-pre-wrap">
                      {section.body}
                    </p>
                  </div>
                ))}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
