import Image from "next/image";
import { AspectRatio } from "@shared/shadcn/ui/aspect-ratio";

export const EventCard = () => {
  return (
    <div className='group cursor-pointer relative'>
      <AspectRatio ratio={16 / 9}>
        <Image
          className='group-hover:opacity-65 w-full h-full object-cover rounded-md'
          src='https://i.pinimg.com/736x/5a/2e/37/5a2e373fb15805b2869e86a7dec7a1a4.jpg'
          alt='' width={1920} height={1080}
        />
        <div className='absolute p-3.5 rounded-sm bg-[#333] top-2 border border-[#555] left-2 opacity-0 group-hover:opacity-100'/>
        <div className='absolute p-3.5 rounded-sm bg-[#333] border border-[#555] top-2 right-4 opacity-0 group-hover:opacity-100'/>
      </AspectRatio>

    </div>
  )
}