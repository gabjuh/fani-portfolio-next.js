import IImageAndText from "@/interfaces/IImageAndText";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import ImageForText from "./ImageForText";
import Title from './Title';

const ImageAndText: React.FC<IImageAndText> = ({
  title,
  driveId,
  fileName,
  alt,
  classNameForImg,
  imageLeft,
  text,
  textAlign,
  buttonText
}) => {

  return (
    <>
      <div className={`flex ${imageLeft ? 'flex-col' : 'flex-col-reverse'} md:flex-row lg:my-16 mb-4 pt-24`} id="about-me">
        {imageLeft && <ImageForText fileName={fileName} driveId={driveId || ''} alt={alt || 'image'} classNameForImg={classNameForImg} />}
        <div className={`w-full md:w-4/6 flex flex-col ${!imageLeft ? 'items-end' : ''} justify-center md:ml-10 mr-10`}>
          <div 
            className={`${imageLeft ? textAlign === 'justify' ? 'md:text-justify' : 'md:text-left' : textAlign === 'justify' ? 'md:text-justify' : 'md:text-right'} md:ml-10 lg:ml-0 lg:mr-0 text-center leading-8 px-8 md:p-0`}
          >
            {/* {title && <Title title={title} className="md:text-right uppercase text-4xl" />} */}
            {title && <h2 className={`${imageLeft ? 'md:text-left' : 'md:text-right'} uppercase text-4xl mb-3`}>{title}</h2>}
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
        {!imageLeft && <ImageForText fileName={fileName} driveId={driveId || ''} alt={alt || ''} classNameForImg={classNameForImg} />}
      </div>

    </>
  );
};

export default ImageAndText;