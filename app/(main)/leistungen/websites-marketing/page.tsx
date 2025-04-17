import React from "react";

const Website = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-xl p-8 mb-12 text-white">
        <h6 className="text-lg font-semibold mb-2">Leistungen - Website & Marketing</h6>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          Websites & Marketing – Dein professioneller Online-Auftritt und effektive Präsenz
        </h1>
        <p className="text-lg">
          Du möchtest online überzeugen und gleichzeitig sichtbar werden? Eine ansprechende Website und eine durchdachte Marketingstrategie sind heute unverzichtbar, um Kunden zu erreichen und zu begeistern.
        </p>
        <p className="text-lg">
          Wir unterstützen dich dabei, deine Marke professionell zu präsentieren und mit gezielten Maßnahmen deine Zielgruppe anzusprechen.
        </p>
      </div>

      {/* Services Overview */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-indigo-700">Was wir bieten:</h2>
        
        {/* Websites Section */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="md:w-1/3">
              <h3 className="text-xl font-bold mb-4 text-indigo-700">Websites – Dein professioneller Online-Auftritt</h3>
              <p className="text-gray-700">
                Wir gestalten deinen digitalen Auftritt, der überzeugt:
              </p>
            </div>
            <div className="md:w-2/3">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2 flex items-center">
                    <svg className="w-5 h-5 text-indigo-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    Individuelle Beratung
                  </h4>
                  <p className="text-gray-700">Gemeinsam besprechen wir deine Ziele, Zielgruppe und benötigten Funktionen.</p>
                </div>
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2 flex items-center">
                    <svg className="w-5 h-5 text-indigo-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                    Modernes Design
                  </h4>
                  <p className="text-gray-700">Ästhetisches, benutzerfreundliches und responsives Design für alle Geräte.</p>
                </div>
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2 flex items-center">
                    <svg className="w-5 h-5 text-indigo-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    Technische Umsetzung
                  </h4>
                  <p className="text-gray-700">Erfahrene Programmierer setzen deine Website mit modernsten Technologien um.</p>
                </div>
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2 flex items-center">
                    <svg className="w-5 h-5 text-indigo-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Landingpages
                  </h4>
                  <p className="text-gray-700">Spezielle Seiten gezielt auf Kampagnen oder Angebote abgestimmt.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-indigo-100 shadow-sm">
            <h4 className="font-semibold text-lg mb-2 flex items-center">
              <svg className="w-5 h-5 text-indigo-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Wartung und Support
            </h4>
            <p className="text-gray-700">
              Auch nach der Fertigstellung deiner Website stehen wir dir bei technischen Fragen und Updates zur Seite.
            </p>
          </div>
        </div>

        {/* Marketing Section */}
{/* Marketing Section - Fixed Responsive Version */}
<div className="mb-12">
  <h3 className="text-xl font-bold mb-4 text-indigo-700">Marketing – Werde sichtbar, wo es zählt</h3>
  <p className="text-gray-700 mb-6">
    Wir sorgen dafür, dass deine Botschaft ankommt und deine Marke bei der richtigen Zielgruppe wahrgenommen wird:
  </p>
  
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {/* Google/Facebook Ads Card */}
    <div className="bg-indigo-50 p-4 rounded-lg min-h-[180px] flex flex-col">
      <div className="flex items-center mb-2">
        <svg className="w-5 h-5 text-indigo-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
        <h4 className="font-semibold text-lg">Google/Facebook Ads</h4>
      </div>
      <p className="text-gray-700 text-sm flex-grow">
        Effektive Anzeigenkampagnen für mehr Reichweite und Sichtbarkeit.
      </p>
    </div>

    {/* Corporate Identity Card */}
    <div className="bg-indigo-50 p-4 rounded-lg min-h-[180px] flex flex-col">
      <div className="flex items-center mb-2">
        <svg className="w-5 h-5 text-indigo-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
        </svg>
        <h4 className="font-semibold text-lg">Corporate Identity</h4>
      </div>
      <p className="text-gray-700 text-sm flex-grow">
        Durchgängiges Erscheinungsbild für eine professionelle und einprägsame Marke.
      </p>
    </div>

    {/* Social Media Card */}
    <div className="bg-indigo-50 p-4 rounded-lg min-h-[180px] flex flex-col">
      <div className="flex items-center mb-2">
        <svg className="w-5 h-5 text-indigo-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        <h4 className="font-semibold text-lg">Social Media</h4>
      </div>
      <p className="text-gray-700 text-sm flex-grow">
        Präsenz auf den richtigen Plattformen mit kreativen, zielgerichteten Inhalten.
      </p>
    </div>
  </div>
</div>
      </div>

      {/* Process Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-indigo-700">Unser Vorgehen</h2>
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-16 md:h-16 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-indigo-800 font-bold text-xl">1</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-indigo-800">Analyse & Strategie</h3>
              <p className="text-gray-700">
                Wir analysieren deine Zielgruppe, Wettbewerber und Marktposition, um eine maßgeschneiderte Strategie zu entwickeln.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-16 md:h-16 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-indigo-800 font-bold text-xl">2</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-indigo-800">Konzept & Design</h3>
              <p className="text-gray-700">
                Erstellung eines stimmigen Konzepts mit modernem Design, das deine Markenidentität widerspiegelt.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-16 md:h-16 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-indigo-800 font-bold text-xl">3</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-indigo-800">Umsetzung</h3>
              <p className="text-gray-700">
                Professionelle technische Umsetzung mit Fokus auf Benutzerfreundlichkeit und Performance.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-16 md:h-16 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-indigo-800 font-bold text-xl">4</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-indigo-800">Launch & Marketing</h3>
              <p className="text-gray-700">
                Erfolgreicher Start begleitet von gezielten Marketingmaßnahmen für maximale Sichtbarkeit.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-100 rounded-xl p-8 text-center">
        <h3 className="text-xl font-bold mb-4">Bereit für deinen professionellen Online-Auftritt?</h3>
        <p className="mb-6">Kontaktiere uns jetzt für ein unverbindliches Beratungsgespräch!</p>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200">
          Jetzt Termin vereinbaren
        </button>
      </div>
    </div>
  );
};

export default Website;





// import React from "react";

// const Website = () => {
//   return (
//     <div>
//       <div className="h-screen"></div>
//       <p>Leistungen - Website & Marketing</p>
//       <h1>
//         Websites & Marketing – Dein professioneller Online-Auftritt und
//         effektive Präsenz
//       </h1>
//       <h6>
//         Du möchtest online überzeugen und gleichzeitig sichtbar werden? Eine
//         ansprechende Website und eine durchdachte Marketingstrategie sind heute
//         unverzichtbar, um Kunden zu erreichen und zu begeistern. Wir
//         unterstützen dich dabei, deine Marke professionell zu präsentieren und
//         mit gezielten Maßnahmen deine Zielgruppe anzusprechen.
//       </h6>
//       <div className="h-[0.02rem] w-full bg-black my-4"></div>
//       <p>Was wir bieten:</p>
//       <p>Websites – Dein professioneller Online-Auftritt</p>
//       <p>Wir gestalten deinen digitalen Auftritt, der überzeugt:</p>

//       <ul className="list-disc list-inside">
//         <li>
//           Individuelle Beratung: Gemeinsam besprechen wir deine Ziele, deine
//           Zielgruppe und die Funktionen, die deine Website bieten soll.
//         </li>
//         <li>
//           Modernes Design: Ein ästhetisches, benutzerfreundliches und
//           responsives Design, das auf allen Endgeräten überzeugt.
//         </li>
//         <li>
//           Technische Umsetzung: In Zusammenarbeit mit erfahrenen Programmierern
//           setzen wir deine Website mit den neuesten Technologien um.
//         </li>
//         <li>
//           Landingpages: Wir erstellen spezielle Seiten, die gezielt auf
//           Kampagnen oder Angebote abgestimmt sind.
//         </li>
//         <li>
//           Wartung und Support: Auch nach der Fertigstellung deiner Website
//           stehen wir dir bei technischen Fragen und Updates zur Seite.
//         </li>
//       </ul>

//       <p>Marketing – Werde sichtbar, wo es zählt</p>

//       <p>
//         Wir sorgen dafür, dass deine Botschaft ankommt und deine Marke bei der
//         richtigen Zielgruppe wahrgenommen wird:
//       </p>

//       <ul className="list-disc list-inside">
//         <li>
//           Google- und Facebook-Ads: Effektive Anzeigenkampagnen, die deine
//           Reichweite und Sichtbarkeit erhöhen.
//         </li>
//         <li>
//           Corporate Identity: Wir entwickeln ein durchgängiges Erscheinungsbild,
//           das deine Marke professionell und einprägsam macht.
//         </li>
//         <li>
//           Social Media Marketing: Präsenz auf den richtigen Plattformen – mit
//           kreativen und zielgerichteten Inhalten.
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Website;
