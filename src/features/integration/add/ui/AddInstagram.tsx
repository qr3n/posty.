"use client";

import { integrationModel } from "@entities/integration";
import { Button } from "@shared/shadcn/ui/button";
import { useUser } from "@auth0/nextjs-auth0/client";
import { DropdownMenuItem } from "@shared/shadcn/ui/dropdown-menu";
import insta from './instagram.png'
import Image from "next/image";

export const AddInstagram = () => {
  const session = useUser()

  return (
    <div className='bg-[#161616] w-full sm:w-1/3 transition-all h-full flex gap-1 flex-col items-center px-6 py-12 rounded-xl cursor-pointer hover:bg-[#222]'>
      <div className='flex gap-0.5 flex-col text-center items-center'>
        <Image src={insta} alt={'youyube'} className='w-max h-max' width={18}/>
        <h1 className='font-semibold text-xl mt-1'>Instagram</h1>
        <p className='text-[#aaa] text-sm'>Short videos and links</p>
      </div>
    </div>
  );
};
