import IData from '@/interfaces/IData';
import Image from 'next/image';
import getBase64 from '@/helpers/getPlaiceholder';
import UpcomingEvents from './UpcomingEvents';

export default async function Hero({ data }: { data: IData; }) {

  const getFilenameWithThumbnails = () => {
    const filenameArray = hero[0].fileName ? hero[0].fileName.split('.') : '';
    // return `${filenameArray[0]}_thumbnail.${filenameArray[1]}`;
    return `${filenameArray[0]}_base64.txt`;
  };

  const hero = data.hero;

  const myBlurDataUrl = await getBase64(hero[0].fileName);

  console.log(myBlurDataUrl);

  return (
    <>
      <div className="relative h-[90vh] mt-[60px]" id="hero">
        <Image
            // src={`https://api.franciskahajdu.de/img/thumbnails/${getFilenameWithThumbnails()}`}
            // blurDataURL={`https://api.franciskahajdu.de/img/thumbnails/${getFilenameWithThumbnails()}`}
            src={`https://api.franciskahajdu.de/img/${hero[0].fileName}`}
          // placeholder="blur"
          // blurDataURL={myBlurDataUrl}
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
