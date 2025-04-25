import Subtitle from "@/app/components/customTags/Subtitle";


const Impresum = () => {
  return (
    <>

      <div className=" h-1/2">
        <div className="h-[50vh] w-screen overflow-hidden relative">
          <img
            src="/about/hand.jpg"
            alt="Imagen de una mano"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>
        <div className="border max-w-screen-sm mx-auto   absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 sm:p-10 sm:min-w-px min-w-[80%] w-48 sm:w-fit ">
          <h1 className="text-center text-[6vw] sm:text-[3vw] md:text-[2.5vw]">
          Impresum
          </h1>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-16 bg-white font-cabin pb-[100px] mt-28 lg:mt-40">
        <div className="bg-[#F8F8F8] p-8">
          <Subtitle text="Impresum" color="black" position="left" size="3xl" />
          <div className="pt-8 text-[#808080]">
            <p>Anna Schenk</p>
            <p>Rahmhügel 1</p>
            <p>97478 Knetzgau</p>
            <p>Deutschland</p>
          </div>
          <p className="pt-3 text-[#808080]">
            E-Mail: info@as-vision-partners.com
          </p>
          <p className="pt-3 text-[#808080]">Telefon: +49 15679 314176</p>
          <p className="pt-3 text-[#808080]">WhatsApp: +49 160 91471897</p>
          <p className="pt-3 text-[#808080]">Messenger: WhatsApp</p>
          <p className="pt-3 text-[#808080]">
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
            DE420378600
          </p>
          <p className="pt-10 text-[#808080]">
            Inhaltlich Verantwortlicher gemäß § 5 TMG
          </p>
          <p className="pt-3 text-[#808080]">Anna Schenk</p>
          <p className="pt-3 text-[#808080]">info@as-vision-partners.com</p>
          <p className="pt-10 text-[#808080]">
            Inhaltlich Verantwortlicher gemäß § 18 Abs. 2 MStV
          </p>
          <p className="pt-3 text-[#808080]">Anna Schenk</p>
          <p className="pt-3 text-[#808080]">info@as-vision-partners.com</p>
          <p className="text-xl pt-10 font-vollkorn">
            Europäische Online-Streitbeilegungs-Plattform
          </p>
          <p className="pt-3 text-[#808080]">
            Seit dem 15. Februar 2016 stellt die EU-Kommission eine Plattform
            für außergerichtliche Streitschlichtung bereit. Als Verbraucher gibt
            dies die Möglichkeit, Streitigkeiten im Zusammenhang mit der
            Online-Bestellung zunächst ohne die Einschaltung eines Gerichts zu
            klären. Die Streitbeilegungs-Plattform ist unter dem externen Link
            ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=DE
            erreichbar.
          </p>
          <p className="text-xl pt-10 font-vollkorn">Urheberrecht</p>
          <p className="pt-3 text-[#808080]">
            Die Inhalte dieser Webseite unterliegen, soweit dies rechtlich
            möglich ist, diversen Schutzrechten (z.B dem Urheberrecht). Jegliche
            Verwendung/Verbreitung von bereitgestelltem Material, welche
            urheberrechtlich untersagt ist, bedarf schriftlicher Zustimmung des
            Webseitenbetreibers.
          </p>
          <p className="text-xl pt-10 font-vollkorn">Haftungsausschluss</p>
          <p className="pt-3 text-[#808080]">
            Trotz sorgfältiger inhaltlicher Kontrolle übernimmt der
            Webseitenbetreiber dieser Webseite keine Haftung für die Inhalte
            externer Links. Für den Inhalt der verlinkten Seiten sind
            ausschließlich deren Betreiber verantwortlich. Sollten Sie dennoch
            auf ausgehende Links aufmerksam werden, welche auf eine Webseite mit
            rechtswidriger Tätigkeit/Information verweisen, ersuchen wir um
            dementsprechenden Hinweis, um diese nach § 17 Abs. 2 ECG umgehend zu
            entfernen.
          </p>
          <p className="pt-3 text-[#808080]">
            Die Urheberrechte Dritter werden vom Betreiber dieser Webseite mit
            größter Sorgfalt beachtet. Sollten Sie trotzdem auf eine
            Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
            entsprechenden Hinweis. Bei Bekanntwerden derartiger
            Rechtsverletzungen werden wir den betroffenen Inhalt umgehend
            entfernen.
          </p>
          <div className="flex items-center gap-2 pt-3">
            <p className="text-[#808080]">Bild Quellen:</p>
            <a
              href="https://unsplash.com/"
              className="text-[#0171E3] hover:underline break-words"
            >
              https://unsplash.com/
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Impresum;
