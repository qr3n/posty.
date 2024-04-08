import { Skeleton } from "@shared/shadcn/ui/skeleton";
import Image from "next/image";
import { AspectRatio } from "@shared/shadcn/ui/aspect-ratio";
import { examples } from "./examples/images";

export const NoEvents = () => {
  return (
    <>
      <div
        className='absolute w-full z-40 top-0 left-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 overflow-y-auto px-8 pb-8 pt-8 gap-6'>
        { examples.map((e, i) => (
          <AspectRatio key={i} ratio={16 / 9}>
            <Image
              className='z-40 w-full h-full object-cover rounded-md'
              src={e}
              alt='' width={1920} height={1080}
            />
          </AspectRatio>
        )) }
      </div>
      <div className='h-screen w-screen absolute top-0 left-0 bg-gradient-to-t from-40% sm:from-35% from-black to-trasparent z-40'/>
    </>
  )
}