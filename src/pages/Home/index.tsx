import { Box, Container, Typography } from "@mui/material"
import { useState } from "react"
import Carousel from "../../components/Carousel"
import CarouselItem from "./CarouselItem"

/* ----------------------------------------------------------------- */

export interface ISiteDataItem {
  title: string,
  image: string,
  pathParam: string,
  price: number | undefined,
  priceHigh: number | undefined,
  priceLow: number | undefined
}

type TInitSites = Array<ISiteDataItem>

/* ----------------------------------------------------------------- */

const SLIDE_SETTINGS = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: true,
  autoplaySpeed: 9000,
  responsive: [
    {
      breakpoint: 1280,
      settings: { slidesToShow: 4 }
    },
    {
      breakpoint: 1024,
      settings: { slidesToShow: 3 }
    },
    {
      breakpoint: 960,
      settings: { slidesToShow: 2 }
    },
    {
      breakpoint: 480,
      settings: { slidesToShow: 1, centerPadding: '0' }
    }
  ]
}

const INIT_SITES: TInitSites = [
  {
    title: 'Coin Gecko Fast-Track Listing',
    image: '/assets/images/coingecko.webp',
    pathParam: 'coin-gecko',
    price: 4500,
    priceHigh: undefined,
    priceLow: undefined
  },
  {
    title: 'CoinMarketCap Trending',
    image: '/assets/images/coinmarketcap.webp',
    pathParam: 'coin-market-cap',
    price: undefined,
    priceLow: 2000,
    priceHigh: 12000
  },
  {
    title: 'CoinSniper Upvotes & Watchlists',
    image: '/assets/images/coinsniper.webp',
    pathParam: 'coin-sniper',
    price: 9,
    priceHigh: undefined,
    priceLow: undefined
  },
  {
    title: 'Cryptocom Trending',
    image: '/assets/images/crypto.webp',
    pathParam: 'crypto',
    price: undefined,
    priceLow: 600,
    priceHigh: 1000
  },
  {
    title: 'Dextools Trending',
    image: '/assets/images/dextools.webp',
    pathParam: 'dextools',
    price: undefined,
    priceLow: 9000,
    priceHigh: 18000
  },
  {
    title: 'Pinksale Trending',
    image: '/assets/images/pinksale.webp',
    pathParam: 'pinksale',
    price: 500,
    priceHigh: undefined,
    priceLow: undefined
  }
]

export default function Home() {
  const [sites, setSites] = useState(INIT_SITES)

  return (
    <Box mt={10}>
      <Container maxWidth="xl">
        <Typography textAlign="center" variant="h4">
          Leading Marketing Services In The Crypto Industry
        </Typography>
        <Typography textAlign="center" variant="h6">
          All-in-one crypto services with the most effective marketing solution from the marketplace.
        </Typography>

        <Box mt={6}>
          <Carousel
            slideSettings={SLIDE_SETTINGS}
            carouselItemComponent={CarouselItem}
            data={sites}
          />
        </Box>
      </Container>
    </Box>
  )
}