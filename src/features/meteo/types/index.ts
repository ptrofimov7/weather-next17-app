import { Entity } from "@/types";

export type CityTableData = Entity & {
  name: string;
  temperature_min: string;
  temperature_max: string;
  windDirection_dominant: string;
};

export type City = Entity & {
  id: number;
  name: string;
  country?: string;
  country_code: string;
  country_id?: number;
  latitude: number;
  longitude: number;
};

export type CityFilters = {
  temperature_min: number;
  temperature_max: number;
  country_code?: string | number | (string | number)[];
};

export type WeatherFilter = {
  ids: Array<number> | null | undefined;
  temperature_min: number | undefined;
  temperature_max: number | undefined;
};

export type CountryFilter = { label: string; value: string | undefined };
