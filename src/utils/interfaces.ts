export interface IServiceType {
  id: number;
  value: string;
}

export interface IListService {
  id: number;
  name: string;
  title: string;
  descriptions: Array<string>;
  benefits?: Array<string>;
  imageId: number;
  timeFrame?: string;
  pricing: number;
}

export interface ITrendingService {
  id: number;
  name: string;
  title: string;
  descriptions: Array<string>;
  imageId: number;
  selectIds?: Array<number>;
}

export interface IImage {
  id: number;
  value: string;
}

export interface IPrice {
  selectId: number;
  optionValue: number;
  trendingTypeValue?: string;
  value: number;
}
