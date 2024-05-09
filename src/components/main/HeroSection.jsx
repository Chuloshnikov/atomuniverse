"use client"
import React from 'react';
import Image from 'next/image';
import { 
    herorobot, 
    smartline,
    robottec,
    fauget,
    labsify,
    braintec,
    artificial,
    borcelle,
    brainai,
    impactesports,
    humantech,
    creativeidea,
    infinity
} from '@/assets/images';

const HeroSection = () => {
  return (
    <div className='max-w-6xl mx-auto'>
        <div className='max-w-full rounded-lg mt-12 mx-6 flex flex-col text-center mdl:text-left xl:flex-row gap-10'>
            <div className='xl:max-w-[50%] mx-auto'>
                <Image src={herorobot} layout='fil' alt='robot' className='rounded-lg'/>
            </div>
            <div className='xl:max-w-[50%] mx-auto'>
                <h2 className='textShadow text-smouthText text-4xl top-1 mx-auto'>Atom Universe - Your key to the blockchain of the future.</h2>
                <div className='mt-8 grid grid-cols-4 gap-6 flex-wrap max-w-[500px] pb-4 border-b-smouthText border-b-2 mx-auto'>
                    <Image src={smartline} width={100} height={100} alt='smartline'/>
                    <Image src={robottec} width={100} height={100} alt='robottec'/>
                    <Image src={fauget} width={100} height={100} alt='fauget'/>
                    <Image src={labsify} width={100} height={100} alt='labsify'/>
                    <Image src={braintec} width={100} height={100} alt='braintec'/>
                    <Image src={artificial} width={100} height={100} alt='artificial'/>
                    <Image src={borcelle} width={100} height={100} alt='borcelle'/>
                    <Image src={brainai} width={100} height={100} alt='brainai'/>
                    <Image src={impactesports} width={100} height={100} alt='impactesports'/>
                    <Image src={humantech} width={100} height={100} alt='humantech'/>
                    <Image src={creativeidea} width={100} height={100} alt='creativeidea'/>
                    <Image src={infinity} width={100} height={100} alt='infinity'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection;