// src/components/ScrollReveal.tsx
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  as?: React.ElementType;
  delay?: number;          // ms 단위 딜레이
  once?: boolean;          // 한 번만 등장할지 여부
  className?: string;
}

export function ScrollReveal({
  children,
  as: Component = "div",
  delay = 0,
  once = true,
  className,
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            if (once) observer.disconnect();
          } else if (!once) {
            setInView(false);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "-10% 0px -30% 0px",
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [once]);

  return (
    <Component
      ref={ref as any}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-all duration-700 ease-out will-change-transform will-change-opacity",
        "motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        className
      )}
    >
      {children}
    </Component>
  );
}
