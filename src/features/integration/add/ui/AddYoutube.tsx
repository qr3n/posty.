'use client';

import Image from "next/image";
import youtube from "./youtube.png";
import { PlusIcon } from "@radix-ui/react-icons";
import { integrationModel } from "@entities/integration";
import { useUser } from "@auth0/nextjs-auth0/client";

export const AddYoutube = () => {
  const user = useUser()

  return (
    <div className='bg-[#161616] w-full sm:w-1/3 transition-all flex gap-1 flex-col items-center px-4 py-12 h-full rounded-xl cursor-pointer hover:bg-[#222]'
      onClick={user ? () => integrationModel.actions.addIntegration('youtube', user.user!.sub!) : () => null}
    >
      <div className='flex gap-0.5 flex-col text-center items-center'>
        <Image src={youtube} alt={'youyube'} className='w-max h-max' width={18}/>
        <h1 className='font-semibold text-xl mt-1'>Youtube</h1>
        <p className='text-[#aaa] text-sm'>Large-scale videos</p>
      </div>
    </div>
  );
};
