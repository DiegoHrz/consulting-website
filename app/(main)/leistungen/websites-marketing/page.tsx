"use client";
import AppointmentBanner from "@/app/components/AppointmentBanner";
import React from "react";
import { useLanguageStore } from "@/app/store/useLanguageStore";

const Website = () => {
  const websiteText = {
    de: {
      services: "Leistungen - Website & Marketing",
      title: "Websites & Marketing – Dein professioneller Online-Auftritt und effektive Präsenz",
      description1: "Du möchtest online überzeugen und gleichzeitig sichtbar werden? Eine ansprechende Website und eine durchdachte Marketingstrategie sind heute unverzichtbar, um Kunden zu erreichen und zu begeistern.",
      description2: "Wir unterstützen dich dabei, deine Marke professionell zu präsentieren und mit gezielten Maßnahmen deine Zielgruppe anzusprechen.",
      servicesTitle: "Was wir bieten:",
      websitesTitle: "Websites – Dein professioneller Online-Auftritt",
      websitesIntro: "Wir gestalten deinen digitalen Auftritt, der überzeugt:",
      consultation: "Individuelle Beratung",
      consultationText: "Gemeinsam besprechen wir deine Ziele, Zielgruppe und benötigten Funktionen.",
      design: "Modernes Design",
      designText: "Ästhetisches, benutzerfreundliches und responsives Design für alle Geräte.",
      implementation: "Technische Umsetzung",
      implementationText: "Erfahrene Programmierer setzen deine Website mit modernsten Technologien um.",
      landingpages: "Landingpages",
      landingpagesText: "Spezielle Seiten gezielt auf Kampagnen oder Angebote abgestimmt.",
      maintenance: "Wartung und Support",
      maintenanceText: "Auch nach der Fertigstellung deiner Website stehen wir dir bei technischen Fragen und Updates zur Seite.",
      marketingTitle: "Marketing – Werde sichtbar, wo es zählt",
      marketingIntro: "Wir sorgen dafür, dass deine Botschaft ankommt und deine Marke bei der richtigen Zielgruppe wahrgenommen wird:",
      ads: "Google/Facebook Ads",
      adsText: "Effektive Anzeigenkampagnen für mehr Reichweite und Sichtbarkeit.",
      identity: "Corporate Identity",
      identityText: "Durchgängiges Erscheinungsbild für eine professionelle und einprägsame Marke.",
      social: "Social Media",
      socialText: "Präsenz auf den richtigen Plattformen mit kreativen, zielgerichteten Inhalten.",
      processTitle: "Unser Vorgehen",
      step1: "Analyse & Strategie",
      step1Text: "Wir analysieren deine Zielgruppe, Wettbewerber und Marktposition, um eine maßgeschneiderte Strategie zu entwickeln.",
      step2: "Konzept & Design",
      step2Text: "Erstellung eines stimmigen Konzepts mit modernem Design, das deine Markenidentität widerspiegelt.",
      step3: "Umsetzung",
      step3Text: "Professionelle technische Umsetzung mit Fokus auf Benutzerfreundlichkeit und Performance.",
      step4: "Launch & Marketing",
      step4Text: "Erfolgreicher Start begleitet von gezielten Marketingmaßnahmen für maximale Sichtbarkeit.",
      ctaTitle: "Bereit für deinen professionellen Online-Auftritt?",
      ctaText: "Kontaktiere uns jetzt für ein unverbindliches Beratungsgespräch!"
    },
    en: {
      services: "Services - Website & Marketing",
      title: "Websites & Marketing – Your Professional Online Presence and Effective Visibility",
      description1: "You want to convince online while becoming visible? An appealing website and a well-thought-out marketing strategy are essential today to reach and inspire customers.",
      description2: "We support you in presenting your brand professionally and addressing your target audience with targeted measures.",
      servicesTitle: "What we offer:",
      websitesTitle: "Websites – Your Professional Online Presence",
      websitesIntro: "We design your digital presence that convinces:",
      consultation: "Individual Consultation",
      consultationText: "Together we discuss your goals, target audience and required functions.",
      design: "Modern Design",
      designText: "Aesthetic, user-friendly and responsive design for all devices.",
      implementation: "Technical Implementation",
      implementationText: "Experienced programmers implement your website with state-of-the-art technologies.",
      landingpages: "Landing Pages",
      landingpagesText: "Special pages specifically tailored to campaigns or offers.",
      maintenance: "Maintenance and Support",
      maintenanceText: "Even after completion of your website, we are available for technical questions and updates.",
      marketingTitle: "Marketing – Become visible where it counts",
      marketingIntro: "We ensure your message arrives and your brand is noticed by the right target audience:",
      ads: "Google/Facebook Ads",
      adsText: "Effective ad campaigns for more reach and visibility.",
      identity: "Corporate Identity",
      identityText: "Consistent appearance for a professional and memorable brand.",
      social: "Social Media",
      socialText: "Presence on the right platforms with creative, targeted content.",
      processTitle: "Our Approach",
      step1: "Analysis & Strategy",
      step1Text: "We analyze your target audience, competitors and market position to develop a tailored strategy.",
      step2: "Concept & Design",
      step2Text: "Creation of a coherent concept with modern design that reflects your brand identity.",
      step3: "Implementation",
      step3Text: "Professional technical implementation with focus on user-friendliness and performance.",
      step4: "Launch & Marketing",
      step4Text: "Successful launch accompanied by targeted marketing measures for maximum visibility.",
      ctaTitle: "Ready for your professional online presence?",
      ctaText: "Contact us now for a no-obligation consultation!"
    }
  };

  const { lang } = useLanguageStore();
  const t = websiteText[lang];

  return (
    <div className="">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-xl p-8 mb-12 text-white">
        <h6 className="text-lg font-semibold mb-2">
          {t.services}
        </h6>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          {t.title}
        </h1>
        <p className="text-lg">{t.description1}</p>
        <p className="text-lg">{t.description2}</p>
      </div>

      {/* Services Overview */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-indigo-700">
          {t.servicesTitle}
        </h2>

        {/* Websites Section */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="md:w-1/3">
              <h3 className="text-xl font-bold mb-4 text-indigo-700">
                {t.websitesTitle}
              </h3>
              <p className="text-gray-700">
                {t.websitesIntro}
              </p>
            </div>
            <div className="md:w-2/3">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2 flex items-center">
                    <svg
                      className="w-5 h-5 text-indigo-600 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                    {t.consultation}
                  </h4>
                  <p className="text-gray-700">
                    {t.consultationText}
                  </p>
                </div>
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2 flex items-center">
                    <svg
                      className="w-5 h-5 text-indigo-600 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                      />
                    </svg>
                    {t.design}
                  </h4>
                  <p className="text-gray-700">
                    {t.designText}
                  </p>
                </div>
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2 flex items-center">
                    <svg
                      className="w-5 h-5 text-indigo-600 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                    {t.implementation}
                  </h4>
                  <p className="text-gray-700">
                    {t.implementationText}
                  </p>
                </div>
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2 flex items-center">
                    <svg
                      className="w-5 h-5 text-indigo-600 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    {t.landingpages}
                  </h4>
                  <p className="text-gray-700">
                    {t.landingpagesText}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-indigo-100 shadow-sm">
            <h4 className="font-semibold text-lg mb-2 flex items-center">
              <svg
                className="w-5 h-5 text-indigo-600 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              {t.maintenance}
            </h4>
            <p className="text-gray-700">
              {t.maintenanceText}
            </p>
          </div>
        </div>

        {/* Marketing Section */}
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-4 text-indigo-700">
            {t.marketingTitle}
          </h3>
          <p className="text-gray-700 mb-6">
            {t.marketingIntro}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Google/Facebook Ads Card */}
            <div className="bg-indigo-50 p-4 rounded-lg min-h-[180px] flex flex-col">
              <div className="flex items-center mb-2">
                <svg
                  className="w-5 h-5 text-indigo-600 mr-2 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                <h4 className="font-semibold text-lg">{t.ads}</h4>
              </div>
              <p className="text-gray-700 text-sm flex-grow">
                {t.adsText}
              </p>
            </div>

            {/* Corporate Identity Card */}
            <div className="bg-indigo-50 p-4 rounded-lg min-h-[180px] flex flex-col">
              <div className="flex items-center mb-2">
                <svg
                  className="w-5 h-5 text-indigo-600 mr-2 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                  />
                </svg>
                <h4 className="font-semibold text-lg">{t.identity}</h4>
              </div>
              <p className="text-gray-700 text-sm flex-grow">
                {t.identityText}
              </p>
            </div>

            {/* Social Media Card */}
            <div className="bg-indigo-50 p-4 rounded-lg min-h-[180px] flex flex-col">
              <div className="flex items-center mb-2">
                <svg
                  className="w-5 h-5 text-indigo-600 mr-2 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                <h4 className="font-semibold text-lg">{t.social}</h4>
              </div>
              <p className="text-gray-700 text-sm flex-grow">
                {t.socialText}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-indigo-700">
          {t.processTitle}
        </h2>
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-16 md:h-16 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-indigo-800 font-bold text-xl">1</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-indigo-800">
                {t.step1}
              </h3>
              <p className="text-gray-700">
                {t.step1Text}
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-16 md:h-16 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-indigo-800 font-bold text-xl">2</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-indigo-800">
                {t.step2}
              </h3>
              <p className="text-gray-700">
                {t.step2Text}
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-16 md:h-16 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-indigo-800 font-bold text-xl">3</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-indigo-800">
                {t.step3}
              </h3>
              <p className="text-gray-700">
                {t.step3Text}
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-16 md:h-16 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-indigo-800 font-bold text-xl">4</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-indigo-800">
                {t.step4}
              </h3>
              <p className="text-gray-700">
                {t.step4Text}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="my-20 md:my-36"> 
        <AppointmentBanner 
          gradientColor="from-indigo-900"  
          gradientColor2="to-indigo-100" 
          buttonColor="bg-indigo-600" 
        />
      </div>
    </div>
  );
};

export default Website;