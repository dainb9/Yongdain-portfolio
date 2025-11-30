// src/lib/data.ts

import {
  Code,
  Smartphone,
  Brain,
  Gamepad,
  BookOpen,
  Terminal,
} from "lucide-react";

export const PROFILE = {
  name: "용다인",
  role: "개발자 (Web / Android / Backend)",
  roleEn: "Student Web & Android Developer",
  summary:
    "읽기 쉬운 UI와 실용적인 기능 구현을 동시에 고민하며, Frontend · Backend를 함께 경험하는 개발자입니다.",
  summaryEn:
    "A student developer who focuses on intuitive UI and practical functionality, working across frontend and backend.",
  email: "cccohdlakk339@naver.com",
  phone: "010-8899-7343",
  location: "Incheon, South Korea",
  github: "github.com/go5rae",
  linkedin: "",
  education: [
    {
      school: "Inha Technical College",
      degree: "Major in Computer Information",
      degreeKo: "컴퓨터정보과 전공",
      period: "2023.03 - 현재(졸업 예정)",
      details: "Software, AI, Security, Mobile, Web Development curriculum",
      detailsKo: "소프트웨어, AI, 보안, 모바일, 웹 개발 중심 교육 과정",
    },
  ],
};

export const PROJECTS = [
  {
    id: "ddos",
    title: "AI 기반 DDoS 탐지 시스템",
    titleEn: "AI-based DDoS Detection System",
    period: "2025.03.05 - 2025.06.23",
    github: "https://github.com/go5rae/ddos-detection.git",
    roleKo: "기획 · 백엔드 개발 · 데이터 수집 및 모델 수정",
    roleEn: "Planning · Backend development · Data & model refinement",
    type: "Team Project (2인)",
    icon: Brain,
    descriptionKo:
      "네트워크 패킷 기반으로 DDoS 공격을 탐지하고, 위험도를 분석하여 실시간 대응 가이드를 제공하는 서비스입니다.",
    descriptionEn:
      "A system detecting DDoS attacks using packet-based ML analysis, providing live response guidance.",
    tech: ["Python", "FastAPI", "Scikit-learn", "JWT", "Scapy"],
  },
  {
    id: "ecopath",
    title: "EcoPath - 친환경 루틴 만들기 앱",
    titleEn: "EcoPath - Eco-Friendly Routine App",
    period: "2025.03.05 - 2025.06.23",
    roleKo: "설계 · 앱 프론트엔드 · UI/UX 디자인",
    roleEn: "App frontend · UI/UX Design · Architecture design",
    type: "Team Project",
    icon: Smartphone,
    descriptionKo:
      "사용자가 친환경 루틴을 기록하고 공유할 수 있도록 도와주는 안드로이드 애플리케이션입니다.",
    descriptionEn:
      "An Android app that helps users record and share eco-friendly daily routines.",
    tech: ["Kotlin", "Android Studio", "Firebase", "Camera API"],
  },
  {
    id: "trpg",
    title: "TRPG 시나리오 플랫폼",
    titleEn: "TRPG Scenario Platform",
    period: "2025.07.10 - 진행중",
    roleKo: "개인 프로젝트 · 웹 UI 기획 및 개발",
    roleEn: "Personal Project · UI/UX & Web Development",
    type: "Personal",
    icon: Gamepad,
    descriptionKo:
      "TRPG 시나리오를 업로드하고, 솔로 플레이 혹은 온라인으로 즐길 수 있도록 제작 중입니다.",
    descriptionEn:
      "A platform to upload and play TRPG scenarios solo or online with others.",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    id: "studylog",
    title: "StudyLog – 학습 기록 웹 서비스",
    titleEn: "StudyLog – Study Tracking Web Service",
    period: "2024.12.17 - 2025.02.04",
    roleKo: "기획 · 프론트엔드 · 서버 구축",
    roleEn: "Planning · Frontend · Server setup",
    type: "Personal",
    icon: BookOpen,
    descriptionKo:
      "사용자가 학습 진행 상황을 효율적으로 기록하고, 통계 기반으로 학습 패턴을 파악할 수 있도록 제작했습니다.",
    descriptionEn:
      "A mini web service enabling users to track study progress and view analytics.",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    id: "paw",
    title: "PAW! – 걸음수 기반 가상 펫 키우기 앱",
    titleEn: "PAW! – Step-Based Virtual Pet App",
    period: "2024.08.26 - 2024.12.09",
    roleKo: "기획 · 단독 개발",
    roleEn: "Solo Development & Planning",
    type: "Personal",
    icon: Code,
    descriptionKo:
      "걸음수 데이터를 기반으로 귀여운 가상 동물을 키우는 게임형 운동 앱입니다.",
    descriptionEn:
      "Gamified fitness app where users raise a pet with real-world step counts.",
    tech: ["Kotlin", "Google Fit API", "Lottie", "Room DB"],
  },
];

export const EXPERIENCES = [
  {
    id: "paw",
    company: "PAW! (걸음수 기반 가상 펫 앱)",
    period: "2024.08.26 - 2024.12.09",
    roleKo: "앱 단독 개발자 / 기획자",
    roleEn: "Solo Developer",
    description:
      "걸음수 기반으로 동물을 키우는 운동 습관 형성 애플리케이션입니다.",
    descriptionEn:
      "A gamified walking app using step counting to raise a virtual pet.",
    achievements: ["Google Fit API 연동", "UI 디자인 및 앱 아키텍처 구축"],
    achievementsEn: ["Integrated Google Fit API", "UI design & app architecture"],
    tech: ["Kotlin", "Android Studio"],
  },
  {
    id: "ddos-exp",
    company: "AI 기반 DDoS 탐지 시스템",
    period: "2025.03.05 - 2025.06.23",
    roleKo: "기획 · 백엔드 개발",
    roleEn: "Planning & Backend Development",
    description:
      "네트워크 패킷 기반 공격 탐지 및 대응 가이드 제공 시스템 개발",
    descriptionEn:
      "Packet-based attack detection and realtime response guidance system",
    achievements: ["FastAPI 백엔드 구축", "ML 탐지 모델 적용"],
    achievementsEn: ["Built FastAPI backend", "Applied ML detection model"],
    tech: ["Python", "FastAPI"],
  },
  {
    id: "ecopath-exp",
    company: "EcoPath – 친환경 루틴 앱",
    period: "2025.03.05 - 2025.06.23",
    roleKo: "UI/UX 디자인 · Android Frontend",
    roleEn: "UI/UX Design & Android Frontend",
    description:
      "친환경 활동 루틴을 기록하고 시각화하는 모바일 앱 개발",
    descriptionEn:
      "Mobile app for tracking and visualizing eco-friendly routines",
    achievements: ["디자인 시스템 구축", "카메라 기능 구현"],
    achievementsEn: ["Built design system", "Implemented camera feature"],
    tech: ["Kotlin", "Firebase"],
  },
];

export const SKILLS = [
  {
    category: "Language",
    categoryEn: "Language",
    icon: Terminal,
    items: ["Python", "JavaScript", "TypeScript", "Java", "Kotlin"],
  },
  {
    category: "Front-End",
    categoryEn: "Front-End",
    icon: Code,
    items: ["React", "TailwindCSS", "Chart.js", "HTML5", "CSS3"],
  },
  {
    category: "Back-End",
    categoryEn: "Back-End",
    icon: Brain,
    items: ["FastAPI", "Node.js", "MongoDB", "JWT", "REST API"],
  },
  {
    category: "ETC",
    categoryEn: "ETC",
    icon: Smartphone,
    items: ["Android Studio", "Figma", "Git", "Docker"],
  },
];
