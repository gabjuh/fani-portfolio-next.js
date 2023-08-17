import IImageAndText from "@/interfaces/IImageAndText";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import ImageForText from "./ImageForText";

const ImageAndText: React.FC<IImageAndText> = ({
  driveId,
  alt,
  classNameForImg,
  imageLeft,
  text,
  textAlign,
  buttonText
}) => {

  return (
    <>
      <div className={`flex ${imageLeft ? 'flex-col' : 'flex-col-reverse'} md:flex-row lg:my-16 my-4`}>
        {imageLeft && <ImageForText driveId={driveId || ''} alt={alt || 'image'} classNameForImg={classNameForImg} />}
        <div className={`w-full md:w-1/2 flex flex-col ${!imageLeft ? 'items-end' : ''} justify-center`}>
          <div 
            className={`${imageLeft ? textAlign === 'justify' ? 'md:text-justify' : 'md:text-left' : textAlign === 'justify' ? 'md:text-justify' : 'md:text-right'} md:ml-8 lg:ml-0 md:mr-8 lg:mr-0 text-center leading-8`}
          >
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              children={text}
            />
          </div>
          {buttonText &&
            <p className={`flex-none text-center ${imageLeft ? textAlign === 'justify' ? 'md:text-justify' : 'md:text-left' : textAlign === 'justify' ? 'md:text-justify' : 'md:text-right'} mt-5 w-[100%]`}>
              <Link
                className="btn btn-sm btn-secondary text-white"
                href="/cv"
              >
                {buttonText}
              </Link>
            </p>
          }

        </div>
        {!imageLeft && <ImageForText driveId={driveId || ''} alt={alt || ''} classNameForImg={classNameForImg} />}
      </div>

    </>
  );
};

export default ImageAndText;