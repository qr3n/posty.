import { TAllowedIntegrations } from "../model/types";
import Image, { StaticImageData } from "next/image";
import twitter from './twitter.png'
import youtube from './youtube.png'
import instagram from './instagram.png'
import { FiMoreHorizontal } from "react-icons/fi";
import { Button } from "@shared/shadcn/ui/button";
import { FaExternalLinkAlt } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@shared/shadcn/ui/dropdown-menu";

interface IProps {
  integration_type: TAllowedIntegrations,
  channel_name: string
}

const integrations: Record<TAllowedIntegrations, string> = {
  youtube: 'YouTube',
  twitter: 'Twitter',
  instagram: 'Instagram'
}

const images: Record<TAllowedIntegrations, StaticImageData> = {
  youtube: youtube,
  twitter: twitter,
  instagram: instagram
}

export const IntegrationCard = (props: IProps) => {
  return (
    <div className="p-4 bg-[#222] w-full flex justify-between rounded-xl cursor-pointerZ">
      <div>
        <div className='flex gap-2 w-full'>
          <Image src={images[props.integration_type]} width={18} height={18} alt=''/>
          <h1 className='font-medium'>{integrations[props.integration_type]}</h1>
        </div>
        <p className='text-sm mt-0.5'>{props.channel_name}</p>
        <p className='text-[#aaa] text-xs flex gap-1 mt-0.5'>Added 1 minute ago</p>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size='icon' className='bg-[#333] hover:bg-[#444]'>
            <FiMoreHorizontal className='text-white'/>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className='mr-4'>
          <DropdownMenuItem>Visit</DropdownMenuItem>
          <DropdownMenuItem>Statistic</DropdownMenuItem>
          <DropdownMenuItem>Unlink</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
