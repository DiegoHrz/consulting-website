import BusinessPlans from "./components/BusinessPlans";
import Hero from "./components/Hero";
import Pitch from "./components/Pitch";
import Services from "./components/Services";
import FAQ from "./components/FAQ";
import Reviews from "./components/Reviews";
import Quote from "./components/Quote";
// import CalendlyContainer from "./components/calendly/CalendlyContainer";
import RoadmapContainer from "./components/roadmapSvg/RoadmapContainer";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] text-black flex flex-col gap-[80px] md:gap-[150px]  lg:gap-[180px] ">
      <Hero />
      <BusinessPlans />
      <Pitch
        image="/profile/profile.jpg"
        title="Dein Business. Deine Vision. Unsere Unterstützung"
        text="Du willst dich selbstständig machen oder dein bestehendes Business aufs nächste Level bringen? Bei AS Vision Partners bekommst du die Unterstützung, die du wirklich brauchst – individuell, praxisnah und auf Augenhöhe. Wir helfen dir, deine Ideen zu strukturieren, deine Marke klar zu positionieren und den Grundstein für nachhaltigen Erfolg zu legen – egal ob du ganz am Anfang stehst oder schon mittendrin bist.
"
        button="Buchung"
      />
      <Pitch
        image="/profile/professional.avif"
        title="Alles, was du für deine Gründung brauchst – an einem Ort."
        text="Von der Beantragung des Gründungszuschusses über einen professionellen Businessplan bis hin zur passenden Finanzierung – wir begleiten dich durch alle Schritte deiner Gründung. Und auch danach sind wir für dich da: mit Lösungen für Buchhaltung, Website, Marketing und strategisches Wachstum. Du wählst flexibel die Leistungen aus, die du brauchst – und wir liefern dir Klarheit, Struktur und echte Umsetzungspower."
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

      {/* <CalendlyContainer /> */}

      <Reviews />
      <div>
        <FAQ />
        <Quote />
      </div>
    </div>
  );
}
