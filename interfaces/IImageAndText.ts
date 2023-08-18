export default interface IImageAndText {
  driveId?: string;
  fileName?: string;
  alt?: string;
  imageLeft?: boolean;
  classNameForImg?: string;
  loaded?: boolean;
  text: string;
  textAlign?: 'auto' | 'justify';
  buttonText?: string;
}