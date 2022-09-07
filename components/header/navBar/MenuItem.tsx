import Link from "next/link";
import React from "react";

const items = [
  { id: "menu-item-home", title: "Home", path: '/' },
  { id: "menu-item-project", title: "Projects", path: '/projects' },
  { id: "menu-item-about", title: "About", path: '/about' },
  { id: "menu-item-contact", title: "Contact", path: '/contact' },
];

type MenuItemType = { classNames: string, handleToggleLinkClicked: ()=> void };

export const MenuItem = ({ classNames, handleToggleLinkClicked }:MenuItemType ) => {
  return (
    <>
      {items.map((item) => (
        <li key={item.id} className={classNames} onClick={() => handleToggleLinkClicked()}>
          <Link href={item.path}><a>
            {item.title}
          </a>
          </Link>
        </li>
      ))}
    </>
  );
};
