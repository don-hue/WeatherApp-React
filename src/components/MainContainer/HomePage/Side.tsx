import React, { ReactElement, useContext, useEffect, useState } from "react";
import city from "../../../Styles/Images/city.png";
import CO2 from "../../../Styles/Images/co2.png";
import humidity from "../../../Styles/Images/humidity.png";
import weather from "../../../Styles/Images/weather.png";
import { useAppContext } from "../AppContext";

interface Props {
  cityName ?:string
  weatherDescription?: string
  weatherTemp?:number | string
  weatherHumid?: string | number
  weatherAir?: string | number
  icon?: string
}

export default function Side(props:Props):ReactElement {
  const [CityDiv, setCityDiv] = useState("opacity-0")
  const [CityImage, setCityImage] = useState("opacity-0")
  const [WeatherDiv, setWeatherDiv] = useState("opacity-0")
  const [WeatherImg, setWeatherImg] = useState("opacity-0")
  const [HumidityDiv, setHumidityDiv] = useState("opacity-0")
  const [HumidityImg, setHumidityImg] = useState("opacity-0")
  const [AirDiv, setAirDiv] = useState("opacity-0")
  const [AirImg, setAirImg] = useState("opacity-0")
  const { SideRendered, setSideRendered } = useAppContext();

  useEffect(() => {
    if (!SideRendered) {
      setTimeout(() => {
        setCityDiv("opacity-100");
      }, 1500);
      setTimeout(() => {
        setCityImage("opacity-100");
      }, 1600);
      setTimeout(() => {
        setWeatherImg("opacity-100");
      }, 1700);
      setTimeout(() => {
        setWeatherDiv("opacity-100");
      }, 1800);
      setTimeout(() => {
        setHumidityDiv("opacity-100");
      }, 1900);
      setTimeout(() => {
        setHumidityImg("opacity-100");
      }, 2000);
      setTimeout(() => {
        setAirImg("opacity-100");
      }, 2100);
      setTimeout(() => {
        setAirDiv("opacity-100");
        setSideRendered(true)
      }, 2200);
    }
    else {
      setWeatherDiv("opacity-100");
      //   setWeatherImg("opacity-100");
      //   setCityImage("opacity-100");
      setCityDiv("opacity-100");
      setHumidityDiv("opacity-100");
      //   setHumidityImg("opacity-100");
      setAirDiv("opacity-100");
      //   setAirImg("opacity-100");
    }
  }, [SideRendered, setSideRendered]);



  return (

    <div
      className="grid grid-cols-2
        justify-items-center
        items-center
      w-1/4 "
    >
      <div
        className={`
        flex flex-col justify-center
        w-40 h-24
        ${CityDiv}
        transition-all duration-700
        text-left`}
      >
        <div className={`text-3xl text-white`}>{props.cityName}</div>
      </div>
      <img className={`h-20 w-20
        ${SideRendered ? "opacity-100" : ` ${CityImage} transition-all duration-700 `}`} src={city} />

      <div className={`
        flex flex-col justify-center
        w-40 h-24
        ${WeatherDiv}
        transition-all duration-700
        text-left`}>
        <div className="text-3xl text-white">{props.weatherDescription}</div>
        <div className="text-white">{props.weatherTemp}</div>
      </div>
      <img src={props.icon || weather} className={`${props.icon ? "h-30 w-30"  : "h-20 w-20"}
      ${SideRendered ? "opacity-100": `${WeatherImg} transition-all duration-700` }`}  />

      <div className={`
        flex flex-col justify-center
        w-40 h-24
        ${HumidityDiv} transition-all duration-700
        text-left`}>
        <div className="text-3xl text-white">Humidity</div>
        <div className="text-white">{props.weatherHumid}</div>
      </div>
      <img className={`h-20 w-20  ${SideRendered ? "opacity-100" : ` ${HumidityImg} transition-all duration-700`}`} src={humidity} />

      <div className={`
        flex flex-col justify-center
        w-40 h-24
        ${AirDiv} transition-all duration-700
        text-left`}>
        <div className="text-3xl text-white">Air Quality</div>
        <div className="text-white">{props.weatherAir}</div>
      </div>
      <img className={` h-20 w-20  ${SideRendered ? "opacity-100" : `${AirImg} transition-all duration-700`}`} src={CO2} />


    </div>
  )
}
