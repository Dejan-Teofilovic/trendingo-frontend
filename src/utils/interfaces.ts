export interface IServiceType {
  id: number;
  value: string;
}

export interface IListService {
  id: number;
  name: string;
  title: string;
  description: string;
  imageId: number;
}

export interface ITrendingService {
  id: number;
  name: string;
  title: string;
  description: string;
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

export interface IServiceCardItem {
  key: number;
  dataItem: ITrendingService;
}
