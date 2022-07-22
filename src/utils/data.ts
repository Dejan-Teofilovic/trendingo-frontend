import { IImage, IListService, IPrice, ITrendingService } from "./interfaces";

export const IMAGES: Array<IImage> = [
  {
    id: 1,
    value: "/assets/images/certik.webp"
  },
  {
    id: 2,
    value: "/assets/images/coinalpha.webp"
  },
  {
    id: 3,
    value: "/assets/images/coingecko.webp"
  },
  {
    id: 4,
    value: "/assets/images/coinhunt.webp"
  },
  {
    id: 5,
    value: "/assets/images/coinmarketcal.webp"
  },
  {
    id: 6,
    value: "/assets/images/coinmarketcap.webp"
  },
  {
    id: 7,
    value: "/assets/images/coinmooner.webp"
  },
  {
    id: 8,
    value: "/assets/images/coinscope.webp"
  },
  {
    id: 9,
    value: "/assets/images/coinsniper.webp"
  },
  {
    id: 10,
    value: "/assets/images/crypto.webp"
  },
  {
    id: 11,
    value: "/assets/images/dextools.webp"
  },
  {
    id: 12,
    value: "/assets/images/dxsale.webp"
  },
  {
    id: 13,
    value: "/assets/images/pinksale.webp"
  },
  {
    id: 14,
    value: "/assets/images/poocoin.webp"
  },
  {
    id: 15,
    value: "/assets/images/trustwallet.webp"
  },
  {
    id: 16,
    value: "/assets/images/watcher.webp"
  }
];

export const TRENDING_SERVICES: Array<ITrendingService> = [
  {
    id: 1,
    name: "certik",
    title: "Certik Trending",
    descriptions: [
      "CertiK is the leading security-focused ranking platform to analyze and monitor blockchain protocols and DeFi projects.",
      "Get your token or coin in Trending and Search on (Top #1-3) Certik.com.",
      "Please Provide your telegram Username Correctly, We will reach out to you for more information."
    ],
    imageId: 1,
    selectIds: [3]
  },
  {
    id: 2,
    name: "coingecko",
    title: "Coingecko Trending",
    descriptions: [
      "Get Coingecko Trending to promote your token on either Trending Search Or Trending Region."
    ],
    imageId: 3,
    selectIds: [1, 2]
  }
];

export const LISTING_SERVICES: Array<IListService> = [
  {
    id: 1,
    name: "coingecko",
    title: "Coingecko Listing",
    descriptions: [
      "Get your token or Coin listed on Coingecko.com",
      "Please Provide your telegram Username Correctly, We will reach out to you for more information."
    ],
    imageId: 3,
    timeFrame: "24-48 Hours",
    pricing: 3500
  },
  {
    id: 2,
    name: "coinmarketcap",
    title: "CoinMarketCap listing",
    descriptions: [
      "Get your token or Coin listed on Coinmarketcap.com",
      "Please Provide your telegram Username Correctly, We will reach out to you for more information."
    ],
    imageId: 6,
    timeFrame: "24-48 Hours",
    pricing: 4500
  },
  {
    id: 3,
    name: "trustwallet",
    title: "Trust Wallet logo",
    descriptions: [
      "Get your token or Coin logo displayed in Trustwallet.",
      "Please Provide your telegram Username Correctly, We will reach out to you for more information."
    ],
    benefits: [
      "Trending in multiple sites needs your trustwallet logo like PooCoin.",
      "It will also be updated on Bscscan.com"
    ],
    imageId: 15,
    pricing: 1500
  },
  {
    id: 4,
    name: "cmc-cg-tw",
    title: "CMC + CG + TW Listing",
    descriptions: [
      "Discount Package for Listing on Coinmarketcap.com, Coingecko.com and Trustwallet.",
      "Please Provide your telegram Username Correctly, We will reach out to you for more information."
    ],
    imageId: 3,
    pricing: 7500
  }
];

export const SELECTS = [
  {
    id: 1,
    label: "Trending types",
    options: [
      {
        label: "Trending Search",
        value: "search"
      },
      {
        label: "Trending Region",
        value: "region"
      }
    ]
  },
  {
    id: 2,
    label: "Period",
    options: [
      {
        label: "2 days",
        value: 2
      },
      {
        label: "4 days",
        value: 4
      },
      {
        label: "6 days",
        value: 6
      },
      {
        label: "8 days",
        value: 8
      },
      {
        label: "10 days",
        value: 10
      }
    ]
  },
  {
    id: 3,
    label: "Period",
    options: [
      {
        label: "1 day",
        value: 1
      },
      {
        label: "2 days",
        value: 2
      },
      {
        label: "3 days",
        value: 3
      },
      {
        label: "4 days",
        value: 4
      },
      {
        label: "5 days",
        value: 5
      }
    ]
  },
  {
    id: 4,
    label: "Regions",
    options: [
      {
        label: "United States",
        value: "us"
      },
      {
        label: "United Kingdom",
        value: "gb"
      },
      {
        label: "Brazil",
        value: "br"
      },
      {
        label: "India",
        value: "in"
      },
      {
        label: "Phillipines",
        value: "ph"
      },
      {
        label: "Turkey",
        value: "tr"
      },
      {
        label: "Indonesia",
        value: "id"
      }
    ]
  }
];

export const PRICES: Array<IPrice> = [
  {
    selectId: 3,
    optionValue: 1,
    value: 1100
  },
  {
    selectId: 3,
    optionValue: 2,
    value: 2050
  },
  {
    selectId: 3,
    optionValue: 3,
    value: 2970
  },
  {
    selectId: 3,
    optionValue: 4,
    value: 3700
  },
  {
    selectId: 3,
    optionValue: 5,
    value: 4400
  },
  {
    selectId: 2,
    trendingTypeValue: "search",
    optionValue: 2,
    value: 2100
  },
  {
    selectId: 2,
    trendingTypeValue: "search",
    optionValue: 4,
    value: 3900
  },
  {
    selectId: 2,
    trendingTypeValue: "search",
    optionValue: 6,
    value: 5600
  },
  {
    selectId: 2,
    trendingTypeValue: "search",
    optionValue: 8,
    value: 7100
  },
  {
    selectId: 2,
    trendingTypeValue: "search",
    optionValue: 10,
    value: 8400
  },
  {
    selectId: 2,
    trendingTypeValue: "region",
    optionValue: 2,
    value: 1900
  },
  {
    selectId: 2,
    trendingTypeValue: "region",
    optionValue: 4,
    value: 3600
  },
  {
    selectId: 2,
    trendingTypeValue: "region",
    optionValue: 6,
    value: 5100
  },
  {
    selectId: 2,
    trendingTypeValue: "region",
    optionValue: 8,
    value: 6400
  },
  {
    selectId: 2,
    trendingTypeValue: "region",
    optionValue: 10,
    value: 7600
  }
];
