'use client'

import React, { use } from 'react'
import { TextGenerateEffect } from './text-generate-effect';
import dynamic from "next/dynamic";
import { globeConfig, sampleArcs } from '@/data/globeConfig';
import { Button } from './ui/button';
import { FaArrowRight } from "react-icons/fa";

const World = dynamic(() => import("./globe").then((m) => m.World), {
  ssr: false,
});

const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows`;

function Hero() {
  return (
    <div className="p-10 h-screen -z-10 w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className='flex sm:flex-row max-sm:flex-col h-full w-full items-center justify-between'>
        <div className=''>
          <h1 className='text-7xl max-sm:text-5xl max-sm:pt-[10vh] font-bold'>Kelajak Akademiyasi</h1>
          <TextGenerateEffect className="relative max-sm:text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 sm:py-8" duration={0.5} filter={true} words={words} />
          <Button variant="default" className='mt-4 z-20 cursor-pointer relative'>
            <p>Batafsil</p>
            <FaArrowRight className='ml-3' />
          </Button>
        </div>

        <World data={sampleArcs} globeConfig={globeConfig} />
      </div>



    </div>
  )
}

export default Hero