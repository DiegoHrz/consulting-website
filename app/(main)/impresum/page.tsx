"use client";
import Subtitle from "@/app/components/customTags/Subtitle";
import { useLanguageStore } from "@/app/store/useLanguageStore";

const Impresum = () => {
  const { lang } = useLanguageStore();

  const content = {
    de: {
      title: "Impressum",
      contact: {
        title: "Kontakt",
        address: [
          "Anna Schenk",
          "Rahmhügel 1",
          "97478 Knetzgau",
          "Deutschland"
        ],
        email: "E-Mail: info@as-vision-partners.com",
        phone: "Telefon: +49 15679 314176",
        whatsapp: "WhatsApp: +49 160 91471897",
        messenger: "Messenger: WhatsApp",
        vat: "Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: DE420378600"
      },
      legal: {
        tmg: {
          title: "Inhaltlich Verantwortlicher gemäß § 5 TMG",
          name: "Anna Schenk",
          email: "info@as-vision-partners.com"
        },
        mstv: {
          title: "Inhaltlich Verantwortlicher gemäß § 18 Abs. 2 MStV",
          name: "Anna Schenk",
          email: "info@as-vision-partners.com"
        },
        dispute: {
          title: "Europäische Online-Streitbeilegungs-Plattform",
          text: "Seit dem 15. Februar 2016 stellt die EU-Kommission eine Plattform für außergerichtliche Streitschlichtung bereit. Als Verbraucher gibt dies die Möglichkeit, Streitigkeiten im Zusammenhang mit der Online-Bestellung zunächst ohne die Einschaltung eines Gerichts zu klären. Die Streitbeilegungs-Plattform ist unter dem externen Link ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=DE erreichbar."
        },
        copyright: {
          title: "Urheberrecht",
          text: "Die Inhalte dieser Webseite unterliegen, soweit dies rechtlich möglich ist, diversen Schutzrechten (z.B dem Urheberrecht). Jegliche Verwendung/Verbreitung von bereitgestelltem Material, welche urheberrechtlich untersagt ist, bedarf schriftlicher Zustimmung des Webseitenbetreibers."
        },
        disclaimer: {
          title: "Haftungsausschluss",
          text1: "Trotz sorgfältiger inhaltlicher Kontrolle übernimmt der Webseitenbetreiber dieser Webseite keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich. Sollten Sie dennoch auf ausgehende Links aufmerksam werden, welche auf eine Webseite mit rechtswidriger Tätigkeit/Information verweisen, ersuchen wir um dementsprechenden Hinweis, um diese nach § 17 Abs. 2 ECG umgehend zu entfernen.",
          text2: "Die Urheberrechte Dritter werden vom Betreiber dieser Webseite mit größter Sorgfalt beachtet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden derartiger Rechtsverletzungen werden wir den betroffenen Inhalt umgehend entfernen."
        },
        imageSources: {
          text: "Bild Quellen:",
          link: "https://unsplash.com/"
        }
      }
    },
    en: {
      title: "Imprint",
      contact: {
        title: "Contact",
        address: [
          "Anna Schenk",
          "Rahmhügel 1",
          "97478 Knetzgau",
          "Germany"
        ],
        email: "Email: info@as-vision-partners.com",
        phone: "Phone: +49 15679 314176",
        whatsapp: "WhatsApp: +49 160 91471897",
        messenger: "Messenger: WhatsApp",
        vat: "VAT identification number according to § 27 a of the German Value Added Tax Act: DE420378600"
      },
      legal: {
        tmg: {
          title: "Responsible according to § 5 TMG",
          name: "Anna Schenk",
          email: "info@as-vision-partners.com"
        },
        mstv: {
          title: "Responsible according to § 18 Abs. 2 MStV",
          name: "Anna Schenk",
          email: "info@as-vision-partners.com"
        },
        dispute: {
          title: "European Online Dispute Resolution Platform",
          text: "Since February 15, 2016, the EU Commission has provided a platform for out-of-court dispute resolution. As a consumer, this gives you the opportunity to initially resolve disputes in connection with online orders without involving a court. The dispute resolution platform can be reached at the external link ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=EN."
        },
        copyright: {
          title: "Copyright",
          text: "The contents of this website are subject to various protection rights (e.g. copyright) as far as this is legally possible. Any use/distribution of provided material that is prohibited by copyright law requires the written consent of the website operator."
        },
        disclaimer: {
          title: "Disclaimer",
          text1: "Despite careful content control, the operator of this website assumes no liability for the content of external links. The operators of the linked pages are solely responsible for their content. Should you nevertheless become aware of outgoing links that refer to a website with illegal activity/information, we ask for appropriate notice in order to remove them immediately according to § 17 Abs. 2 ECG.",
          text2: "The copyrights of third parties are observed by the operator of this website with the greatest care. Should you nevertheless become aware of a copyright infringement, we ask for a corresponding hint. Upon becoming aware of such legal violations, we will remove the affected content immediately."
        },
        imageSources: {
          text: "Image sources:",
          link: "https://unsplash.com/"
        }
      }
    }
  };

  const t = content[lang];

  return (
    <>
      <div className="h-1/2">
        <div className="h-[50vh] w-screen overflow-hidden relative">
          <img
            src="/about/hand.jpg"
            alt={lang === 'de' ? "Imagen de una mano" : "Image of a hand"}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>
        <div className="border max-w-screen-sm mx-auto absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 sm:p-10 sm:min-w-px min-w-[80%] w-48 sm:w-fit">
          <h1 className="text-center text-[6vw] sm:text-[3vw] md:text-[2.5vw]">
            {t.title}
          </h1>
        </div>
      </div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-16 bg-white font-cabin pb-[100px] mt-28 lg:mt-40">
        <div className="bg-[#F8F8F8] p-8">
          <Subtitle 
            text={t.title} 
            color="black" 
            position="left" 
            size="3xl" 
          />
          
          {/* Contact Information */}
          <div className="pt-8 text-[#808080]">
            {t.contact.address.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
          <p className="pt-3 text-[#808080]">{t.contact.email}</p>
          <p className="pt-3 text-[#808080]">{t.contact.phone}</p>
          <p className="pt-3 text-[#808080]">{t.contact.whatsapp}</p>
          <p className="pt-3 text-[#808080]">{t.contact.messenger}</p>
          <p className="pt-3 text-[#808080]">{t.contact.vat}</p>
          
          {/* TMG Section */}
          <p className="pt-10 text-[#808080]">{t.legal.tmg.title}</p>
          <p className="pt-3 text-[#808080]">{t.legal.tmg.name}</p>
          <p className="pt-3 text-[#808080]">{t.legal.tmg.email}</p>
          
          {/* MStV Section */}
          <p className="pt-10 text-[#808080]">{t.legal.mstv.title}</p>
          <p className="pt-3 text-[#808080]">{t.legal.mstv.name}</p>
          <p className="pt-3 text-[#808080]">{t.legal.mstv.email}</p>
          
          {/* Dispute Resolution */}
          <p className="text-xl pt-10 font-vollkorn">{t.legal.dispute.title}</p>
          <p className="pt-3 text-[#808080]">{t.legal.dispute.text}</p>
          
          {/* Copyright */}
          <p className="text-xl pt-10 font-vollkorn">{t.legal.copyright.title}</p>
          <p className="pt-3 text-[#808080]">{t.legal.copyright.text}</p>
          
          {/* Disclaimer */}
          <p className="text-xl pt-10 font-vollkorn">{t.legal.disclaimer.title}</p>
          <p className="pt-3 text-[#808080]">{t.legal.disclaimer.text1}</p>
          <p className="pt-3 text-[#808080]">{t.legal.disclaimer.text2}</p>
          
          {/* Image Sources */}
          <div className="flex items-center gap-2 pt-3">
            <p className="text-[#808080]">{t.legal.imageSources.text}</p>
            <a
              href={t.legal.imageSources.link}
              className="text-[#0171E3] hover:underline break-words"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.legal.imageSources.link}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Impresum;