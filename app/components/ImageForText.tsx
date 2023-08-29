import IImageForText from "@/interfaces/IImageForText";
import Image from "next/image";

const ImageForText: React.FC<IImageForText> = ({
  fileName,
  driveId,
  alt,
  classNameForImg,
}) => {
  return (
    <>
      <div className="w-full md:w-1/2">
        <Image 
          src={`https://api.franciskahajdu.de/img/${fileName}`}
          // placeholder="blur"
          width="400"
          height="200"
          alt={alt} 
          style={{
            width: '380px',
            height: 'auto',
          }}
          className={`${classNameForImg} mx-auto mb-6 md:mb-0`} 
        />
      </div>
    </>
  );
};

export default ImageForText;