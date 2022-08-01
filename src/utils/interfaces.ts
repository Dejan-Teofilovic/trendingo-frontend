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

export interface IOrderItem {
  service_type: string;
  service_title: string;
  price: number;
  trending_type?: string;
  period?: string;
  region?: string;
  chain?: string;
  amount?: string;
  group_link?: string;
  contract_address?: string;
  token_link?: string;
  token_pair_link?: string;
  lunchpad_link?: string;
}

export interface IOrder {
  walletAddress: string;
  telegramUsername: string;
  alternativeTelegramUsername: string;
  orderItems: Array<IOrderItem>;
  originPrice: number;
  discountPercentage: number;
  realPrice: number;
}

export interface IChain {
  chainId: number;
  name: string;
  rpcUrls: Array<string>;
  blockExploreUrls: Array<string>;
  nativeCurrencyName: string;
  nativeCurrencySymbol: string;
  decimals: number;
}

export interface IError {
  code: number
}
