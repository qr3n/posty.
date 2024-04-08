'use client';

import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { CreateEventContext } from "../model/context";
import { Carousel, CarouselApi } from "@shared/shadcn/ui/carousel";

export const EventContext = (props: PropsWithChildren) => {
  const [api, setApi] = useState<CarouselApi>()
  const [video, setVideo] = useState<File | null>(null)
  const [thumbnail, setThumbnail] = useState<File | null>(null)

  return (
    <Carousel setApi={setApi} className="w-full h-full [&>*]:h-full">
      <CreateEventContext.Provider value={{ video, setVideo, next: api?.scrollNext, previous: api?.scrollPrev, thumbnail, setThumbnail }}>
        { props.children }
      </CreateEventContext.Provider>
    </Carousel>
  )
}