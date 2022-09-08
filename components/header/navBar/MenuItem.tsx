import Link from "next/link";
import React, { useState, MouseEvent } from "react";

const items = [
  { id: "menu-item-home", title: "Home", path: '/' },
  { id: "menu-item-project", title: "Projects", path: '/projects' },
  { id: "menu-item-blog", title: "Blog", path: '/blog' },
  { id: "menu-item-about", title: "About", path: '/about' },
];

type MenuItemType = { classNames: string, handleToggleLinkClicked?: ()=> void };

export const MenuItem = ({ classNames, handleToggleLinkClicked }:MenuItemType ) => {
  return (
    <>
      {items.map((item) => (
        <li key={item.id} className={classNames} onClick={() => handleToggleLinkClicked ? handleToggleLinkClicked() : false }>
          <Link href={item.path}>
          <a>
            {item.title}
          </a>
          </Link>
        </li>
      ))}
    </>
  );
};
