'use client';

import React, { useState, useEffect, useContext, MouseEventHandler } from "react";
import INav from "@/interfaces/INav";
import NavMenuItem from "./NavMenuItem";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import TableIdContext from "@/providers/AppProvider";
import Link from "next/link";
import scrollToId from "@/helpers/scrollToId";
import MoonIco from "@/assets/icos/MoonIco";
import SunIco from "@/assets/icos/SunIco";
import { openSheetApiUrl, tableIds } from "@/helpers/connect"; // WIP!!!
import IMenu from '../../interfaces/IMenu';
import FlagEn from "@/assets/flags/Flag-gb";
import FlagDe from "@/assets/flags/Flag-de";
import FlagHu from "@/assets/flags/Flag-hu";
import Envelope from "@/assets/icos/Envelope";

const Nav: React.FC<INav> = ({ data: [menu, settingsArr] }) => {

  const settings = settingsArr[0];

  const [isTooltipOpen, setIsTooltipOpen] = React.useState(false);

  const [selectedMenuItem, setSelectedMenuItem] = useState<string>('');

  const router = useRouter();

  const pathname = usePathname();

  const handleClick = (event: any, link: string) => {
    event.preventDefault();

    // If we are in another page than the home page, we need to navigate to the home page first
    // if (pathname !== '/') {
    //   router.push('/');
    //   setTimeout(() => {
    //     scrollToId(link);
    //   }, 400);
    // } else {
    //   scrollToId(link);
    // }

    scrollToId(link);

    setSelectedMenuItem(link);
  };

  const handleMouseLeave = (event: any) => {
    handleHideMenu();
  };

  const handleHideMenu = () => {
    document.getElementById("dropdown-menu-details")?.removeAttribute("open");
  }

  // Get the current system theme
  // const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  // const [theme, setTheme] = useState<'light' | 'dark'>(systemTheme);

  // Listen for changes to the prefers-color-scheme media query
  // const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  //   const handleChange = (e: MediaQueryListEvent) => {
  //     setTheme(e.matches ? 'dark' : 'light');
  //   };

  // useEffect(() => {
  //   // document.documentElement.dataset.theme = lightTheme;

  //   // Check if the media query matches
  //   mediaQuery.addEventListener('change', handleChange);

  //   // Return a cleanup function to remove the listener
  //   return () => mediaQuery.removeEventListener('change', handleChange);
  // })

  // useEffect(() => {
  //   if (theme === 'dark') {
  //     document.documentElement.dataset.theme = settings.darkTheme;
  //   } else {
  //     document.documentElement.dataset.theme = settings.lightTheme;
  //   }
  // }, [theme]);

  // const handleToggleTheme = () => {
  //   if (theme === 'dark') {
  //     setTheme('light');
  //   } else {
  //     setTheme('dark');
  //   }
  // }

  // const [selectedLanguage, setSelectedLanguage] = useState<string>(localStorage.getItem('selectedLanguage') ?? '');
  const [useUserPreferedLanguage, setUseUserPreferedLanguage] = useState<boolean>(false);

  const awailableLanguages = ['en', 'de', 'hu'];

  // useEffect(() => {
    // Get the user's language
    // const getUserLang = window.navigator.language.substring(0, 2);

    // Check if user already selected a language
    // if (!useUserPreferedLanguage || !localStorage.getItem('selectedLanguage')) {

      // // Check if the user's language is available
      // if (awailableLanguages.includes(getUserLang)) {

      //   // Set the user's language as the selected language
      //   setSelectedLanguage(getUserLang);
      // } else {

      //   // Set the default language as the selected language
      //   setSelectedLanguage('en');
      // }

    // } else {
    //   localStorage.setItem('selectedLanguage', selectedLanguage);
    // }

  // }, [selectedLanguage]);

  // const showNextLanguage = () => {
  //   const currentIndex = awailableLanguages.indexOf(selectedLanguage);
  //   const nextIndex = (currentIndex + 1) % awailableLanguages.length;
  //   setSelectedLanguage(awailableLanguages[nextIndex]);
  //   localStorage.setItem('selectedLanguage', selectedLanguage);
  // };

  // const getTextInSelectedLanguage = (obj: any, id: string) => {
  //   switch (selectedLanguage) {
  //     case 'en':
  //       return obj[`${id}En`];
  //     case 'de':
  //       return obj[`${id}De`];
  //     case 'hu':
  //       return obj[`${id}Hu`];
  //     default:
  //       return obj[`${id}De`];
  //   }
  // };

  // const handleSelectLanguage = () => {
  //   setUseUserPreferedLanguage(true);
  //   showNextLanguage();
  // };

  // React.useEffect(() => {
  //   setTimeout(() => {
  //     setIsTooltipOpen(true);
  //   }, 5000);
  // }, []);

  return (
    <>
      <div className="navbar bg-base-100 z-[1500] fixed top-0 mx-auto">
        <div className="navbar-start">

          <details className="dropdown lg:hidden" id="dropdown-menu-details">
            <summary className="m-1 btn">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </summary>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52" id="dropdown" onMouseLeave={(e) => handleMouseLeave(e)}>
              {menu.map((item, index) => (
                <React.Fragment key={`menu-item-dropdown-${index}`}>
                  {item.active === '1' && (
                    <NavMenuItem
                      key={index}
                      index={index}
                      selected={selectedMenuItem === item.link}
                      title={item.titleEn}
                      link={item.link}
                      handleClick={handleClick}
                      isDropdown={true}
                    // handleClick={() => scrollToId(item.link.slice(2))}
                    />
                  )}
                </React.Fragment>
              ))}
            </ul>
          </details>

          {/* <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52" id="dropdown">
              {menu.map((item, index) => (
                <React.Fragment key={`menu-item-dropdown-${index}`}>
                  {item.active === '1' && (
                    <NavMenuItem
                      key={index}
                      index={index}
                      selected={selectedMenuItem === item.link}
                      title={item.titleEn}
                      link={item.link}
                      handleClick={handleClick}
                      isDropdown={true}
                    // handleClick={() => scrollToId(item.link.slice(2))}
                    />
                  )}
                </React.Fragment>
              ))}
            </ul>
          </div> */}


          <div className="flex-1 whitespace-nowrap">
            {/* Logo/Title */}
            <Link
              href="/"
              className="btn btn-ghost normal-case text-xl mx-auto"
              onClick={() => scrollToId('hero')}
            // onClick={() => handleClick(-1)}
            >{settings.homepageTitle}</Link>
          </div>
        </div>
        <div className="hidden lg:flex">
          {/* Horisontal menu */}
          <ul className="flex flex-row px-1">
            {menu.map((item, index) => (
              <React.Fragment key={`menu-item-${index}`}>
                {item.active === '1' && (
                  <NavMenuItem
                    key={index}
                    index={index}
                    selected={selectedMenuItem === item.link}
                    title={item.titleEn}
                    link={item.link}
                    handleClick={handleClick}
                    isDropdown={false}
                  // handleClick={() => scrollToId(item.link.slice(2))} 
                  />
                )}
              </React.Fragment>
            ))}
          </ul>
        </div>
        <div className="navbar-end">

          {/* Email button */}
          <div className={`md:tooltip md:tooltip-sm mx-1 ${isTooltipOpen ? `md:tooltip-open` : ''} md:tooltip-bottom`} data-tip={settings.emailTooltipTextEn}>
            <a href={`mailto:${settings.email}`} className="btn btn-md px-2.5 btn-secondary text-white">
              <Envelope />
              {/* @ */}
            </a>
          </div>

          {/* Theme toggler button */}
          {/* <div className={`md:tooltip md:tooltip-sm mx-1 ${isTooltipOpen ? `md:tooltip-open` : ''} md:tooltip-bottom`} data-tip={settings.themeButtonTooltipTextEn}>
            <button className="btn lg:btn-md btn-sm btn-secondary text-white px-[5px] lg:px-[10px]" onClick={handleToggleTheme}>
              {theme === 'light' ? <MoonIco /> : <SunIco />}
            </button>
          </div> */}

          {/* Language button */}
          {/* <div className={`md:tooltip md:tooltip-sm mx-1 ${isTooltipOpen ? `md:tooltip-open` : ''} md:tooltip-bottom`} data-tip={settings.themeButtonTooltipTextEn}>
            <button className="btn lg:btn-md btn-sm btn-secondary text-white px-[5px] lg:px-[10px]" onClick={() => handleSelectLanguage()}>
              {selectedLanguage === 'de' && <FlagDe />}
              {selectedLanguage === 'en' && <FlagEn />}
              {selectedLanguage === 'hu' && <FlagHu />}
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Nav;