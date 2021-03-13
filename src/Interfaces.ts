export interface IViews {
  imgURL: string;
  viewName: string;
  about: string;
}

export interface IDetails {
  info: string;
  views: IViews[];
  videoURL: string;
  mapCoords: any;
}

export interface ICountries {
  name: string;
  capital: string;
  details: IDetails;
  rating: any;
  photo: string;
}

export interface ISearchInput {
  text:string,
  disabled:boolean
}

export interface IInitialStateType {
  countries: ICountries[];
  lang: string;
  searchInput: ISearchInput;
}
