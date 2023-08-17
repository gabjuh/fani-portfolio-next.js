export default interface INavMenuItem {
  index: number;
  title: string;
  link: string;
  selected?: boolean;
  handleClick?: (index: number) => void;
  isDropdown?: boolean;
  // handleClick: () => void;
}