import {
  IChain,
  IImage,
  IListService,
  ITrendingService,
  IUpvotingService
} from "./interfaces";

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

export const SELECTS = [
  {
    id: 1,
    label: "Trending types",
    options: [
      {
        label: "Trending Search",
        value: "trending_search"
      },
      {
        label: "Trending Region",
        value: "trending_region"
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
  },
  {
    id: 5,
    label: "Trending Types",
    options: [
      {
        label: "Trending search",
        value: "trending_search"
      },
      {
        label: "Most visited",
        value: "most_visited"
      }
    ]
  },
  {
    id: 6,
    label: "Chain",
    options: [
      {
        label: "ETH",
        value: "eth"
      },
      {
        label: "BSC",
        value: "bsc"
      },
      {
        label: "Polygon",
        value: "polygon"
      }
    ]
  },
  {
    id: 7,
    label: "Trending Types",
    options: [
      {
        label: "Most linked",
        value: "most_linked"
      },
      {
        label: "Most visited",
        value: "most_visited"
      }
    ]
  },
  {
    id: 8,
    label: "Amount",
    options: [
      {
        label: "1,000 watchlist",
        value: 1000
      },
      {
        label: "5,000 watchlist",
        value: 5000
      },
      {
        label: "10,000 watchlist",
        value: 10000
      },
      {
        label: "50,000 watchlist",
        value: 50000
      }
    ]
  }
];

export const REQUIRED_FIELDS = [
  {
    id: 3,
    name: "telegramGroup",
    placeholder: "",
    label: "Telegram group",
    message: "Please input your telegram group link"
  },
  {
    id: 4,
    name: "contractAddress",
    placeholder: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
    label: "Contract address",
    message: "Please input the contract address."
  },
  {
    id: 5,
    name: "certikTokenLink",
    placeholder: "https://www.certik.com/projects/binance",
    label: "Token link of Certik",
    message: "Please input the token link of certik.com."
  },
  {
    id: 6,
    name: "coingeckoTokenLink",
    placeholder: "https://www.coingecko.com/en/coins/bitcoin",
    label: "Token link of Coingecko",
    message: "Please input the token link of coingecko.com."
  },
  {
    id: 7,
    name: "coinmarketcapTokenLink",
    placeholder: "https://coinmarketcap.com/currencies/bitcoin/",
    label: "Token link of Coinmarketcap",
    message: "Please input the token link of coinmarketcap.com."
  },
  {
    id: 8,
    name: "cryptoTokenLink",
    placeholder: "https://crypto.com/price/bnb",
    label: "Token link of crypto",
    message: "Please input the token link of crypto.com."
  },
  {
    id: 9,
    name: "dextoolsTokenPair",
    placeholder:
      "https://www.dextools.io/app/ether/pair-explorer/0x11cb9e028b82eee75443fdc27929b9c49736c552",
    label: "Token pair of Dextools",
    message: "Please input the token link of dextools.com."
  }
];

export const TRENDING_SERVICES: Array<ITrendingService> = [
  {
    id: 1,
    name: "certik",
    title: "Certik Trending",
    description: `
      CertiK is the leading security-focused ranking platform to analyze and monitor blockchain protocols and DeFi projects.<br />
      Get your token or coin in Trending and Search on (Top #1-3) <a href="https://certik.com" target="_blank">Certik.com</a>.<br />
      Please Provide your telegram Username Correctly, We will reach out to you for more information. 
    `,
    imageId: 1,
    selectIds: [3],
    prices: [
      {
        period: 1,
        price: 1100
      },
      {
        period: 2,
        price: 2050
      },
      {
        period: 3,
        price: 2970
      },
      {
        period: 4,
        price: 3700
      },
      {
        period: 5,
        price: 4400
      }
    ]
  },
  {
    id: 2,
    name: "coingecko",
    title: "Coingecko Trending",
    description: `
      Get Coingecko Trending to promote your token on either <a target="_blank" href="https://www.coingecko.com/en/watchlists">Trending Search</a> Or <a target="_blank" href="https://www.coingecko.com/en/watchlists/trending-crypto/united-states">Trending Region</a>.
    `,
    imageId: 3,
    selectIds: [1, 2],
    prices: [
      {
        trendingType: "trending_search",
        period: 2,
        price: 2100
      },
      {
        trendingType: "trending_search",
        period: 4,
        price: 3900
      },
      {
        trendingType: "trending_search",
        period: 6,
        price: 5600
      },
      {
        trendingType: "trending_search",
        period: 8,
        price: 7100
      },
      {
        trendingType: "trending_search",
        period: 10,
        price: 8400
      },
      {
        trendingType: "trending_region",
        period: 2,
        price: 1900
      },
      {
        trendingType: "trending_region",
        period: 4,
        price: 3600
      },
      {
        trendingType: "trending_region",
        period: 6,
        price: 5100
      },
      {
        trendingType: "trending_region",
        period: 8,
        price: 6400
      },
      {
        trendingType: "trending_region",
        period: 10,
        price: 7600
      }
    ]
  },
  {
    id: 3,
    name: "coinmarketcap",
    title: "Coinmarketcap Trending",
    description: `
      Get your token/ Coin trending on Coinmarketcap on <a target="_blank" href="https://coinmarketcap.com/trending-cryptocurrencies/">Trending Search</a> or <a target="_blank" href="https://coinmarketcap.com/most-viewed-pages/">Most Visited</a>.
    `,
    imageId: 6,
    selectIds: [5, 3],
    prices: [
      {
        trendingType: "trending_search",
        period: 1,
        price: 3500
      },
      {
        trendingType: "trending_search",
        period: 2,
        price: 6400
      },
      {
        trendingType: "trending_search",
        period: 3,
        price: 9000
      },
      {
        trendingType: "trending_search",
        period: 4,
        price: 11000
      },
      {
        trendingType: "trending_search",
        period: 5,
        price: 12000
      },
      {
        trendingType: "most_visited",
        period: 1,
        price: 1500
      },
      {
        trendingType: "most_visited",
        period: 2,
        price: 2800
      },
      {
        trendingType: "most_visited",
        period: 3,
        price: 4000
      },
      {
        trendingType: "most_visited",
        period: 4,
        price: 5200
      },
      {
        trendingType: "most_visited",
        period: 5,
        price: 6200
      }
    ]
  },
  {
    id: 4,
    name: "crypto",
    title: "Crypto.com Trending",
    description: `
      <a target="_blank" href="https://crypto.com">Crypto.com</a> is on a mission to accelerate the world's transition to cryptocurrency and is one of the biggest centralized Exchange.<br />
      Promote your BSC or ERC20 token on <a target="_blank" href="https://crypto.com">crypto.com</a> <a target="_blank" href="https://crypto.com/price/showroom/trending">Trending</a> page.
    `,
    imageId: 10,
    selectIds: [3],
    prices: [
      {
        period: 1,
        price: 1000
      },
      {
        period: 2,
        price: 1850
      },
      {
        period: 3,
        price: 2600
      },
      {
        period: 4,
        price: 3450
      },
      {
        period: 5,
        price: 4100
      }
    ]
  },
  {
    id: 5,
    name: "dextools",
    title: "DexTools Trending",
    description: `
      DEXTools is a gateway to DEFI, showing real-time charts, history and all token info from the blockchain.<br />
      Get your token or coin ranked in hot pairs in dextool in BSC, ETH and polygon chain.
    `,
    imageId: 11,
    selectIds: [6, 3],
    prices: [
      {
        chain: "eth",
        period: 1,
        price: 4500
      },
      {
        chain: "eth",
        period: 2,
        price: 8500
      },
      {
        chain: "eth",
        period: 3,
        price: 12000
      },
      {
        chain: "eth",
        period: 4,
        price: 14500
      },
      {
        chain: "eth",
        period: 5,
        price: 17000
      },
      {
        chain: "bsc",
        period: 1,
        price: 3800
      },
      {
        chain: "bsc",
        period: 2,
        price: 6800
      },
      {
        chain: "bsc",
        period: 3,
        price: 8500
      },
      {
        chain: "bsc",
        period: 4,
        price: 10500
      },
      {
        chain: "bsc",
        period: 5,
        price: 13000
      },
      {
        chain: "polygon",
        period: 1,
        price: 3800
      },
      {
        chain: "polygon",
        period: 2,
        price: 6800
      },
      {
        chain: "polygon",
        period: 3,
        price: 8500
      },
      {
        chain: "polygon",
        period: 4,
        price: 10500
      },
      {
        chain: "polygon",
        period: 5,
        price: 13000
      }
    ]
  },
  {
    id: 6,
    name: "poocoin",
    title: "Poocoin Trending",
    description: `
      PooCoin live streaming charts DAPP for Binance Smart Chain (BSC) tokens and Polygon.<br />
      Get your token in most visited token in PooCoin.<br />
      <b>Requirement:</b><br />
      Your TrustWallet Logo must be updated.
    `,
    imageId: 14,
    selectIds: [7, 3],
    prices: [
      {
        trendingType: "most_linked",
        period: 1,
        price: 700
      },
      {
        trendingType: "most_linked",
        period: 2,
        price: 1300
      },
      {
        trendingType: "most_linked",
        period: 3,
        price: 1800
      },
      {
        trendingType: "most_linked",
        period: 4,
        price: 2300
      },
      {
        trendingType: "most_linked",
        period: 5,
        price: 2800
      },
      {
        trendingType: "most_visited",
        period: 1,
        price: 700
      },
      {
        trendingType: "most_visited",
        period: 2,
        price: 1300
      },
      {
        trendingType: "most_visited",
        period: 3,
        price: 1800
      },
      {
        trendingType: "most_visited",
        period: 4,
        price: 2300
      },
      {
        trendingType: "most_visited",
        period: 5,
        price: 2800
      }
    ]
  },
  {
    id: 7,
    name: "pinksale",
    title: "Pinksale trending",
    description: `
      Pinksale is one of the top decentralized launchpad.<br />
      Get <a target="_blank" href="https://pinksale.finance">Pinksale.finance</a> trending while you run your presale and start immediately to get noticed by new investors.<br />
      TOP #1-7
    `,
    imageId: 13,
    selectIds: [3],
    prices: [
      {
        period: 1,
        price: 700
      },
      {
        period: 2,
        price: 1300
      },
      {
        period: 3,
        price: 1800
      },
      {
        period: 4,
        price: 2300
      },
      {
        period: 5,
        price: 2800
      }
    ]
  }
];

export const LISTING_SERVICES: Array<IListService> = [
  {
    id: 1,
    name: "coingecko",
    title: "Coingecko Listing",
    description: `
      Get your token or Coin listed on <a target="_blank" href="https://coingecko.com">Coingecko.com</a>.<br />
      Time Frame: 24-48 Hours<br />
      Please Provide your telegram Username Correctly, We will reach out to you for more information.<br />
      Pricing: 3500$
    `,
    imageId: 3,
    // price: 3500
    price: 1
  },
  {
    id: 2,
    name: "coinmarketcap",
    title: "CoinMarketCap listing",
    description: `
      Get your token or Coin listed on <a target="_blank" href="https://coinmarketcap.com">Coinmarketcap.com</a>.<br />
      Time Frame: 24-48 Hours<br />
      Please Provide your telegram Username Correctly, We will reach out to you for more information.<br />
      Pricing: 4500$
    `,
    imageId: 6,
    price: 4500
  },
  {
    id: 3,
    name: "trustwallet",
    title: "Trust Wallet logo",
    description: `
      Get your token or Coin logo displayed in Trustwallet.<br />
      <b>Benefits</b>:<br />
      1. Trending in multiple sites needs your trustwallet logo like PooCoin.<br />
      2. It will also be updated on <a target="_blank" href="https://bscscan.com">Bscscan.com</a>.<br />
      Please Provide your telegram Username Correctly, We will reach out to you for more information.
    `,
    imageId: 15,
    price: 5500
  },
  {
    id: 4,
    name: "cmc-cg-tw",
    title: "CMC + CG + TW Listing",
    description: `
      Discount Package for Listing on <a target="_blank" href="https://coinmarketcap.com">Coinmarketcap.com</a>, <a target="_blank" href="https://coingecko.com">Coingecko.com</a> and Trustwallet.<br />
      Please Provide your telegram Username Correctly, We will reach out to you for more information.<br>
      Pricing: 7500$
    `,
    imageId: 3,
    price: 7500
  }
];

export const UPVOTING_SERVICES: Array<IUpvotingService> = [
  {
    id: 1,
    name: "coinmarketcap",
    title: "Coinmarketcap Watchlist",
    description: `
      Coinmarketcap provide access to current and historic data for Bitcoin and thousands of altcoins.<br />
      Get Authentic watchlist for your token/ Coin to drive investors attention.<br />
    `,
    imageId: 6,
    selectIds: [8],
    prices: [
      {
        amount: 1000,
        price: 70
      },
      {
        amount: 5000,
        price: 320
      },
      {
        amount: 10000,
        price: 590
      },
      {
        amount: 50000,
        price: 1900
      }
    ]
  },
  {
    id: 2,
    name: "coingecko",
    title: "Coingecko Likes",
    description: `
      Coingecko shows top cryptocurrency prices live, crypto charts, market cap, and trading volume. Discover Everyday’s new and trending coins, top crypto gainers and losers in real-time.<br />
      Get Authentic Likes for your token/ Coin to drive investors attention.
    `,
    imageId: 3,
    selectIds: [8],
    prices: [
      {
        amount: 1000,
        price: 70
      },
      {
        amount: 5000,
        price: 320
      },
      {
        amount: 10000,
        price: 590
      },
      {
        amount: 50000,
        price: 1900
      }
    ]
  },
  {
    id: 3,
    name: "crypto",
    title: "Crypto.com NFTs views",
    description: `
      <a target="_blank" href="https://crypto.com">Crypto.com</a> NFT is a highly-curated NFT marketplace where you can discover exclusive digital collectibles and their non-fungible tokens.<br />
      Get more views on your <a target="_blank" href="https://crypto.com">crypto.com</a> minted NFTs, so you’ll get more bids and buyers for the NFT.
    `,
    imageId: 10,
    selectIds: [8],
    prices: [
      {
        amount: 1000,
        price: 25
      },
      {
        amount: 5000,
        price: 90
      },
      {
        amount: 10000,
        price: 160
      },
      {
        amount: 50000,
        price: 600
      }
    ]
  }
];

export const CHAINS: Array<IChain> = [
  {
    chainId: 1,
    name: "Ethereum Mainnet",
    rpcUrls: ["https://mainnet.infura.io/v3/"],
    blockExploreUrls: ["https://etherscan.io"],
    nativeCurrencyName: "ETH",
    nativeCurrencySymbol: "ETH",
    decimals: 18
  },
  {
    chainId: 56,
    name: "Binance Smart Chain",
    rpcUrls: ["https://bsc-dataseed1.binance.org/"],
    blockExploreUrls: ["https://bscscan.com"],
    nativeCurrencyName: "BNB",
    nativeCurrencySymbol: "BNB",
    decimals: 18
  }
];
