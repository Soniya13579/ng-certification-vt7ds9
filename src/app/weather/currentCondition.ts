export interface CurrentCondition {
  zipcode: string
  weather: Weather[];
  main: Main;
  name: string;
}

export interface Main {
  temp: number;
  temp_min: number;
  temp_max: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}
