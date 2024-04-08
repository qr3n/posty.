'use client';

import {IIntegration} from "@entities/integration/model/types";
import Image from "next/image";
import {useContext} from "react";
import {CreateEventContext} from "@features/event/model/context";

export const AlmostDone = ({ integrations }: { integrations: IIntegration[] }) => {
    const { thumbnail, currentSlide } = useContext(CreateEventContext);

    return (
        <div className='relative w-full h-full'>
            {currentSlide === 2 &&
                <Image src={thumbnail ? thumbnail : ''} alt={''} className='w-full h-full z-[-1] absolute top-0 left-0 opacity-0.5'
                       width={1920} height={1080}/>}
            <div className='z-[-1] w-full h-full absolute top-0 left-0 bg-gradient-to-t from-15% from-black to-transparent'/>
            <div className="items-center flex justify-center flex-col text-center z-50 w-full h-full">
                <h1 className='font-semibold text-2xl'>Almost done!</h1>
                <p className='text-[#aaa] mt-2'>Please select the integrations that <br/> will be covered by the event
                </p>

                {integrations.map((integration: IIntegration) => <p
                    key={integration.id}>{integration.channel_name}</p>)}
            </div>
        </div>
    )
}