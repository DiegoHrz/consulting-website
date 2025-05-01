'use client'
import BusinessPlans from "./components/BusinessPlans";
import Hero from "./components/Hero";
import Pitch from "./components/Pitch";
import Services from "./components/Services";
import FAQ from "./components/FAQ";
import Reviews from "./components/Reviews";
import Quote from "./components/Quote";
// import CalendlyContainer from "./components/calendly/CalendlyContainer";
import RoadmapContainer from "./components/roadmapSvg/RoadmapContainer";
import { useLanguageStore } from "./store/useLanguageStore";

export default function Home() {
  const pitchTexts={
    de:{
      first_title:'Dein Business. Deine Vision. Unsere Unterstützung',
      first_text:"Du willst dich selbstständig machen oder dein bestehendes Business aufs nächste Level bringen? Bei AS Vision Partners bekommst du die Unterstützung, die du wirklich brauchst – individuell, praxisnah und auf Augenhöhe. Wir helfen dir, deine Ideen zu strukturieren, deine Marke klar zu positionieren und den Grundstein für nachhaltigen Erfolg zu legen – egal ob du ganz am Anfang stehst oder schon mittendrin bist.",
      first_button:"Buchung",
      second_title:'Alles, was du für deine Gründung brauchst – an einem Ort.',
      second_text:"Von der Beantragung des Gründungszuschusses über einen professionellen Businessplan bis hin zur passenden Finanzierung – wir begleiten dich durch alle Schritte deiner Gründung. Und auch danach sind wir für dich da: mit Lösungen für Buchhaltung, Website, Marketing und strategisches Wachstum. Du wählst flexibel die Leistungen aus, die du brauchst – und wir liefern dir Klarheit, Struktur und echte Umsetzungspower.",
      second_button:"Buchung",
    },
    en:{
      first_title:'Your Business. Your Vision. Our Support',
      first_text:"Do you want to start your own business or take your existing business to the next level? At AS Vision Partners, you get the support you really need – personalized, practical, and on an equal footing. We help you structure your ideas, clearly position your brand, and lay the foundation for sustainable success – whether you're just starting out or already in the thick of it.",
      first_button:"Booking",
      second_title:'Everything you need for your startup – in one place.',
      second_text:"From applying for a start-up grant and a professional business plan to finding the right financing – we'll guide you through every step of your startup. And we'll be there for you even afterward: with solutions for accounting, website, marketing, and strategic growth. You flexibly choose the services you need – and we'll provide you with clarity, structure, and real implementation power.",
      second_button:"Booking",
    },
  }
  const { lang } = useLanguageStore();
  const t = pitchTexts[lang]
  return (
    <div className="font-[family-name:var(--font-geist-sans)] text-black flex flex-col gap-[80px] md:gap-[150px]  lg:gap-[180px] ">
      {/* lentea */}
      <Hero />
      <BusinessPlans />
      {/* lentea */}
      <Pitch
        image="/profile/profile.jpg"
        title={t.first_title}
        text={t.first_text}
        button={t.first_button}
      />
  
      <Pitch
        image="/profile/professional.avif"
        title={t.second_title}
        text={t.second_text}
        button={t.second_button}
        right={true}
      />

      {/* sin hoc */}
      {/* lentea */}
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

      <Reviews lang={lang} />
      <div>
        {/* lentea */}
        <FAQ />
        <Quote />
      </div>
    </div>
  );
}
