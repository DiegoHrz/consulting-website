import BusinessPlans from "./components/BusinessPlans";
import Hero from "./components/Hero";
import Pitch from "./components/Pitch";
import Services from "./components/Services";
import FAQ from "./components/FAQ";
import Reviews from "./components/Reviews";
import Quote from "./components/Quote";
import CalendlyContainer from "./components/calendly/CalendlyContainer";
import RoadmapContainer from "./components/roadmapSvg/RoadmapContainer";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] text-black flex flex-col gap-[80px] md:gap-[150px]  lg:gap-[180px] ">
      <Hero />
      <BusinessPlans />
      <Pitch
        image="/profile/profile.jpg"
        title="Jetzt Unternehmer werden"
        text="Möchten Sie ein Unternehmen aufbauen, führen oder erweitern, das
          erfolgreich ist? Träumen Sie davon, eine unverwechselbare Marke zu
          schaffen, die Ihre Vision widerspiegelt und Ihre Zielgruppe
          inspiriert? Die Experten von AS Vision Partners unterstützen Sie
          dabei, Ihr Einkommen, Ihre Reichweite und die Stärke Ihrer Marke zu
          maximieren. Sind Sie bereit, mit uns durchzustarten?"
        button="Buchung"
      />
      <Pitch
        image="/profile/professional.avif"
        title="Verbessern Sie Ihr Geschäft"
        text="Möchten Sie ein Unternehmen aufbauen, führen oder erweitern, das
          erfolgreich ist? Träumen Sie davon, eine unverwechselbare Marke zu
          schaffen, die Ihre Vision widerspiegelt und Ihre Zielgruppe
          inspiriert? Die Experten von AS Vision Partners unterstützen Sie
          dabei, Ihr Einkommen, Ihre Reichweite und die Stärke Ihrer Marke zu
          maximieren. Sind Sie bereit, mit uns durchzustarten?"
        button="Buchung"
        right={true}
      />

      {/* sin hoc */}
      <Services />

      <div
        className=" "
        style={{
          background:
            "linear-gradient(to bottom, white 3%, #D5E0E2 30%, #D5E0E2 90%,white 100%)",
        }}
      >
        {/* sin hoc */}
        <RoadmapContainer />
      </div>

      <CalendlyContainer />

      <Reviews />
      <div>
        <FAQ />
        <Quote />
      </div>
    </div>
  );
}
