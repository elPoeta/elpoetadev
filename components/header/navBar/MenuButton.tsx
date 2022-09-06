import React, { useState } from "react";
import { Bars3BottomLeftIcon, XMarkIcon } from "@heroicons/react/20/solid";
import ThemeButton from "./ThemeButton";

export const MenuButton = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="lg:hidden">
      {!toggleMenu && (
        <Bars3BottomLeftIcon
          className="w-6 h-6 fill-[#0ea5e9]"
          onClick={() => setToggleMenu(true)}
        />
      )}
      {toggleMenu && (
        <div className="flex relative">
          <ul className="z-10 fixed top-0 right-0 p-3 w-[70vw] menu-glassmorphism dark:bg-[#27335966]   h-screen shadow-2xl animate-slide-in">
            <li>
              <XMarkIcon
                className="w-8 h-8 fill-[#0ea5e9]"
                onClick={() => setToggleMenu(false)}
              />
            </li>
            <li>
              <ThemeButton classNames='w-8 h-8 fill-white dark:fill-[#0ea5e9]' />
            </li>
          </ul>
       </div>
      )}
    </div>
  );
};
