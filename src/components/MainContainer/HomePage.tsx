import React, { ReactElement, useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import search from "../../Styles/Images/search.png";
import { useAppContext } from "./AppContext";
import {Coord} from "../MainContainer/Weather/WeatherTypeCurrent";
import {CurrentApiCall} from "../MainContainer/Weather/WeatherTypeCurrent";
import Weather from "./Weather/Weather";
import axios, { AxiosResponse } from "axios";
import AirApiCall from "./Weather/WeatherAirType";
import { Daily, Hourly } from "./Weather/WeatherApiCall";
import Today from "./HomePage/Today";


interface Props {
  children: (CurrentWeather?:CurrentApiCall, TodayWeather?:Hourly[], WeeklyWeather?:Daily[], Air?:number) => ReactElement;
}



export default function HomePage(props: Props): ReactElement {
  const [OpacityDiv, setOpacityDiv] = useState("opacity-0");
  const [OpacityWelcome, setOpacityWelcome] = useState("opacity-0");
  const [OpacityToday, setOpacityToday] = useState("opacity-0");
  const [OpacityWeekly, setOpacityWeekly] = useState("opacity-0");
  const [OpacitySearch, setOpacitySearch] = useState("opacity-0");
  const [SearchInput, setSearchInput] = useState("");
  const [Coord, setCoord] = useState<Coord>();
  const [CurrentWeather, setCurrentWeather] = useState<CurrentApiCall>();
  const [TodayWeather, setTodayWeather] = useState<Hourly[]>();
  const [WeeklyWeather, setWeeklyWeather] = useState<Daily[]>();
  const [Air, setAir] = useState<number>()

  const { CurrentTab, setCurrentTab } = useAppContext();
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => setOpacityDiv("bg-opacity-30"), 500);
    setTimeout(() => setOpacityWelcome("bg-opacity-20"), 900);
    setTimeout(() => setOpacityToday("bg-opacity-20"), 1100);
    setTimeout(() => setOpacityWeekly("bg-opacity-20"), 1300);
    setTimeout(() => setOpacitySearch("bg-opacity-20"), 1500);
  },[]);

  function WeatherApiCall(Input: string): void {
    const APIKey = ``;
    const APIKey2= ``
    const CurrentDayURL = `https://api.openweathermap.org/data/2.5/weather?q=${Input}&units=metric&appid=${APIKey}`;

    //#######-Get Current Day Weather--------
    axios.get(
      CurrentDayURL)
      .then((resp:any) => {
        setCurrentWeather(resp.data);
        setCoord(resp.data.coord);
        return resp.data.coord})
    //######
      .then((resp)=>  {
        return axios.get(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${resp.lat}&lon=${resp.lon}&appid=${APIKey}`);})
      .then((resp:any)=> {
        setAir(resp.data.list[0].main.aqi)
        return resp.data})
      .then((resp:any)=> {
        return axios.get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${resp.coord.lat}&lon=${resp.coord.lon}&exclude=current,minutely,alerts&units=metric&appid=${APIKey}`
        )
      })
      .then((resp:any )=> {
        setTodayWeather(resp.data.hourly);
        setWeeklyWeather(resp.data.daily)
      })



  }

  function onSubmit(): void {
    event?.preventDefault();
    WeatherApiCall(SearchInput)
    setSearchInput("");
  }
  function onChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchInput(e.target.value);
  }

  function Tab(Tab: string): void {
    setCurrentTab(Tab);
  }

  return (
    <div className="bg-mainBackground">
      <div
        className="flex flex-col
     h-screen
     bg-gray-900 bg-opacity-50

     "
      >
        <div className="flex w-full items-center justify-between">
          <div
            className={`flex w-1/4 p-1 m-6 space-x-1
      bg-gray-700
      transition-all duration-700 ${OpacityDiv}
      rounded-xl`}
          >
            <NavLink
              className={`bg-white ${OpacityWelcome}
          transition-all duration-1000
          py-2.5 w-2/4
          text-md text-center
          leading-5 font-medium text-white rounded-lg
          text-white hover:bg-white hover:text-gray-700`}
              activeClassName="bg-white bg-opacity-100 text-gray-700"
              to="/Welcome"
              onClick={() => Tab("Welcome")}
            >
              Welcome
            </NavLink>
            <NavLink
              className={`bg-white ${OpacityToday}
           transition-all duration-1000
           py-2.5 w-2/4
           text-md text-center
           leading-5 font-medium text-white rounded-lg
           text-white hover:bg-white hover:text-gray-700`}
              activeClassName="bg-white bg-opacity-100 text-gray-700"
              to="/City/Today"
              onClick={() => Tab("Today")}
            >
     City         Today
            </NavLink>
            <NavLink
              className={`bg-white ${OpacityWeekly}
           transition-all duration-1000
           py-2.5 w-2/4
           text-md text-center
           leading-5 font-medium text-white rounded-lg
           text-white hover:bg-white hover:text-gray-700
           `}
              activeClassName="bg-white bg-opacity-100 text-gray-700"
              to="/City/Weekly"
              onClick={() => Tab("Weekly")}
            >
              Weekly
            </NavLink>
          </div>
          <form
            className={`flex w-1/8 p-1 m-6 space-x-1 items-center
      bg-gray-700
      transition-all duration-500 ${OpacityDiv}
      rounded-xl`}
            onSubmit={onSubmit}
          >
            <input
              type="search"
              value={SearchInput}
              className={`rounded-lg bg-primary px-1 font-mono
            transition-all duration-1000 ${OpacitySearch}
            placeholder-white
            focus:outline-none
            h-10
            hover:bg-opacity-40
            text-white
            `}
              placeholder="Location..."
              style={{ textIndent: "1rem" }}
              onChange={(e) => onChangeInput(e)}
            />
            <input
              type="image"
              className={`w-4 h-4 transition all duration-500
          ${SearchInput ? "opacity-100" : "opacity-0"}
          `}
              src={search}
            />
          </form>
        </div>
        {CurrentWeather && TodayWeather && WeeklyWeather && Air? props.children(CurrentWeather, TodayWeather, WeeklyWeather , Air) : props.children()}

      </div>
    </div>
  );
}
