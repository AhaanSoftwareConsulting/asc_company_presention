import { useEffect, useState } from "react";

import PresentationNav from "../navigation/PresentationNav";
import ProgressIndicator from "../navigation/ProgressIndicator";

import CompanyIntro from "../components/CompanyIntro";
import AboutCompany from "../components/AboutCompany";
import Services from "../components/Services";
import TechnologyStack from "../components/TechnologyStack";
import OurProcess from "../components/OurProcess";
import Solutions from "../components/Solutions";
import WhyAhaan from "../components/WhyAhaan";
import ContactCTA from "../components/ContactCTA";

import TeamTree from "../components/TeamTree";
import CeoSection from "./CeoSection";
import ExecutiveSummary from "./ExecutiveSummary";
import FutureGoals from "./FutureGoals";
import BigTextSection from "./BigTextSection";

const sections = [
  "company-intro",
  "about",
  "services",
  "technology",
  "process",
  "solutions",
  "team",
  "why-ahaan",
  "contact",
];

const CompanyProfile = () => {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((id, index) => {
        const element = document.getElementById(id);

        if (!element) return;

        const top = element.offsetTop;
        const bottom = top + element.offsetHeight;

        if (scrollPosition >= top && scrollPosition < bottom) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-white">
      <PresentationNav />

      <ProgressIndicator
        activeSection={activeSection}
        totalSections={sections.length}
      />

      <CompanyIntro />

      <AboutCompany />

      <ExecutiveSummary />

      <CeoSection />

      <Services />

      <TechnologyStack />

      <OurProcess />

      {/* <Solutions /> */}

      {/* Full Width Team Section */}
      <section
        id="team"
        className="min-h-screen w-full bg-[#f8f8f6] px-6 py-24 md:px-16 xl:px-24"
      >
        <div className="w-full">
          <div className="mb-12 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#C48A18]">
              Our People
            </p>

            <h2 className="mt-3 text-4xl font-bold text-[#111111] md:text-5xl xl:text-6xl">
              Meet Our Organization
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-slate-500 text-base md:text-lg">
              Explore our team structure and discover the people behind our
              success.
            </p>
          </div>

          <TeamTree />
        </div>
      </section>

      <WhyAhaan />

      <FutureGoals />

      <ContactCTA />

      <BigTextSection />
    </main>
  );
};

export default CompanyProfile;
