import { useState } from "react";
import { Mail, Phone, Github, Download, Printer, Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PROFILE } from "@/lib/data";
import { useLanguage } from "@/contexts/LanguageContext";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function Contact() {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleDownloadPDF = async () => {
    const element = document.getElementById("root");
    if (!element) return;

    const originalStyle = element.style.cssText;
    element.classList.add("pdf-mode");
    
    const noPrintElements = document.querySelectorAll(".no-print");
    noPrintElements.forEach((el) => (el as HTMLElement).style.display = "none");

    try {
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        windowWidth: 1200,
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const imgWidth = 210;
      const pageHeight = 297;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save("Min-su_Kim_Portfolio.pdf");
    } catch (error) {
      console.error("PDF generation failed:", error);
      alert(language === "ko" ? "PDF 생성 중 오류가 발생했습니다. 브라우저 인쇄 기능을 이용해주세요." : "PDF generation failed. Please use browser print function.");
    } finally {
      element.style.cssText = originalStyle;
      element.classList.remove("pdf-mode");
      noPrintElements.forEach((el) => (el as HTMLElement).style.display = "");
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("loading");

    try {
      // Simulate form submission (in production, send to backend)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Reset form
      setFormData({ name: "", email: "", message: "" });
      setFormStatus("success");
      
      // Reset status after 3 seconds
      setTimeout(() => setFormStatus("idle"), 3000);
    } catch (error) {
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 3000);
    }
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterStatus("loading");

    try {
      // Simulate newsletter subscription (in production, send to backend)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setNewsletterEmail("");
      setNewsletterStatus("success");
      
      setTimeout(() => setNewsletterStatus("idle"), 3000);
    } catch (error) {
      setNewsletterStatus("error");
      setTimeout(() => setNewsletterStatus("idle"), 3000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t("contact.title")}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="glass-card hover:border-primary/50 transition-colors">
            <CardContent className="flex flex-col items-center p-6 gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{t("contact.email")}</h3>
                <a href={`mailto:${PROFILE.email}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {PROFILE.email}
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card hover:border-primary/50 transition-colors">
            <CardContent className="flex flex-col items-center p-6 gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{t("contact.phone")}</h3>
                <a href={`tel:${PROFILE.phone}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {PROFILE.phone}
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card hover:border-primary/50 transition-colors">
            <CardContent className="flex flex-col items-center p-6 gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Github className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{t("contact.github")}</h3>
                <a href={`https://${PROFILE.github}`} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {PROFILE.github}
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <Card className="glass-card border-primary/20 shadow-lg" data-aos="fade-right">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Send className="w-5 h-5 text-primary" />
                {language === "ko" ? "메시지 보내기" : "Send Message"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {language === "ko" ? "이름" : "Name"}
                  </label>
                  <Input
                    type="text"
                    placeholder={language === "ko" ? "이름을 입력하세요" : "Your name"}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background/50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    {language === "ko" ? "이메일" : "Email"}
                  </label>
                  <Input
                    type="email"
                    placeholder={language === "ko" ? "이메일을 입력하세요" : "your@email.com"}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background/50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    {language === "ko" ? "메시지" : "Message"}
                  </label>
                  <textarea
                    placeholder={language === "ko" ? "메시지를 입력하세요" : "Your message"}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full px-3 py-2 bg-background/50 border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                </div>

                {formStatus === "success" && (
                  <div className="flex items-center gap-2 p-3 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-md text-green-700 dark:text-green-400">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm">
                      {language === "ko" ? "메시지가 전송되었습니다!" : "Message sent successfully!"}
                    </span>
                  </div>
                )}

                {formStatus === "error" && (
                  <div className="flex items-center gap-2 p-3 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-md text-red-700 dark:text-red-400">
                    <AlertCircle className="w-4 h-4" />
                    <span className="text-sm">
                      {language === "ko" ? "전송 중 오류가 발생했습니다." : "Error sending message."}
                    </span>
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full gap-2"
                  disabled={formStatus === "loading"}
                >
                  <Send className="w-4 h-4" />
                  {formStatus === "loading"
                    ? language === "ko" ? "전송 중..." : "Sending..."
                    : language === "ko" ? "메시지 전송" : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Newsletter Subscription */}
          <Card className="glass-card border-primary/20 shadow-lg" data-aos="fade-left">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary" />
                {language === "ko" ? "뉴스레터 구독" : "Newsletter"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-sm leading-relaxed">
                {language === "ko"
                  ? "최신 프로젝트, 기술 글, 경력 업데이트를 이메일로 받아보세요. 월 1-2회 정도 발송됩니다."
                  : "Subscribe to get updates on new projects, technical articles, and career milestones. We send 1-2 emails per month."}
              </p>

              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {language === "ko" ? "이메일 주소" : "Email Address"}
                  </label>
                  <Input
                    type="email"
                    placeholder={language === "ko" ? "your@email.com" : "your@email.com"}
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    required
                    className="bg-background/50"
                  />
                </div>

                {newsletterStatus === "success" && (
                  <div className="flex items-center gap-2 p-3 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-md text-green-700 dark:text-green-400">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm">
                      {language === "ko" ? "구독 완료되었습니다!" : "Subscription confirmed!"}
                    </span>
                  </div>
                )}

                {newsletterStatus === "error" && (
                  <div className="flex items-center gap-2 p-3 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-md text-red-700 dark:text-red-400">
                    <AlertCircle className="w-4 h-4" />
                    <span className="text-sm">
                      {language === "ko" ? "구독 중 오류가 발생했습니다." : "Subscription error."}
                    </span>
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full gap-2"
                  disabled={newsletterStatus === "loading"}
                >
                  <Mail className="w-4 h-4" />
                  {newsletterStatus === "loading"
                    ? language === "ko" ? "구독 중..." : "Subscribing..."
                    : language === "ko" ? "뉴스레터 구독" : "Subscribe"}
                </Button>
              </form>

              <div className="text-xs text-muted-foreground border-t border-border pt-4">
                <p>
                  {language === "ko"
                    ? "✓ 스팸 메일 없음 • ✓ 언제든지 구독 취소 가능"
                    : "✓ No spam • ✓ Unsubscribe anytime"}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Download & Print Section */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 no-print">
          <Button size="lg" className="gap-2" onClick={handleDownloadPDF}>
            <Download className="w-4 h-4" />
            {t("contact.download")}
          </Button>
          <Button size="lg" variant="outline" className="gap-2" onClick={() => window.print()}>
            <Printer className="w-4 h-4" />
            {t("contact.print")}
          </Button>
        </div>
      </div>
    </section>
  );
}
