import { EventCard } from "@entities/event/ui/EventCard";
import Image from "next/image";
import { Button } from "@shared/shadcn/ui/button";
import test from './test.svg'
import { NoEvents } from "./NoEvents";
export default function SchedulerPage() {
  return (
    <>
      <div className='relative p-8 text-center w-full h-full flex items-center justify-center'>
        <NoEvents/>
        <div className='mt-[-4rem] flex flex-col gap-1 items-center justify-center z-50'>
          <Image src={test} alt={''} width={128} height={128}/>
          <h1 className='text-xl sm:text-2xl text-white font-semibold mt-4'>{"You don't have any events yet"}</h1>
          <p className='text-sm sm:text-base text-[#aaa]'>{"But you can always create them!\n"}</p>
        </div>
      </div>
    </>
  )
}