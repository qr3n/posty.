"use client";

import { integrationModel } from "@entities/integration";
import { Button } from "@shared/shadcn/ui/button";
import { useUser } from "@auth0/nextjs-auth0/client";
import { DropdownMenuItem } from "@shared/shadcn/ui/dropdown-menu";
import twitter from './twitter.png'
import Image from "next/image";

export const AddInstagram = () => {
  const session = useUser()

  return (
    <div className='flex gap-1 items-center' onClick={() => integrationModel.actions.addIntegration("twitter", session!.user!.sub!)}>
      <Image src={twitter} alt={'twitter_icon'} width={18} height={18} className='rounded-[4px]'/> Instagram
    </div>
  );
};
