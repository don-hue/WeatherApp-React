export default interface AirApiCall {
    coord: number[];
    list: List[];
  }

  interface List {
    dt: number;
    main: Main;
    components: Components;
  }

  interface Components {
    co: number;
    no: number;
    no2: number;
    o3: number;
    so2: number;
    pm2_5: number;
    pm10: number;
    nh3: number;
  }

  interface Main {
    aqi: number;
  }



