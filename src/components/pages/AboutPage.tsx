import { HeaderMenu } from "@/components/ui/HeaderMenu";
import HeroAboutus from "@/components/ui/HeroAboutus";
import CTASection from "@/components/ui/CTASection";
import { Footer } from "@/components/ui/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-primary-foreground">
      <HeaderMenu />
      <HeroAboutus/>
      <CTASection />
      <Footer />
    </div>
  );
}
