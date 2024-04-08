import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription, DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@shared/shadcn/ui/dialog";
import { Button } from "@shared/shadcn/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@shared/shadcn/ui/carousel";
import { PlusIcon } from "@radix-ui/react-icons";
import { UploadVideo } from "./UploadVideo";
import { EventContext } from "./Context";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@shared/shadcn/ui/tooltip";
import { useState } from "react";
import { AddInformation } from "./AddInformation";
import {AlmostDone} from "@features/event/create/AlmostDone";
import {IIntegration} from "@entities/integration/model/types";

export const CreateEventWindow = ({ disabled, integrations }: { disabled: boolean, integrations: IIntegration[] }) => {

  return (
    <Dialog>
      <DialogTrigger asChild>
        { disabled ? <TooltipProvider><Tooltip>
          <TooltipTrigger asChild>
            <Button className='font-normal flex gap-1 bg-orange-500 hover:bg-orange-600' disabled>Event <PlusIcon/> </Button>
          </TooltipTrigger>

          <TooltipContent>
            <p>Add to library</p>
          </TooltipContent>
        </Tooltip></TooltipProvider> :  <Button className='font-normal flex gap-1 bg-orange-500 hover:bg-orange-600'>Event <PlusIcon/> </Button>}
      </DialogTrigger>
      <DialogContent className='[&>*]:will-change-transform h-screen sm:h-[70vh] sm:max-w-[900px] overflow-y-auto'>
        <EventContext>
          <CarouselContent className='w-full h-full [&>*]:h-full'>
            <CarouselItem>
              <div className="p-1 w-full h-full flex items-center justify-center">
                <UploadVideo/>
              </div>
            </CarouselItem>

            <CarouselItem>
              <AddInformation/>
            </CarouselItem>

            <CarouselItem>
              <div className="p-1 w-full h-full flex items-center justify-center">
                <AlmostDone integrations={integrations}/>
              </div>
            </CarouselItem>
          </CarouselContent>
        </EventContext>
      </DialogContent>
    </Dialog>
  )
}