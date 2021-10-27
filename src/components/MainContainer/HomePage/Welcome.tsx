import React, { ReactElement, useEffect, useState } from "react";
import Side from "./Side";
import MainPanel from "./MainPanel";
import { CurrentApiCall } from "../Weather/WeatherTypeCurrent";
import { escapeLeadingUnderscores } from "typescript";

interface Props {
  currentWeather?: CurrentApiCall;
  air?: number
}

export default function Welcome(props:Props):ReactElement {
  const [AirQuality, setAirQuality] = useState<string>()
  const AirDescription = ["Good", "Fair", "Moderate", "Poor", "Very Poor"]
  const [WeatherDescription, setWeatherDescription] = useState<string>()
  const [TempDescription, setTempDescription] = useState<string>()
  const [HumidDescription, setHumidDescription] = useState<string>()



  useEffect(() => {
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

  }, [props.air])


  return (
    <div className="flex w-11/12 h-3/4 mx-auto mt-1">
      <MainPanel />
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
