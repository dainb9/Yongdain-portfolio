// src/lib/pdf-generator.ts
import jsPDF from "jspdf";
import { PROFILE, EXPERIENCES, SKILLS } from "./data";

/**
 * Generate a 1–2 page resume style PDF.
 * NOTE:
 * - jsPDF 기본 폰트는 한글을 제대로 지원하지 않아서
 *   PDF 내용은 영어 위주로 구성했습니다.
 * - 한글까지 포함된 PDF가 필요하면, 브라우저의 Print 기능으로
 *   "PDF로 저장"을 사용하는 것을 추천합니다.
 */
export const generateResumePDF = (language: "ko" | "en") => {
  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const margin = 12;
  const contentWidth = pageWidth - margin * 2;
  const lineHeight = 5;

  let y = margin;

  const addPageIfNeeded = (extraHeight: number) => {
    if (y + extraHeight > pageHeight - margin) {
      pdf.addPage();
      y = margin;
    }
  };

  const addHeaderText = (text: string, size = 22, bold = false) => {
    pdf.setFont("helvetica", bold ? "bold" : "normal");
    pdf.setFontSize(size);
    addPageIfNeeded(lineHeight);
    pdf.text(text, margin, y);
    y += lineHeight + 2;
  };

  const addLabelValueRow = (items: string[]) => {
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(10);

    const joined = items.filter(Boolean).join("  |  ");
    const lines = pdf.splitTextToSize(joined, contentWidth);

    addPageIfNeeded(lines.length * lineHeight);
    pdf.text(lines, margin, y);
    y += lines.length * lineHeight + 2;
  };

  const addSectionTitle = (text: string) => {
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(13);

    addPageIfNeeded(lineHeight * 2);
    pdf.text(text, margin, y);
    y += lineHeight;

    pdf.setDrawColor(180);
    pdf.setLineWidth(0.4);
    pdf.line(margin, y, pageWidth - margin, y);
    y += lineHeight / 2;
  };

  const addParagraph = (text: string) => {
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(10);

    const lines = pdf.splitTextToSize(text, contentWidth);
    addPageIfNeeded(lines.length * lineHeight);
    pdf.text(lines, margin, y);
    y += lines.length * lineHeight + 1;
  };

  const addBulletList = (items: string[]) => {
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(10);

    items.forEach((item) => {
      const lines = pdf.splitTextToSize("• " + item, contentWidth);
      addPageIfNeeded(lines.length * lineHeight);
      pdf.text(lines, margin, y);
      y += lines.length * lineHeight;
    });

    y += 1;
  };

  // ========== HEADER ==========
  const titleLine =
    "Front-End & AI-Backed Web Developer (Student)";

  addHeaderText(PROFILE.name, 22, true);
  addHeaderText(titleLine, 11, false);

  addLabelValueRow([
    PROFILE.email,
    PROFILE.phone || "",
    PROFILE.github || "",
  ]);

  y += 2;

  // ========== SUMMARY ==========
  addSectionTitle("Profile");

  // PDF는 영어 위주로: summaryEn 사용
  addParagraph(PROFILE.summaryEn);

  // ========== EXPERIENCE ==========
  if (EXPERIENCES.length) {
    addSectionTitle("Experience & Activities");

    EXPERIENCES.forEach((exp) => {
      const roleLine = `${exp.roleEn} · ${exp.company} (${exp.period})`;

      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(11);
      addPageIfNeeded(lineHeight * 2);
      pdf.text(roleLine, margin, y);
      y += lineHeight;

      if (exp.descriptionEn) {
        addParagraph(exp.descriptionEn);
      }

      const bullets =
        exp.achievementsEn && exp.achievementsEn.length
          ? exp.achievementsEn
          : exp.achievements;

      if (bullets && bullets.length) {
        addBulletList(
          bullets.map((b) =>
            typeof b === "string" ? b : String(b)
          )
        );
      }

      y += 1;
    });
  }

  // ========== SKILLS ==========
  addSectionTitle("Key Skills & Tech Stack");

  SKILLS.forEach((group) => {
    const category =
      group.categoryEn || group.category;

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(10);
    addPageIfNeeded(lineHeight * 2);
    pdf.text(category, margin, y);
    y += lineHeight;

    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(10);
    const line = group.items.join(", ");
    const lines = pdf.splitTextToSize(line, contentWidth);
    addPageIfNeeded(lines.length * lineHeight);
    pdf.text(lines, margin + 2, y);
    y += lines.length * lineHeight + 1;
  });

  // ========== EDUCATION ==========
  if (PROFILE.education && PROFILE.education.length) {
    addSectionTitle("Education");

    PROFILE.education.forEach((edu) => {
      const line1 = `${edu.school} (${edu.period})`;
      const line2 = edu.degree || edu.degreeKo;

      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(11);
      addPageIfNeeded(lineHeight * 2);
      pdf.text(line1, margin, y);
      y += lineHeight;

      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(10);
      addParagraph(line2);
    });
  }

  // ========== FOOTER NOTE ==========
  addPageIfNeeded(lineHeight * 2);
  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(8);
  pdf.setTextColor(130);
  pdf.text(
    "This PDF was generated from the online portfolio (React + Vite).",
    margin,
    pageHeight - margin
  );

  const fileName =
    language === "ko"
      ? "이력서_용다인.pdf"
      : "YongDain_Resume.pdf";

  pdf.save(fileName);
};
