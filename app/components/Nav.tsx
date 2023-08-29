'use client'

import React, {useState, useEffect, useContext} from "react";
import INav from "@/interfaces/INav"
import NavMenuItem from "./NavMenuItem";
import TableIdContext from "@/providers/AppProvider";
import Link from "next/link";
import scrollToId from "@/helpers/scrollToId";
import MoonIco from "@/assets/icos/MoonIco";
import SunIco from "@/assets/icos/SunIco";
import { openSheetApiUrl, tableIds } from "@/helpers/connect"; // WIP!!!
import IMenu from '../../interfaces/IMenu';

const Nav: React.FC<INav> = ({ data: [menu, settingsArr] }) => {

  const settings = settingsArr[0];

  const [isTooltipOpen, setIsTooltipOpen] = React.useState(false);
  
  // Get the current system theme
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  const [theme, setTheme] = useState<'light' | 'dark'>(systemTheme);

  // Listen for changes to the prefers-color-scheme media query
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? 'dark' : 'light');
    };
    
  useEffect(() => {
    // document.documentElement.dataset.theme = lightTheme;

    // Check if the media query matches
    mediaQuery.addEventListener('change', handleChange);

    // Return a cleanup function to remove the listener
    return () => mediaQuery.removeEventListener('change', handleChange);
  })
  
  useEffect(() => {    
    if (theme === 'dark') {
      document.documentElement.dataset.theme = settings.darkTheme;
    } else {
      document.documentElement.dataset.theme = settings.lightTheme;
    }
  }, [theme]);

  const handleToggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }

  // const tableId = useContext(TableIdContext);

  React.useEffect(() => {
    setTimeout(() => {
      setIsTooltipOpen(true);
    }, 5000);
  }, []);
  return (
    <>
      <div className="navbar bg-base-100 z-[1500] fixed top-0 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            {/* Dropdown menu */}
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {menu.map((item, index) => (
                <NavMenuItem
                  key={index}
                  index={index}
                  title={item.title}
                  link={item.link}
                  // handleClick={handleClick}
                  isDropdown={true}
                  // handleClick={() => scrollToId(item.link.slice(2))} 
                />
              ))}
            </ul>
          </div>
          <div className="flex-1 whitespace-nowrap">
            {/* Logo/Title */}
            <Link
              href="/"
              className="btn btn-ghost normal-case text-xl"
              onClick={() => scrollToId('hero')}
              // onClick={() => handleClick(-1)}
            >{settings.homepageTitle}</Link>
          </div>
        </div>
        <div className="hidden lg:flex">
          {/* Horisontal menu */}
          <ul className="flex flex-row px-1">
            {menu.map((item, index) => (
              <NavMenuItem
                key={index}
                index={index}
                title={item.title}
                link={item.link}
                // handleClick={handleClick}
                // handleClick={() => scrollToId(item.link.slice(2))} 
              />
            ))}
          </ul>
        </div>
        <div className="navbar-end">

          {/* Email button */}
          <div className={`md:tooltip md:tooltip-sm mx-1 ${isTooltipOpen ? `md:tooltip-open` : ''} md:tooltip-bottom`} data-tip={settings.emailTooltipText}>
            <a href={`mailto:${settings.email}`} className="btn lg:btn-md btn-sm btn-secondary text-white">@</a>
          </div>

          {/* Theme toggler button */}
          <div className={`md:tooltip md:tooltip-sm mx-1 ${isTooltipOpen ? `md:tooltip-open` : ''} md:tooltip-bottom`} data-tip={settings.themeButtonTooltipText}>
            <button className="btn lg:btn-md btn-sm btn-secondary text-white px-[5px] lg:px-[10px]" onClick={handleToggleTheme}>
              {theme === 'light' ? <MoonIco /> : <SunIco />}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Nav;