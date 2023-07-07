export interface Forecast {
  city:    City;
  list:    List[];
}

export interface City {
  name:       string;
}

export interface List {
  temp:       Temp;
  weather:    Weather[];
}

export interface Temp {
  min:   number;
  max:   number;
}

export interface Weather {
  main:        string;
}
