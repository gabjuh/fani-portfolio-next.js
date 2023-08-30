'use client'

import INavMenuItem from "@/interfaces/INavMenuItem";
import Link from "next/link";

const NavMenuItem: React.FC<INavMenuItem> = ({
  index,
  title,
  link,
  selected,
  handleClick,
  isDropdown
}) => {
  return (
    <li className={isDropdown && selected ? `bg-secondary` : ''}>
      <Link
        href={link}
        className={`mx-4 whitespace-nowrap cursor-pointer px-1 py-3`}
        onClick={(e) => handleClick(e, link)}
      >
        {title}
      </Link>
      {!isDropdown && <div className={`h-[4px] ${selected ? 'w-[95%]' : 'w-[0%]'}  hover:w-[95%] bg-secondary mx-auto mt-1 transition-all duration-200 ease-in-out`}></div>}
    </li>
  );
};

export default NavMenuItem;