export interface IServiceType {
  id: number;
  value: string;
}

export interface IService {
  id: number;
  name: string;
  dataServiceTypeId: number;
  title: string;
  descriptions: Array<string>;
  imageId: number;
  timeFrame?: string;
  pricing?: number;
  benefits?: Array<string>;
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
