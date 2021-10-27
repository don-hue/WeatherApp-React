import React, { ReactElement, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  Redirect,
} from "react-router-dom";
import AppContextProvider from "./MainContainer/AppContext";
import HomePage from "./MainContainer/HomePage";
import Routes from "./MainContainer/Routes";
import { Daily, Hourly } from "./MainContainer/Weather/WeatherApiCall";
import { CurrentApiCall } from "./MainContainer/Weather/WeatherTypeCurrent";

export default function App(): ReactElement {
  return (
    <AppContextProvider>
      <Router>
        <HomePage>
          {(CurrentWeather, TodayWeather, WeeklyWeather, Air )=> <Routes currentWeather={CurrentWeather} todayWeather={TodayWeather} weeklyWeather={WeeklyWeather} air={Air}/>}
        </HomePage>
      </Router>
    </AppContextProvider>
  );
}
