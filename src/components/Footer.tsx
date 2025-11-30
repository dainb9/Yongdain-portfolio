// src/components/Footer.tsx
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/20">
      <div className="container py-6 md:py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs md:text-sm text-muted-foreground">
        {/* Left: 이름 / 역할 */}
        <div className="space-y-1 text-center md:text-left">
          <p className="font-semibold text-foreground text-sm md:text-base">
            Yong Dain
          </p>
          <p>Front-End &amp; AI-Backed Web Developer (Student)</p>
        </div>

        {/* Center: 아이콘 링크들 */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/inha-dev"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          {/* LinkedIn 계정 없으면 나중에 채워 넣어도 됨 */}
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:cccohdlakk339@naver.com"
            className="hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Right: 카피라이트 / 기술 스택 */}
        <div className="space-y-1 text-center md:text-right">
          <p>© {new Date().getFullYear()} Yong Dain. All rights reserved.</p>
          <p className="text-[11px] md:text-xs">
            Built with React, TypeScript, Vite &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
