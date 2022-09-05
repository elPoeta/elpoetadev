import React from "react";
import {Header} from "../header/Header";
import { CustomHead } from "./CustomHead";


export const Layout = (props: { children: any }) => {
  return (
    <>
      <CustomHead  title="elPoetaDev" />
      <Header />
      {props.children}
    </>
  );
};
