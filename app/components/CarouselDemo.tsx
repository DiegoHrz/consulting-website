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

export function CarouselDemo() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const ofertas = [
    "Esta es una impresionantte review no te la pierdas leela hasta que no puedas mas. Esta es una impresionantte review no te la pierdas",
    "Esta es una impresionantte review no te la pierdas leela hasta que no puedas mas. Esta es una impresionantte review no te la pierdas",
    "Esta es una impresionantte review no te la pierdas leela hasta que no puedas mas. Esta es una impresionantte review no te la pierdas",
    "Esta es una impresionantte review no te la pierdas leela hasta que no puedas mas. Esta es una impresionantte review no te la pierdas",
    "Esta es una impresionantte review no te la pierdas leela hasta que no puedas mas. Esta es una impresionantte review no te la pierdas",
  ];

  return (
    <div className="relative w-full max-w-7xl sm:px-16 px-10 pb-6 pt-4 ">
      <BlurBgImage />
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="py-2 z-0">
          {ofertas.map((oferta, index) => (
            <CarouselItem
              key={index}
              className="sm:basis-[70%] md:basis-1/2  lg:basis-1/3"
            >
              <div className="p-1 ">
                <Card className=" mx-4 ">
                  <CardContent className="flex flex-col items-center justify-center p-4 border-none rounded-lg aspect-square  shadow-anna-blue shadow-[0px_1px_7px_0px] ">
                    <div className=" w-full h-full px-5">
                      <div className="flex mx-2 mb-5 gap-5 ">
                        <div className="">
                          {/* <SvgShape imageX={1} imageY={25}  /> */}
                          <img
                            src="/profile/chino-profesional.png"
                            alt="f"
                            className="h-14 "
                          />
                        </div>

                        <div className="flex flex-col  mt-1">
                          <div className="text-sm font-medium  ">
                            Morris Clarke
                          </div>
                          <div className="text-xs  font-light">IBM</div>
                          <div className="text-xs flex  gap-[0.12rem]">
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
                      {/* <div className=" font-semibold text-center mb-3 text-anna-brown font-cabin">
                        Amazing Review
                      </div> */}
                      <div className="text-sm text-anna-brown/70 font-cabin_sans">
                        {oferta}
                      </div>
                    </div>
                  </CardContent>
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
        {ofertas.map((_, index) => (
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
