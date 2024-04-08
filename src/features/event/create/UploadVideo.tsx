'use client';
import upload from './upload.png'
import Image from "next/image";
import { ChangeEvent, useContext, useRef } from "react";
import { CreateEventContext } from "../model/context";

export const UploadVideo = () => {
  const { setVideo, next, video } = useContext(CreateEventContext)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event!.target!.files![0]!;

    if (!file) return;

    setVideo(file);

    console.log(file)
    console.log(video)

    if (next) next();
  };

  return (
    <>
      <div className='text-center flex flex-col gap-1 items-center cursor-pointer justify-center group' onClick={() => inputRef?.current?.click()}>
        <Image src={upload} width={128} height={128} alt='1' className='group-hover:scale-[105%] transition-transform will-change-transform'/>
        <h1 className='font-medium mt-4'>Upload your video</h1>
        <p className='text-[#aaa] text-xs'>It will be saved on our servers</p>
        <input type='file' className='hidden' accept="video/mp4"
               ref={inputRef} onChange={handleChange}/>
      </div>
    </>
  )
}