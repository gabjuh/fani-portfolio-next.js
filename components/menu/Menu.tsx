'use client'

import Nav from '@/components/Nav'
import menuItems from '@/components/menu/menuItems'
import { openSheetApiUrl, tableIds } from '@/helpers/connect';
import scrollToId from '@/helpers/scrollToId';
import { useEffect, useState } from 'react';


const Menu = () => {

  const [selected, setSelected] = useState(-1);

    // Select table of next or public 
  // const tableId = tableIds.public;
  const tableId = tableIds.next;

  const [data, setData] = useState<ISettings | null>(null);

  // console.log(tableId)

  useEffect(() => {
    fetch(`${openSheetApiUrl}${tableId.id}/${'settings'}`)
      .then((response) => response.json())
      .then((data) => setData(data[0]));
  }, []);

  useEffect(() => {
    // data !== null && console.log(data?.imgLeft);
  }, [data]);

  const menuItemsWithSelected = menuItems.map((item, index) => ({
    ...item,
    selected: index === selected
  }));

  const handleClick = (index: number) => {
    scrollToId(menuItemsWithSelected[index].link.slice(2));
    setSelected(index);
  }

  return (
    <>
      Menu
      <Nav
        menuItems={menuItemsWithSelected}
        selected={selected}
        handleClick={handleClick}
        homepageTitle={data?.homepageTitle}
        email={data?.email}
        emailTooltipText={data?.emailTooltipText}
        darkTheme={data?.darkTheme}
        lightTheme={data?.lightTheme}
      />
    </>
  )
}

export default Menu