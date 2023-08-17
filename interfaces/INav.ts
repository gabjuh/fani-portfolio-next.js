import IMenuItem from './IMenuItem';

export default interface INav {
  // menuItems: IMenuItem[];
  selected: number;
  handleClick: (index: number) => void;
  homepageTitle?: string;
  email?: string;
  emailTooltipText?: string;
  darkTheme?: string;
  lightTheme?: string;
}