import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className="flex items-center justify-center h-screen overflow-hidden bg-local bg-center bg-cover custom-img">
        {/*Overlay */}

        <div className='p-5 text-white z-[2] mt-[-30rem]'>
            <h2 className='text-5xl font-bold'>Beyond the citadel,</h2>
            <h2 className='pr-4 text-5xl font-bold'>there is a</h2>
            <Image src="/assets/sanctlargedraft_1.svg" alt="logo" width={400} height={200}/>
        </div>


    </div>
  )
}

export default Hero
