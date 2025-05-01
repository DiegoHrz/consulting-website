"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import CustomStar from "./customIcons/Star";
import BlurBgImage from "./BlurBg/BlurBgImage";
import Link from "next/link";
import { useLanguageStore } from "../store/useLanguageStore";

export function CarouselDemo() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const { lang } = useLanguageStore();

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const clientTestimonials = {
    de: [
      {
        name: "Sylvia Schnaider",
        business: "Unternehmensberaterin und Coach",
        comment:
          "Anna Schenk hat mich mit unglaublich viel Engagement und Herzblut bei der Gründung meines Unternehmens unterstützt. Dank ihrer Expertise und Zuverlässigkeit konnte ich einen fundierten und professionellen Businessplan sowie eine solide Finanzplanung erstellen. Anna war jederzeit verfügbar, hat schnell und effizient gearbeitet und war dabei stets offen für meine Fragen und Anliegen. Ihre Unterstützung war für mich eine große Bereicherung, und ich bin ihr dafür sehr dankbar. Ich kann sie uneingeschränkt weiterempfehlen!",
      },
      {
        name: "Christina Hüttner",
        business: "Freie Rede und Coaching",
        comment:
          "Ich bin unglaublich dankbar, Anna als Gründungsberaterin während des gesamten Prozesses zum Gründungszuschuss an meiner Seite gehabt zu haben. Anna ist super zuverlässig, mega motiviert, kennt sich extrem gut aus und bleibt dran bis du deinen Zuschuss erhältst, du kannst dich immer auf sie verlassen. Sie gibt dir in wirklich allen Bereichen und sogar darüber hinaus wertvolle Tipps und du bekommst von ihr außergewöhnlich schnelle Antworten auf all deine Fragen. Sie unterstützt dich einfach vollkommen. Ich habe mich mit ihr jederzeit sehr wohl gefühlt und ohne sie wäre ich schier verzweifelt. Lass dir die Gelegenheit nicht entgehen, sie für einen erfolgreichen Antrag an deiner Seite zu haben. Menschlich und fachlich einfach wunderbar!",
      },
      {
        name: "Liliya Kurzawa",
        business: "Psychologische Beratung",
        comment:
          "Ich habe Frau Schenk bei der Beantragung des Gründungszuschusses bei der Bundesagentur für Arbeit kennengelernt. Die Arbeit mit Frau Schenk war stets professionell, zuverlässig und freundlich. Sie hat mich bei jeder Phase meines Antrags unterstützt, sei es fachlich als auch emotional/psychisch. Da die Antragsphase sehr nervenaufreibend ist, hat mich gerade das Zwischenmenschliche bei Frau Schenk überzeugt. Am Ende haben wir Erfolg gehabt, sodass ich den Gründungszuschuss, nach gemeinsamer harter Arbeit, auch bewilligt und ausgezahlt bekommen habe. Ich würde Frau Schenk jeder Zeit wieder empfehlen. Wie bereits erwähnt, ist sie nicht nur fachlich kompetent, sondern auch in der Zusammenarbeit sehr hilfsbereit, geduldig und empathisch. Vielen Dank nochmal!",
      },
      {
        name: "Denis Bares",
        business: "Inhaber Edelmetallhandel",
        comment:
          "Anna hat mich fachlich sehr gut mit meinem Businessplan betreut. Bei Fragen war sie stets hilfsbereit. Insbesondere im Finanzteil hat sie mir sehr geholfen, mich auf das Bankengespräch vorzubereiten. Ich bin sehr zufrieden und die Finanzierung ist durchgegangen.",
      },
      {
        name: "Nico E.",
        business: "Ergotherapeut",
        comment:
          "Anna war mir eine große Stütze bei der Erstellung des Business- und des Finanzplans und hat mir darüber hinaus ein sehr hilfreiches Buchhaltungs-Coaching gegeben. Ich bin sehr dankbar und glücklich, dass sie mir auch weiterhin für Fragen zur Verfügung steht und sie mir die Schritte in die Selbstständigkeit derart erleichtert hat.",
      },
    ],
    en: [
      {
        name: "Sylvia Schnaider",
        business: "Business consultant and coach",
        comment:
          "Anna Schenk supported me with incredible commitment and dedication in founding my company. Thanks to her expertise and reliability, I was able to create a well-founded and professional business plan as well as solid financial planning. Anna was always available, worked quickly and efficiently, and was always open to my questions and concerns. Her support was a great enrichment for me, and I am very grateful to her for that. I can recommend her without reservation!",
      },
      {
        name: "Christina Hüttner",
        business: "Public speaking and coaching",
        comment:
          "I am incredibly grateful to have had Anna as a start-up consultant by my side throughout the start-up grant process. Anna is super reliable, extremely motivated, knows her stuff extremely well and stays with you until you receive your grant - you can always rely on her. She gives you valuable tips in all areas and even beyond, and you get exceptionally quick answers to all your questions. She simply supports you completely. I always felt very comfortable with her and without her I would have been desperate. Don't miss the opportunity to have her by your side for a successful application. Simply wonderful both personally and professionally!",
      },
      {
        name: "Liliya Kurzawa",
        business: "Psychological counseling",
        comment:
          "I met Ms. Schenk when applying for the start-up grant at the Federal Employment Agency. Working with Ms. Schenk was always professional, reliable and friendly. She supported me in every phase of my application, both professionally and emotionally/psychologically. Since the application phase is very nerve-wracking, it was the interpersonal aspect with Ms. Schenk that convinced me. In the end, we were successful and I received the start-up grant after hard work together. I would recommend Ms. Schenk again at any time. As already mentioned, she is not only professionally competent, but also very helpful, patient and empathetic in her cooperation. Thank you again!",
      },
      {
        name: "Denis Bares",
        business: "Owner precious metals trade",
        comment:
          "Anna provided me with excellent professional support with my business plan. She was always helpful with any questions. She helped me a lot, especially with the financial part, to prepare for the bank meeting. I am very satisfied and the financing went through.",
      },
      {
        name: "Nico E.",
        business: "Occupational therapist",
        comment:
          "Anna was a great support in creating the business and financial plan and also gave me very helpful accounting coaching. I am very grateful and happy that she continues to be available for questions and has made the steps to self-employment so much easier for me.",
      },
    ],
  };

  const clients = clientTestimonials[lang];

  return (
    <div className="relative w-full max-w-7xl sm:px-16 px-6 pb-6 pt-4">
      <BlurBgImage />
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="py-2 z-0">
          {clients.map((client, index) => (
            <CarouselItem
              key={index}
              className="sm:basis-[70%] md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <Card className="mx-4">
                  <Link href="/referenzen">
                    <CardContent className="flex flex-col items-center justify-center p-4 border-none rounded-lg aspect-square shadow-anna-blue shadow-[0px_1px_7px_0px]">
                      <div className="w-full h-full px-5">
                        <div className="flex mb-5 gap-5">
                          <div className="flex flex-col mt-1">
                            <div className="text-sm font-medium">
                              {client.name}
                            </div>
                            <div className="text-xs font-light">
                              {client.business}
                            </div>
                            <div className="text-xs flex gap-[0.12rem]">
                              <CustomStar
                                fill="#FFDC38"
                                stroke="#FFAD2C"
                                strokeWidth={2}
                                size={15}
                              />
                              <CustomStar
                                fill="#FFDC38"
                                stroke="#FFAD2C"
                                strokeWidth={2}
                                size={15}
                              />
                              <CustomStar
                                fill="#FFDC38"
                                stroke="#FFAD2C"
                                strokeWidth={2}
                                size={15}
                              />
                              <CustomStar
                                fill="#FFDC38"
                                stroke="#FFAD2C"
                                strokeWidth={2}
                                size={15}
                              />
                              <CustomStar
                                fill="#FFDC38"
                                stroke="#FFAD2C"
                                strokeWidth={2}
                                size={15}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="text-sm text-anna-brown/70 font-cabin_sans line-clamp-5 overflow-hidden text-ellipsis">
                          {client.comment}
                        </div>
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute top-1/2 left-4 -translate-y-1/2">
          <CarouselPrevious variant="outline" size="icon" className="h-8 w-8" />
        </div>
        <div className="absolute top-1/2 right-4 -translate-y-1/2">
          <CarouselNext variant="outline" size="icon" className="h-8 w-8" />
        </div>
      </Carousel>
      <div className="flex justify-center gap-2 mt-4">
        {clients.map((_, index) => (
          <Button
            key={index}
            variant="outline"
            size="icon"
            className={`h-2 w-2 rounded-full ${
              index === current - 1 ? "bg-primary" : "bg-muted"
            }`}
            onClick={() => api?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}