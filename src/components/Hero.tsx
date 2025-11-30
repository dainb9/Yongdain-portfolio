// src/components/Hero.tsx
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PROFILE } from "@/lib/data";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { language } = useLanguage();
  const isKo = language === "ko";

  const titleMain = isKo
    ? "안녕하세요, 웹 개발자"
    : "Hello, I’m a web developer";
  const titleName = isKo ? "용다인입니다." : "Yong Dain.";
  const subtitle = isKo
    ? "읽기 편한 인터페이스와 실제로 동작하는 웹·앱 서비스를 만들고 있습니다."
    : "I build clear interfaces and working web/apps across frontend and backend.";
  const smallTag = isKo
    ? "React · FastAPI · Android를 중심으로 프로젝트를 만들어 온 개발자입니다."
    : "A student developer working mainly with React, FastAPI and Android.";

  return (
    <section className="relative overflow-hidden">
      {/* 은은한 배경 장식 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-24 w-80 h-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-40 -left-16 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container relative py-16 md:py-24 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center">
          {/* 왼쪽: 메인 카피 중심 */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-primary/10 text-primary border-primary/20 rounded-full px-3 py-1 text-xs font-medium">
                {isKo
                  ? "Front-End · Backend · AI 프로젝트 경험"
                  : "Frontend · Backend · AI projects"}
              </Badge>

              <div className="space-y-2">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
                  <span className="block">{titleMain}</span>
                  <span className="block text-primary mt-1">{titleName}</span>
                </h1>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {subtitle}
                </p>
              </div>

              <p className="text-xs md:text-sm text-muted-foreground/90 leading-relaxed max-w-xl">
                {smallTag}
              </p>
            </div>

            {/* CTA 버튼 */}
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="rounded-full px-5 md:px-6 h-10 md:h-11 text-sm font-medium shadow-soft"
              >
                <a href="#projects">
                  {isKo ? "프로젝트 보러가기" : "View projects"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>

              <Button
                variant="outline"
                asChild
                className="rounded-full px-5 md:px-6 h-10 md:h-11 text-sm font-medium border-border/70"
              >
                <a href="#contact">
                  {isKo ? "Contact" : "Contact"}
                </a>
              </Button>
            </div>

            {/* 링크/연락처 */}
            <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                {PROFILE.github && (
                  <a
                    href={`https://${PROFILE.github}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                )}
                {PROFILE.linkedin && (
                  <a
                    href={PROFILE.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 hover:text-primary transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                )}
              </div>

              <div className="h-3 w-px bg-border/70" />

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="inline-flex items-center gap-1 hover:text-primary transition-colors"
                >
                  <span>{PROFILE.email}</span>
                </a>
              </div>
            </div>
          </div>

          {/* 오른쪽: 간단한 프로필 카드 유지 */}
          <div className="lg:pl-8">
            <div className="glass-card shadow-soft rounded-2xl p-6 md:p-7 border border-border/60">
              <div className="space-y-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-1">
                    PROFILE
                  </p>
                  <p className="text-xl font-semibold">{PROFILE.name}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {isKo ? PROFILE.role : PROFILE.roleEn}
                  </p>
                </div>

                <div className="h-px bg-border/70" />

                <div className="grid grid-cols-2 gap-4 text-xs md:text-sm">
                  <div className="space-y-1">
                    <p className="text-muted-foreground/80">
                      {isKo ? "주요 분야" : "Focus"}
                    </p>
                    <p className="font-medium">
                      {isKo
                        ? "웹 프론트엔드 · AI 연동 백엔드"
                        : "Web frontend & AI-backed backend"}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-muted-foreground/80">
                      {isKo ? "관심 기술" : "Interests"}
                    </p>
                    <p className="font-medium">
                      {isKo
                        ? "React, FastAPI, Android, 패킷 분석"
                        : "React, FastAPI, Android, packet analysis"}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-muted-foreground/80">
                      {isKo ? "기반 지역" : "Location"}
                    </p>
                    <p className="font-medium">{PROFILE.location}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-muted-foreground/80">
                      {isKo ? "연락" : "Contact"}
                    </p>
                    <p className="font-medium">{PROFILE.phone}</p>
                  </div>
                </div>

                <div className="h-px bg-border/70" />

                <p className="text-xs text-muted-foreground leading-relaxed">
                  {isKo
                    ? "게임·엔터테인먼트 서비스처럼, 사용자가 ‘재미있다’고 느끼는 자연스러운 화면을 만드는 것이 목표입니다."
                    : "My goal is to build interfaces that simply feel natural—especially for game and entertainment services."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
