import React, { ReactElement, useContext, useEffect, useState } from "react";
import { useAppContext } from "../AppContext";
import javascript from "../../../Styles/Images/javascript.png";
import html from "../../../Styles/Images/html.png";
import css from "../../../Styles/Images/css.png";
import ts from "../../../Styles/Images/typescript.png";
import reactImage from "../../../Styles/Images/react.png";
import tailwind from "../../../Styles/Images/tailwindcss.png";

export default function MainPanel():ReactElement {
  const [OpacityH4, setOpacityH4] = useState("opacity-0");
  const [HTML, setHTML] = useState("opacity-0");
  const [CSS, setCSS] = useState("opacity-0");
  const [Tailwind, setTailwind] = useState("opacity-0");
  const [JS, setJS] = useState("opacity-0");
  const [ReactAp, setReactAp] = useState("opacity-0");
  const [TS, setTS] = useState("opacity-0");
  const [OpacitySide, setOpacitySide] = useState("bg-opacity-0");
  const { Reload, setReload, SideRendered, setSideRendered } = useAppContext();

  //## ComponendMount for Initial Intro Rendering of Left Main Panel
  useEffect(() => {
    if (Reload) {
      setTimeout(() => {
        setOpacityH4("opacity-100");
      }, 1500);
      setTimeout(() => {
        setHTML("opacity-100");
      }, 1600);
      setTimeout(() => {
        setCSS("opacity-100");
      }, 1700);
      setTimeout(() => {
        setTailwind("opacity-100");
      }, 1800);
      setTimeout(() => {
        setJS("opacity-100");
      }, 1900);
      setTimeout(() => {
        setReactAp("opacity-100");
      }, 2000);
      setTimeout(() => {
        setTS("opacity-100");
        setReload(false);
      }, 2100);
    } else {
      setOpacityH4("opacity-100");
      setHTML("opacity-100");
      setCSS("opacity-100");
      setTailwind("opacity-100");
      setJS("opacity-100");
      setReactAp("opacity-100");
      setTS("opacity-100");
    }
  }, [Reload, setReload]);

  return (
    <div
      className={`grid grid-cols-3 py-6 justify-items-center
      rounded-lg
       w-3/4 h-full`}
    >
      <h4
        className={`col-span-3
        text-8xl font-black text-transparent font-mono
        text-white
        transition-all duration-700
        ${OpacityH4}
        `}
      >
        Technology Stack
      </h4>
      <img
        className={`h-24 w-24
        transition-all duration-700
        ${HTML}
        `}
        src={html}
      />
      <img
        className={`h-24 w-24
        transition-all duration-700
        ${CSS}
        `}
        src={css}
      />
      <img
        className={`h-24 w-24 bg-white rounded-full
          transition-all duration-700
        ${Tailwind}
          `}
        src={tailwind}
      />
      <img
        className={`h-24 w-24
        transition-all duration-700
        ${JS}
        `}
        src={javascript}
      />
      <img
        className={`h-24 w-24
        transition-all duration-700
        ${ReactAp}
        `}
        src={reactImage}
      />
      <img
        className={`h-24 w-24
        transition-all duration-700
        ${TS}
        `}
        src={ts}
      />
    </div>
  );
}
