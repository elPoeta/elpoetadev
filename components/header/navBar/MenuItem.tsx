import React from "react";

const items = [
  { id: "menu-item-home", title: "Home" },
  { id: "menu-item-project", title: "Projects" },
  { id: "menu-item-about", title: "About" },
  { id: "menu-item-contact", title: "Contact" },
];

export const MenuItem = ({ classNames }: { classNames: string }) => {
  return (
    <>
      {items.map((item) => (
        <li key={item.id} className={classNames}>
          {item.title}
        </li>
      ))}
    </>
  );
};
