import { createContext, useContext, useState, ReactNode } from "react";

type Language = "ko" | "en";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  ko: {
    "nav.about": "About",
    "nav.resume": "Resume",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "hero.title": "Crafting Crystal Clear Web Experiences",
    "hero.cta.projects": "View Projects",
    "hero.cta.resume": "Resume",
    "about.title": "About Me",
    "about.description": "사용자 경험(UX)과 기술적 성능 사이의 균형을 찾는 것을 즐깁니다. 단순히 기능이 동작하는 것을 넘어, 사용자가 \"기분 좋게\" 사용할 수 있는 인터페이스를 구현하는 데 집중합니다. 최신 웹 표준을 준수하며, 유지보수 가능한 깨끗한 코드를 작성하기 위해 노력합니다.",
    "about.techstack": "Tech Stack",
    "resume.title": "Resume",
    "resume.subtitle": "Professional Experience & Education",
    "resume.experience": "Experience",
    "resume.education": "Education",
    "resume.skills": "Skill Proficiency",
    "resume.coverletter": "Cover Letter Summary",
    "resume.coverletter.text": "\"기술적 깊이와 사용자 경험에 대한 집요함을 바탕으로, 비즈니스 가치를 창출하는 개발자가 되고자 합니다. 특히 데이터 시각화와 성능 최적화 분야에서 탁월한 성과를 만들어왔으며, 팀 내에서 기술적 난제를 해결하는 해결사 역할을 자처합니다.\"",
    "projects.title": "Featured Projects",
    "projects.subtitle": "실제 문제를 해결하고 비즈니스 가치를 창출한 주요 프로젝트들입니다. 각 카드를 클릭하여 상세한 문제 해결 과정과 성과를 확인하세요.",
    "projects.filter": "Filter by Technology",
    "projects.all": "All",
    "projects.viewdetails": "View Details",
    "projects.problem": "Problem",
    "projects.solution": "Solution",
    "projects.result": "Result",
    "projects.techstack": "Tech Stack",
    "projects.role": "Role & Contribution",
    "projects.role.label": "Role:",
    "projects.team": "Team:",
    "projects.contribution": "Contribution:",
    "contact.title": "Get In Touch",
    "contact.subtitle": "새로운 기회와 협업에 언제나 열려있습니다. 프로젝트 제안이나 기술적인 논의 등 어떤 주제로든 편하게 연락주세요.",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.github": "GitHub",
    "contact.download": "Download PDF",
    "contact.print": "Print Resume",
  },
  en: {
    "nav.about": "About",
    "nav.resume": "Resume",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "hero.title": "Crafting Crystal Clear Web Experiences",
    "hero.cta.projects": "View Projects",
    "hero.cta.resume": "Resume",
    "about.title": "About Me",
    "about.description": "I enjoy finding balance between user experience (UX) and technical performance. Beyond making features work, I focus on implementing interfaces that users genuinely enjoy using. I adhere to modern web standards and strive to write maintainable, clean code.",
    "about.techstack": "Tech Stack",
    "resume.title": "Resume",
    "resume.subtitle": "Professional Experience & Education",
    "resume.experience": "Experience",
    "resume.education": "Education",
    "resume.skills": "Skill Proficiency",
    "resume.coverletter": "Cover Letter Summary",
    "resume.coverletter.text": "\"I aspire to be a developer who creates business value based on technical depth and commitment to user experience. I have achieved outstanding results particularly in data visualization and performance optimization, and I take on the role of a problem-solver for technical challenges within the team.\"",
    "projects.title": "Featured Projects",
    "projects.subtitle": "Key projects that solved real problems and created business value. Click each card to explore the problem-solving process and results in detail.",
    "projects.filter": "Filter by Technology",
    "projects.all": "All",
    "projects.viewdetails": "View Details",
    "projects.problem": "Problem",
    "projects.solution": "Solution",
    "projects.result": "Result",
    "projects.techstack": "Tech Stack",
    "projects.role": "Role & Contribution",
    "projects.role.label": "Role:",
    "projects.team": "Team:",
    "projects.contribution": "Contribution:",
    "contact.title": "Get In Touch",
    "contact.subtitle": "I'm always open to new opportunities and collaborations. Feel free to reach out about project proposals or technical discussions.",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.github": "GitHub",
    "contact.download": "Download PDF",
    "contact.print": "Print Resume",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("ko");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "ko" ? "en" : "ko"));
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.ko] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
