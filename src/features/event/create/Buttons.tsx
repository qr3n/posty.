'use client';

import { useContext } from "react";
import { CreateEventContext } from "../model/context";
import { Button } from "@shared/shadcn/ui/button";
import { DialogFooter } from "@shared/shadcn/ui/dialog";

export const Buttons = () => {
  const { canContinue, next, previous, currentSlide } = useContext(CreateEventContext)

  return (
    <DialogFooter>
      { currentSlide > 1 && <Button variant='secondary' onClick={previous} className='mt-2 sm:mt-0'>Previous</Button> }

      { currentSlide > 0 && (
        <Button onClick={next} className='mt-2 sm:mt-0' disabled={!canContinue}>Continue</Button>
      ) }

    </DialogFooter>
  )
}