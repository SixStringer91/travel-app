import { GeoJsonObject } from 'geojson';
import { CSSProperties } from 'react';

export interface IDateProps {
	lang: string;
	fontSize: string
}

interface GeoJsonObjectEx extends GeoJsonObject {
  type: string;
  properties: { ADMIN: string; ISO_A3: string };
  geometry: { type: string; coordinates: number[][][][] };
}

interface ICoords {
  latitude: number;
  longitude: number;
}

export interface IMapCoords {
  capital: ICoords;
  center: ICoords;
}

export type StateResponce = { count: number; countries: ICountry[] };

export type MapDataProp = {
  [key: string]: GeoJsonObjectEx;
};

export type LangType = 'ru' | 'en' | 'be';

export interface IViews {
  imgURL: string;
  viewName: {[key:string]:string};
  about: {[key:string]:string};
}

export interface IDetails {
  info: {[key: string]: string};
  views: IViews[];
  videoURL: string;
  mapCoords: IMapCoords;
}

export interface ICapitalProp {
  ru: string;
  en: string;
  be: string;
}

export interface ICountry {
  nameEN: string;
  nameBE: string;
  nameRU: string;
  capital: ICapitalProp;
  currencyCode: string;
  details: IDetails;
  rating: number;
  photo: string;
}

export interface IMapProps {
  countryName: string;
  countryCapital: string;
  mapCoords: IMapCoords;
  zoom: number;
  styles: CSSProperties;
}

export interface ICurrenciesProps {
  currency: string;
}

export interface IWeatherAttributes{
	id: string;
	description: string;
}

export interface IWeatherMain {
	temp:number
}

export interface IWeatherStore extends IWeatherAttributes, IWeatherMain {}

export type WeatherApiResponse = {
		base: string;
    weather:IWeatherAttributes[];
    main: IWeatherMain;
    cod: number;
    coord: {lon: number, lat: number}
    dt: number;
    id: number;
    name: string;
    sys: {
      country: string;
      id: number;
      sunrise: number;
      sunset:number;
      type:number;
    }
		timezone: number;
		visibility: number;
		wind: {
			speed: number;
			deg: number;
		}
}
