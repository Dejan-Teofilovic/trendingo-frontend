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
  price: number;
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

export interface IOrder {
  serviceTitle: string;
  trendingType?: string;
  period?: string;
  region?: string;
  chain?: string;
  amount?: string;
  price: number;
}

export interface IOrderRequest extends IOrder {
  walletAddress: string;
  telegramUsername: string;
}
