import React, { ReactElement, useEffect, useState } from "react";
import { Daily } from "../Weather/WeatherApiCall";
import { CurrentApiCall } from "../Weather/WeatherTypeCurrent";
import Side from "./Side";
import WeeklyPanel from "./WeeklyPanel";

interface Props {
  currentWeather?: CurrentApiCall;
  weeklyWeather?: Daily[];
  air?:number

}

export default function Weekly(props:Props):ReactElement {
  const [Opacity, setOpacity] = useState("opacity-0")
  const [DurationOpacity, setDurationOpacity] = useState([100, 200, 300, 400, 700, 600, 500])
  const [AirQuality, setAirQuality] = useState<string>()
  const [WeatherDescription, setWeatherDescription] = useState<string>()
  const [TempDescription, setTempDescription] = useState<string>()
  const [HumidDescription, setHumidDescription] = useState<string>()
  const [WeeklyDays, setWeeklyDays] = useState<string[]>([])
  const [WeeklyDescription, setWeeklyDescription] = useState<string[]>([])
  const [WeeklyTemp, setWeeklyTemp] = useState<string[]>([])

  const AirDescription = ["Good", "Fair", "Moderate", "Poor", "Very Poor"]
  const Days= ["Sunday", "Monday","Thuesday", "Wednesday","Thursday", "Friday","Saturday" ]


  useEffect(() => {
    setOpacity("bg-opacity-30")
    const weatherdescription = props.currentWeather?.weather[0].description.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
    setWeatherDescription(weatherdescription)

    if(props.currentWeather){
      const temp= `${props.currentWeather.main.temp} °C`
      const humid = `${props.currentWeather.main.humidity} %`
      setTempDescription(temp)
      setHumidDescription(humid)
    }


    if (props.air == 1){
      setAirQuality("1 - " + AirDescription[0])
    }
    if (props.air == 2){
      setAirQuality("2 - " + AirDescription[1])
    }
    if (props.air == 3){
      setAirQuality("3 - " + AirDescription[2])
    }
    if (props.air == 4){
      setAirQuality("4 - " + AirDescription[3])
    }
    if (props.air == 5){
      setAirQuality("5 - " + AirDescription[4])
    }


  },[])

  return (
    <div className="flex w-11/12 h-3/4 mx-auto mt-1">
      <div className="
      grid grid-cols-4
      w-3/4 h-full">
        {DurationOpacity.map((time, index)=>{
          return props.weeklyWeather?
            <WeeklyPanel key={index} duration={time}
              day={Days[new Date(props.weeklyWeather[index].dt*1000).getDay()]}
              description={props.weeklyWeather[index].weather[0].description.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))}
              temp={`${props.weeklyWeather[index].temp.day} °C`}
              icon={`http://openweathermap.org/img/wn/`+ props.weeklyWeather[index].weather[0].icon + `@2x.png`}
            /> : <WeeklyPanel key={index} duration={time} />
        })}
      </div>
      {props.currentWeather ?
        <Side
          cityName={props.currentWeather?.name || "City"}
          weatherDescription={WeatherDescription || "Weather"}
          weatherTemp={TempDescription || "Temperature in °C"}
          weatherHumid={HumidDescription || "Percentage"}
          weatherAir={ AirQuality || "Rating"}
          icon={`http://openweathermap.org/img/wn/`+ props.currentWeather.weather[0].icon + `@2x.png`}
        />:
        <Side
          cityName={"City"}
          weatherDescription={"Weather"}
          weatherTemp={"Temperature in °C"}
          weatherHumid={"Percentage"}
          weatherAir={"Rating"}
        />
      }
    </div>
  );
}
