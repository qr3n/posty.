'use client';

import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { CreateEventContext } from "../model/context";
import { Carousel, CarouselApi } from "@shared/shadcn/ui/carousel";
import { DialogFooter } from "@shared/shadcn/ui/dialog";
import { Button } from "@shared/shadcn/ui/button";
import { Buttons } from "./Buttons";

export const EventContext = (props: PropsWithChildren) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [api, setApi] = useState<CarouselApi>()
  const [video, setVideo] = useState<File | null>(null)
  const [thumbnail, setThumbnail] = useState<File | null>(null)
  const [canContinue, setCanContinue] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const next = () => {
    api?.scrollNext()
    setCurrentSlide(p => p + 1)
  }

  const previous = () => {
    api?.scrollPrev()
    setCurrentSlide(p => p - 1)
  }

  return (
    <CreateEventContext.Provider value={{ video, setVideo, next, previous, thumbnail, setThumbnail, canContinue, setCanContinue, title, description, setTitle, setDescription, currentSlide }}>
      <Carousel setApi={setApi} className="w-full h-full [&>*]:h-full" opts={{
        watchDrag: false
      }}>
          { props.children }
      </Carousel>
      <Buttons/>
    </CreateEventContext.Provider>
  )
}