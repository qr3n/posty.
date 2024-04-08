import { Button } from "@shared/shadcn/ui/button";
import test from './test.jpg'
import Image from "next/image";
import Link from "next/link";
import { GrAction } from "react-icons/gr";
import { FaArrowRightLong } from "react-icons/fa6";
import { ScrollArea } from "@shared/shadcn/ui/scroll-area";

export default function HomePage() {
  return (
    <ScrollArea>
      <div className='w-screen h-screen bg-black'>
        <div className='flex sm:items-center px-8 md:px-16 lg:px-20 xl:px-24 pt-24 justify-center flex-col gap-2'>
          <div className='absolute top-0 left-0 h-screen w-screen'>
            <Image src={test} width={1920} height={1080} alt='bg' className='w-fill h-full object-cover'/>
          </div>
          <div className='h-screen w-screen absolute top-0 left-0 bg-gradient-to-b from-black to-transparent'/>

          <div className='
        cursor-pointer
        hover:rotate-[-2deg]
        transition-all
        hover:scale-[105%]
        z-50 px-3.5 py-2
        w-max
        text-xs
        bg-[#00FF75]
        rounded-full
        font-semibold
        rotate-[-5deg]
        will-change-transform
        text-gray-800
        '
               style={{boxShadow: '0 0 65px 2px #00FF75'}}
          >
            NOW WITH AI
          </div>
          <h1 className='z-50 text-white text-5xl font-semibold mt-2'>Get creative, not routine</h1>
          <Link href='/api/auth/login' className='z-50 mt-4'><Button
            className='w-max bg-blue-600 hover:bg-blue-700 flex items-center justify-center gap-2' size='lg'>
            Get early access
            <FaArrowRightLong/>
          </Button></Link>
        </div>
      </div>
    </ScrollArea>
  )
}