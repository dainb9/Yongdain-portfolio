// src/components/Header.tsx
import React, { useEffect, useState } from "react";
import { Link } from "wouter";
import { Menu, X, Printer, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "@/contexts/ThemeContext";

type NavId = "about" | "resume" | "projects" | "contact";

interface HeaderProps {
  activeSection?: NavId;
}

export default function Header({ activeSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: { label: string; href: `#${NavId}`; id: NavId }[] = [
    { label: "About", href: "#about", id: "about" },
    { label: "Resume", href: "#resume", id: "resume" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent no-print",
        isScrolled ? "glass h-16" : "bg-transparent h-20"
      )}
    >
      <div className="container h-full flex items-center justify-between">
        {/* 로고 */}
        <Link href="/">
          <a className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity">
            Yong&nbsp;Dain<span className="text-primary">.dev</span>
          </a>
        </Link>

        {/* 데스크톱 내비게이션 */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  "text-sm font-medium transition-colors border-b-2 border-transparent pb-1",
                  isActive
                    ? "text-primary border-primary"
                    : "text-muted-foreground hover:text-primary"
                )}
              >
                {item.label}
              </a>
            );
          })}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            className="gap-2"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="gap-2"
            onClick={() => window.print()}
          >
            <Printer className="w-4 h-4" />
            Print
          </Button>
        </nav>

        {/* 모바일 메뉴 버튼 */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* 모바일 내비게이션 */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border p-4 md:hidden flex flex-col gap-4 shadow-lg animate-in slide-in-from-top-5">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  "text-lg font-medium py-2 px-4 rounded-md transition-colors",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "hover:bg-muted text-foreground"
                )}
              >
                {item.label}
              </a>
            );
          })}

          <Button
            variant="ghost"
            className="w-full gap-2 justify-start"
            onClick={toggleTheme}
          >
            {theme === "dark" ? (
              <>
                <Sun className="w-4 h-4" />
                Light Mode
              </>
            ) : (
              <>
                <Moon className="w-4 h-4" />
                Dark Mode
              </>
            )}
          </Button>
          <Button className="w-full gap-2" onClick={() => window.print()}>
            <Printer className="w-4 h-4" />
            Print Resume
          </Button>
        </div>
      )}
    </header>
  );
}
