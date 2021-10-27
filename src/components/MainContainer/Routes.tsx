import React, { ReactElement } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  Redirect,
} from "react-router-dom";
import City from "./HomePage/City";
import Today from "./HomePage/Today";
import Weekly from "./HomePage/Weekly";
import Welcome from "./HomePage/Welcome";
import { Daily, Hourly } from "./Weather/WeatherApiCall";
import { CurrentApiCall } from "./Weather/WeatherTypeCurrent";

interface Props{
  currentWeather?:CurrentApiCall ;
  todayWeather?: Hourly[]  ;
  weeklyWeather?: Daily[];
  air?: number;
}

export default function Routes(props:Props):ReactElement {
  return (
    <Switch>
      <Route path="/Welcome">
        <Welcome currentWeather={props.currentWeather} air={props.air}/>
      </Route>
      <Route path="/City/Today">
        <Today currentWeather={props.currentWeather} todayWeather={props.todayWeather} air={props.air}/>
      </Route>
      <Route path="/City/Weekly">
        <Weekly currentWeather={props.currentWeather} weeklyWeather={props.weeklyWeather} air={props.air}/>
      </Route>
      <Route path="/City">
        <City />
      </Route>
      <Route exact path="/">
        <Redirect to="/Welcome" />
      </Route>
    </Switch>
  );
}
