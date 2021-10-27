import React, { ReactElement, useEffect, useState } from "react";
import { Hourly } from "../Weather/WeatherApiCall";
import { CurrentApiCall } from "../Weather/WeatherTypeCurrent";
import Side from "./Side";

import TodayPanel from "./Today/TodayPanel";

interface Props{
  currentWeather?: CurrentApiCall;
  todayWeather?: Hourly[];
  air?: number
}

export default function Today(props:Props):ReactElement {
  const [DurationOpacity, setDurationOpacity] = useState([100, 200, 300, 400, 500, 600, 1200, 1100,1000,900,800,700])
  const [AirQuality, setAirQuality] = useState<string>()
  const AirDescription = ["Good", "Fair", "Moderate", "Poor", "Very Poor"]
  const [WeatherDescription, setWeatherDescription] = useState<string>()
  const [TempDescription, setTempDescription] = useState<string>()
  const [HumidDescription, setHumidDescription] = useState<string>()
  const [Time, setTime] = useState<string[]>([])
  const [TodayDescription, setTodayDescription] = useState<string[]>([])
  const [TodayTemp, setTodayTemp] = useState<string[]>([])


  useEffect(() => {
    const weatherdescription = props.currentWeather?.weather[0].description.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
    setWeatherDescription(weatherdescription)

    if(props.currentWeather){
      const temp= `${props.currentWeather.main.temp} °C`
      const humid = `${props.currentWeather.main.humidity} %`
      setTempDescription(temp)
      setHumidDescription(humid)
    }
    if(props.todayWeather){
      for(let i=0; i<12; i++){
        const time =  `${new Date(props.todayWeather[i].dt*1000).getHours()}:${new Date(props.todayWeather[i].dt*1000).getMinutes()}0`
        setTime((Time) => [...Time, time])
      }
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

  }, [props.air])


  return (
    <div className="flex w-11/12 h-3/4 mx-auto mt-1">
      <div
        className={`grid grid-cols-6
       w-3/4 h-full
       `}
      >
        {DurationOpacity.map((duration, index)=>{
          return props.todayWeather?
            <TodayPanel key={index} duration={duration} time={Time[index]}
              description={props.todayWeather[index].weather[0].description.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))}
              temp={`${props.todayWeather[index].temp} °C`}
              icon={`http://openweathermap.org/img/wn/`+ props.todayWeather[index].weather[0].icon + `@2x.png`}/> :
            <TodayPanel key={index} duration={duration}/>

        })
        }

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
