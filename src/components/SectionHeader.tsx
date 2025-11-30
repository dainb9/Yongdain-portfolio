// src/components/SectionHeader.tsx
import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow: string;     
  title: string;       
  subtitle?: string;    // 섹션 설명 문장
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "mb-10 flex flex-col gap-3",
        isCenter && "items-center text-center",
        className
      )}
      data-aos="fade-up"
    >
      <div
        className={cn(
          "inline-flex items-center gap-3 text-[0.65rem] md:text-xs font-semibold tracking-[0.25em] uppercase text-primary/70",
          isCenter && "justify-center"
        )}
      >
        <span className="h-px w-8 bg-primary/30" />
        <span>{eyebrow}</span>
        <span className="h-px w-8 bg-primary/30" />
      </div>

      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="max-w-2xl text-sm md:text-base text-muted-foreground leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
