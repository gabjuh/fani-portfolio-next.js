'use client'

import { useContext, useEffect, useState } from "react";
// import Image from '../Image';
import Image from "next/image";
import { openSheetApiUrl } from "../../helpers/connect";
import TableIdContext from "@/providers/AppProvider";
// import UpcomingEvents from "../UpcomingEvents";

interface IHero1 {}

interface IHero1Data {
  pageTitle?: string;
  driveId?: string;
  imgAlt?: string;
  buttonText?: string;
}

const Hero1: React.FC<IHero1> = ({}) => {

  const [data, setData] = useState<IHero1Data | null>(null);

  const tableId = useContext(TableIdContext);

  useEffect(() => {
    fetch(`${openSheetApiUrl}${tableId.id}/${'hero'}`)
      .then((response) => response.json())
      .then((data) => setData(data[0]));
  }, []);

  useEffect(() => {
    // data !== null && console.log(data);
    data !== null && console.log(`${openSheetApiUrl}${tableId.id}/${'hero'}`);
  }, [data]);

  return (
      <>
        <div className="relative" id="hero">
          <Image
            // src="600x400"
            // src={`https://drive.google.com/uc?export=view&id=${data?.driveId}`}
            // src="https://drive.google.com/file/d/1M-4LFYZ6xEHDEL1g85FBLqYooFRhvWYZ/view?usp=sharing"
            src="/cat.jpg"
            // src={`https://drive.google.com/uc?export=view&id=${data?.driveId}`}
            width={600}
            height={400}
            layout="responsive"
            objectFit="cover"
            objectPosition="center"
            alt="asdasd"
            className="w-full mx-auto"
            // driveId={data?.driveId}
            // alt={data?.imgAlt}
            // type="bg"
          />
        {/* <UpcomingEvents /> */}
        </div>
      </>
  )
}

export default Hero1;