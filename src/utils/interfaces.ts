import { RouteObject } from "react-router";

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
  prices: Array<IPrice>;
}

export interface IUpvotingService {
  id: number;
  name: string;
  title: string;
  description: string;
  imageId: number;
  selectIds?: Array<number>;
  prices: Array<IPrice>;
}

export interface IImage {
  id: number;
  value: string;
}

export interface IPrice {
  trendingType?: string;
  chain?: string;
  amount?: number;
  period?: number;
  price: number;
}

export interface IServiceCardItem {
  key: number;
  dataItem: ITrendingService | IListService | IUpvotingService;
}

export interface IRoute extends RouteObject {
  id?: number;
  title?: string;
}

export interface IHandlers {
  [key: string]: Function,
}
