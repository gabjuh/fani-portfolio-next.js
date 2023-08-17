import IImageForText from "@/interfaces/IImageForText";
import Image from "next/image";

const ImageForText: React.FC<IImageForText> = ({
  driveId,
  alt,
  classNameForImg,
}) => {
  return (
    <>
      <div className="w-full md:w-1/2">
        <Image 
          src={`https://drive.google.com/uc?export=view&id=${driveId}`}
          width="400"
          height="200"
          alt={alt} 
          className={`${classNameForImg} mx-auto mb-6 md:mb-0`} 
        />
      </div>
    </>
  );
};

export default ImageForText;