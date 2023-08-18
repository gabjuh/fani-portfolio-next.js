// import { useContext, useEffect, useState } from "react";
import IData from '@/interfaces/IData';
import Image from 'next/image';
import UpcomingEvents from './UpcomingEvents';

const Hero = ({ data } : {data: IData }) => {

  const hero = data.hero

  return (
      <>
        <div className="relative h-[90vh] mt-[60px]" id="hero">
          <Image 
            src={`https://api.franciskahajdu.de/img/${hero[0].fileName}`}
            alt="hero image"
            fill
            sizes="(min-width: 808px) 50vw, 100vw"
            style={{
              objectFit: 'cover'
            }}
          />
        {/* <UpcomingEvents data={data} /> */}
        </div>
      </>
  )
}

export default Hero;