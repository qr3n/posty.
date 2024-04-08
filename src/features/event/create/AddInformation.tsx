'use client';

import { ChangeEvent, useContext, useEffect, useRef, useState } from "react";
import { CreateEventContext } from "../model/context";
import { Input } from "@shared/shadcn/ui/input";
import { Textarea } from "@shared/shadcn/ui/textarea";
import { generateVideoThumbnails } from "@rajesh896/video-thumbnails-generator";
import Image from "next/image";
import { Skeleton } from "@shared/shadcn/ui/skeleton";
import { PlusIcon } from "@radix-ui/react-icons";
import { Button } from "@shared/shadcn/ui/button";
import { useInput } from "@shared/useInput";

export const AddInformation = () => {
  const { video, title, description, setTitle, setDescription, canContinue, setCanContinue } = useContext(CreateEventContext)
  const [thumbnails, setThumbnails] = useState<string[]>()
  const [selectedThumbnail, setSelectedThumbnail] = useState<string>()

  const inputRef = useRef<HTMLInputElement>(null)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event!.target!.files![0]!;

    if (!file) return;

    console.log(file)
    console.log(video)
  };

  useEffect(() => {
    if (video) {
      generateVideoThumbnails(video, 1, 'png').then((thumbnailArray) => {
        setThumbnails(thumbnailArray)
      }).catch((err) => {
        console.error(err);
      })
    }
  }, [video])

  useEffect(() => {
    if (title && description && !canContinue) setCanContinue(true)
    if (!title || !description && canContinue) setCanContinue(false)
    
  }, [title, description, canContinue, setCanContinue]);

  return (
    <div className="p-1 w-full sm:gap-8 pt-6 h-full flex flex-col-reverse sm:flex-row will-change-[none]">
      <div className='w-full sm:w-[55%]'>
        <h1 className='font-semibold text-2xl mt-8 sm:mt-0'>Information</h1>
        <Input className='bg-[#141414] border-[#333] mt-4' placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)}/>
        <Textarea className='bg-[#141414] border-[#333] resize-none h-36 mt-2' value={description} placeholder='Description' onChange={(e) => setDescription(e.target.value)}/>
        <h1 className='font-semibold mt-6'>Thumbnail</h1>
        <div className='flex gap-3 mt-4 flex-wrap'>
          { thumbnails ?
            <>
              <div className='text-sm p-3 h-full flex gap-0.5 items-center justify-center w-1/4 bg-[#111] border border-[#222] cursor-pointer rounded-lg' style={{aspectRatio: 16 / 9}}>
                <PlusIcon/>
                Upload
              </div>
              {thumbnails.map(t => <Image key={t} className='w-1/4 rounded-lg object-cover' src={t} alt={''} width={200}
                                          height={200} style={{aspectRatio: 16 / 9}}/>)}
            </> :
            <>
              <Skeleton className='w-1/4 h-16' style={{aspectRatio: 16 / 9}}/>
              <Skeleton className='w-1/4 h-16' style={{aspectRatio: 16 / 9}}/>
              <Skeleton className='w-1/4 h-16' style={{aspectRatio: 16 / 9}}/>
            </>
          }
        </div>
      </div>
      <div className='w-full sm:w-[45%] justify-between h-full'>
        <div>
          <div style={{aspectRatio: 16 / 9}} className='rounded-t-2xl'>
            {video && <video src={URL.createObjectURL(video)} width={1920} height={1080}
                             className='w-full h-full bg-gradient-to-b from-[#151515] to-black rounded-t-2xl'
                             controls/>}
          </div>
          <div className='rounded-b-2xl bg-[#000] py-4 px-6'>
            <p className='text-[#aaa] text-sm'>Filename</p>
            <p className='text-blue-500'>test.mp4</p>

            <p className='text-[#aaa] text-sm mt-3'>Estimated uploading time</p>
            <p>~1 hour</p>
          </div>
        </div>
      </div>
    </div>
  )
}