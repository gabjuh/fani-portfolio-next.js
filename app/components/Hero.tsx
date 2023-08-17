// import { useContext, useEffect, useState } from "react";
import IData from '@/interfaces/IData';
import Image from 'next/image';
import UpcomingEvents from './UpcomingEvents';

const Hero: React.FC<any> = ({ data }) => {

  const driveId = '1En33PhpCjDoxYl0mfFsX_lo4fRv-EwUt';

  return (
      <>
        <div className="relative h-[90vh] mt-[60px]" id="hero">
          <Image 
            src={`https://drive.google.com/uc?export=view&id=${driveId}`}
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