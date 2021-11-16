import { GeoJsonObject } from 'geojson';
import { CSSProperties } from 'react';

interface GeoJsonObjectEx extends GeoJsonObject {
  type: string;
  properties: { ADMIN: string; ISO_A3: string };
  geometry: { type: string; coordinates: number[][][][] };
}

interface ICoords {
  latitude: number;
  longitude: number;
}

interface IMapCoords {
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
  viewName: string;
  about: string;
}

export interface IDetails {
  info: string;
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
