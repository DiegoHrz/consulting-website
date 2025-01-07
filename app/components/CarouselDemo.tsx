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

export function CarouselDemo() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const ofertas = ["Recomendacion 1", "Recomendacion 2", "Recomendacion 3", "Recomendacion 4", "Recomendacion 5"];

  return (
    <div className="relative w-full max-w-7xl px-16">
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {ofertas.map((oferta, index) => (
            <CarouselItem key={index} className="md:basis-1/3">
              <div className="p-1">
                <Card className=" mx-10" >
                  <CardContent className="flex flex-col items-center justify-center p-6 border-none aspect-square">
                    <div>★★★★★</div>
                    <div className="text-xl ">{oferta}</div>
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
