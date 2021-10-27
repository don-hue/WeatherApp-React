import React, { ReactElement, useState } from "react";
import axios from 'axios'






function useWeather(SearchInput:string):[string,React.Dispatch<React.SetStateAction<string>> ]  {
  const [City, setCity] = useState("");
  // const [Cood, setCood] = useState<Coord>()
  // const [CurrentWeather, setCurrentWeather] = useState<CurrentApiCall>()
  // const [TodayWeather, setTodayWeather] = useState<HourlyApiCall>()
  // const [WeeklyWeather, setWeeklyWeather] = useState<WeeklyApiCall>()

  // setCity(SearchInput)

  console.log(SearchInput)

  return [City, setCity]
}

export default useWeather
