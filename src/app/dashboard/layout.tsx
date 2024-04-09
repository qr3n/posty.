import { getSession } from "@auth0/nextjs-auth0";
import { Button } from "@shared/shadcn/ui/button";
import { Avatar, AvatarImage } from "@shared/shadcn/ui/avatar";
import { PropsWithChildren, ReactNode } from "react";
import {
  DropdownMenu,
  DropdownMenuContent, DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@shared/shadcn/ui/dropdown-menu";
import { CreateEventWindow } from "@features/event/create/CreateEventWindow";
import Link from "next/link";
import { BsCalendar3 } from "react-icons/bs";
import { BsDiagram3 } from "react-icons/bs";
import { BsChatLeftDots } from "react-icons/bs";
import { NavigationButton } from "./NavigationButton";
import { EventCard } from "@entities/event/ui/EventCard";
import { DashboardTitle } from "./DashboardTitle";
import { api } from "@shared/api/api";
import { IIntegration } from "@entities/integration/model/types";
import { PlusIcon } from "@radix-ui/react-icons";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@shared/shadcn/ui/dialog";
import { AddTwitter, AddYoutube } from "@features/integration/add/ui";
import { AddInstagram } from "@features/integration/add/ui/AddInstagram";
import { redirect } from "next/navigation";

function AvatarFallback(props: { children: ReactNode }) {
  return null;
}

export default async function DashboardLayout(props: PropsWithChildren) {
  const session = await getSession()

  if (!session) return redirect('/')

  const integrations = await api.get<IIntegration[]>('https://77d3-80-67-220-252.ngrok-free.app/integrations')

  return (
    <div className='flex flex-col-reverse sm:flex-row w-screen h-screen bg-black'>
      <div className='flex w-full h-full flex-col overflow-hidden'>
        <div className='border-[#333] z-50 border-b w-full items-center flex justify-between bg-[#121212] h-max py-4 px-5'>
          <DashboardTitle/>
          <div className='flex gap-3 items-center justify-center'>
            <CreateEventWindow disabled={integrations.length === 0} integrations={integrations}/>
            <Dialog>
              <DialogTrigger asChild>
                <Button className='bg-yellow-400 flex gap-1 hover:bg-yellow-500'>Integration <PlusIcon/></Button>
              </DialogTrigger>
              <DialogContent className='max-w-[700px] h-screen sm:h-max'>
                <DialogTitle className='text-center'>Add integration</DialogTitle>
                <div className='sm:mt-6 h-max flex gap-4 justify-center flex-col sm:flex-row'>
                  { !integrations.some(i => i.integration_type === 'youtube') && <AddYoutube/> }
                  { !integrations.some(i => i.integration_type === 'twitter') && <AddTwitter/> }
                  { !integrations.some(i => i.integration_type === 'instagram') && <AddInstagram/> }
                </div>
              </DialogContent>
            </Dialog>
            <DropdownMenu>
              <DropdownMenuTrigger className='select-none'>
                <Avatar>
                  <AvatarImage src={session?.user?.picture}/>
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className='mr-4 mt-2'>
                <div className='flex gap-3 py-3 px-3 items-center'>
                  <Avatar className='w-12 h-12'>
                    <AvatarImage className='w-12 h-12' src={session?.user?.picture}/>
                    <AvatarFallback>{session?.user?.name}</AvatarFallback>
                  </Avatar>
                  <div className='flex flex-col'>
                    <h1 className='font-medium'>{session?.user.name}</h1>
                    <p className='text-xs text-[#aaa]'>Events: 0</p>
                  </div>
                </div>
                <DropdownMenuSeparator/>
                <Link href='/dashboard/scheduler'><DropdownMenuItem>Scheduler</DropdownMenuItem></Link>
                <Link href='/dashboard/integrations'><DropdownMenuItem>Integrations</DropdownMenuItem></Link>
                <Link href='/dashboard/assistant'><DropdownMenuItem>Assistant</DropdownMenuItem></Link>
                <DropdownMenuSeparator/>
                <Link href=''><DropdownMenuItem>Log out</DropdownMenuItem></Link>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className='flex w-full h-full flex-col-reverse sm:flex-row'>
          <div className='z-50 flex flex-row items-center justify-center sm:flex-col h-max w-full sm:w-max sm:h-full p-6'>
            <div
              className='sm:mt-[-73px] flex border border-[#343434] flex-row sm:flex-col gap-4 px-6 py-3 sm:px-3 sm:py-6 bg-[#161616] rounded-full'>
              <NavigationButton path='/dashboard/scheduler'>
                <BsCalendar3 className='w-5 h-5'/>
              </NavigationButton>

              <NavigationButton path='/dashboard/integrations'>
                <BsDiagram3 className='w-5 h-5'/>
              </NavigationButton>

              <NavigationButton path='/dashboard/assistant'>
                <BsChatLeftDots className='w-5 h-5'/>
              </NavigationButton>
            </div>
          </div>

          <div className='flex h-full w-full'>
            {props.children}
          </div>
        </div>
      </div>
    </div>
  )
}