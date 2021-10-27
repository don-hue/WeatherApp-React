import React, { ReactElement, useContext, useState } from "react";


interface AppContext {
  Reload: boolean;
  setReload: React.Dispatch<React.SetStateAction<boolean>>;
  SideRendered: boolean;
  setSideRendered: React.Dispatch<React.SetStateAction<boolean>>;
  CurrentTab: string;
  setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
  // Coord: Coord | undefined;
  // setCoord:React.Dispatch<React.SetStateAction<Coord | undefined>>;
  // CurrentWeather: CurrentApiCall | undefined;
  // setCurrentWeather: React.Dispatch<React.SetStateAction<CurrentApiCall | undefined>>;
  // TodayWeather: HourlyApiCall | undefined;
  // setTodayWeather: React.Dispatch<React.SetStateAction<Coord | undefined>>;
  // WeeklyWeather: WeeklyApiCall | undefined;
  // setWeeklyWeather: React.Dispatch<React.SetStateAction<WeeklyApiCall | undefined>>;

}

interface Props {
  children: ReactElement;
}

const AppContext = React.createContext({} as AppContext);
export const useAppContext = (): AppContext => useContext(AppContext);

export default function AppContextProvider(props: Props):ReactElement {
  const [Reload, setReload] = useState(true);
  const [SideRendered, setSideRendered] = useState(false);
  const [CurrentTab, setCurrentTab] = useState("Welcome");

  return (
    <AppContext.Provider
      value={{
        Reload,
        setReload,
        SideRendered,
        setSideRendered,
        CurrentTab,
        setCurrentTab,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
