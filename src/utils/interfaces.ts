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
  serviceType: string;
  serviceTitle: string;
  trendingType?: string;
  period?: string;
  region?: string;
  chain?: string;
  amount?: string;
  price: number;
  telegramGroupLink?: string;
  contractAddress?: string;
  tokenLink?: string;
  tokenPairLink?: string;
  lunchpadLink?: string;
}

export interface IOrderRequest extends IOrder {
  walletAddress: string;
  telegramUsername: string;
  alternativeTelegramUsername: string;
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
