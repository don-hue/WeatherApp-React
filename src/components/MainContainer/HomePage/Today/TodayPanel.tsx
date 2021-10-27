import React, { ReactElement, useEffect, useState } from 'react'
import weather from "../../../../Styles/Images/weather.png";



interface Props{
    duration?: number
    time?: string
    description?:string
    temp?: string
    icon?:string

}

export default function TodayPanel(props:Props):ReactElement {
  const [OpacityAnim, setOpacityAnim] = useState("opacity-0")
  useEffect(() => {
    setTimeout(()=> {
      setOpacityAnim("opacity-100");
    }, props.duration)

  }, [props.duration])
  return (
    <div className={`flex flex-col items-center h-auto
        ${OpacityAnim} transition-all duration-700
        m-2
        `}>
      <div className="py-2 font-mono text-3xl text-primary">{props.time || "Time"}</div>
      <img className={props.icon ? "w-30 h-30" : "w-20 h-20"} src={props.icon || weather}/>
      <div className="py-2 font-mono text-xl text-center text-white">{props.description || "Description"}</div>
      <div className="font-mono text-white">{props.temp || "Temperature in °C"}</div>
    </div>
  )
}
