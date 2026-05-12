import { PageLayout } from '../components/templates/PageLayout';
import { Navbar } from '../components/organisms/Navbar';
import { AboutHero } from '../components/organisms/AboutHero';
import { AboutOrigin } from '../components/organisms/AboutOrigin';
import { AboutTimeline } from '../components/organisms/AboutTimeline';
import { AboutSuccessCases } from '../components/organisms/AboutSuccessCases';
import { AboutMission } from '../components/organisms/AboutMission';
import { AboutCTA } from '../components/organisms/AboutCTA';
import { Footer } from '../components/organisms/Footer';

export function AboutUsPage() {
  return (
    <PageLayout>
      <Navbar />
      <main className="pt-20" id="sobre-nosotros-page">
        <AboutHero />
        <AboutOrigin />
        <AboutTimeline />
        <AboutSuccessCases />
        <AboutMission />
        <AboutCTA />
      </main>
      <Footer />
    </PageLayout>
  );
}
