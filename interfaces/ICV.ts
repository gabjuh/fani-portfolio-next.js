export default interface ICV {
  sheetId?: string;
  pageTitle?: string;
  active: '0' | '1';
  id: number;
  fileName: string;
  driveId?: string;
  imgAlt?: string;
  imgOnSide?: 'left' | 'right';
  text: string;
  buttonText?: string;
}