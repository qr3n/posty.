import Image from "next/image";
import youtube from "./youtube.png";

export const AddYoutube = () => {
  return (
    <div className='flex gap-1'>
      <Image src={youtube} alt={'youyube'} width={32} height={8}/>
      <h1 className='font-semibold text-2xl'>Youtube</h1>
    </div>
  );
};
