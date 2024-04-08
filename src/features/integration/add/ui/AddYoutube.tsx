"use client";

import { integrationModel } from "@entities/integration";
import { Button } from "@shared/shadcn/ui/button";
import { useUser } from "@auth0/nextjs-auth0/client";
import { DropdownMenuItem } from "@shared/shadcn/ui/dropdown-menu";
import Image from "next/image";
import youtube from "./youtube.png";

export const AddYoutube = () => {
  const session = useUser()

  return (
    <div className='flex gap-1'>
      <Image src={youtube} alt={'youyube'} width={32} height={8}/>
      <h1 className='font-semibold text-2xl'>Youtube</h1>
    </div>
  );
};
