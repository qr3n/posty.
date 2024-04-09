import { api } from "@shared/api/api";
import { AddTwitter, AddYoutube } from "@features/integration/add/ui";
import { IIntegration } from "@entities/integration/model/types";
import Image from "next/image";
import { Button } from "@shared/shadcn/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@shared/shadcn/ui/dropdown-menu";
import { IntegrationCard } from "@entities/integration";
import test from './test.svg'
import test2 from './test2.png'

export default async function IntegrationsPage() {
  const integrations = await api.get<IIntegration[]>('https://77d3-80-67-220-252.ngrok-free.app/integrations')

  return (
    <>
      {
        integrations.length === 0 &&
          <div className='p-8 text-center w-full h-full flex items-center justify-center overflow-hidden'>
              <Image src={test2} alt={''} className='px-6 sm:px-14 md:px-18 lg:px-20 24 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]' width={800} height={800}/>
              <div
                  className='h-screen w-screen absolute top-0 left-0 bg-gradient-to-t from-black to-trasparent z-40 from-30% sm:from-20%'/>
              <div className='mt-[-4rem] flex flex-col gap-1 items-center  justify-center z-50'>

                  <Image src={test} alt={''} width={128} height={128}/>
                  <h1 className='text-xl sm:text-2xl text-white font-semibold mt-4'>{"You don't have any integrations yet"}</h1>
                  <p className='text-sm sm:text-base text-[#aaa]'>{"Our most popular is YouTube\n"}</p>
              </div>
          </div>
      }

      {integrations.length !== 0 && (
        <div className='flex gap-2 flex-col p-6 w-full'>
          {integrations.map(i => <IntegrationCard key={i.id} {...i}/>)}
        </div>
      )}
    </>
  )
}