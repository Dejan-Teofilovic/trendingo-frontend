import { Box, Container, Typography } from "@mui/material"
import { useState } from "react"
import Carousel from "../../components/Carousel"
import ServiceCardItem, { IServiceCardDataItem } from "../../components/ServiceCardItem"

/* ----------------------------------------------------------------- */

type TInitSites = Array<IServiceCardDataItem>

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
    title: 'CoinAlpha Upvotes',
    image: '/assets/images/coinalpha.webp',
    path: '/upvoting/coinalpha',
    price: 9,
    priceHigh: undefined,
    priceLow: undefined
  },
  {
    title: 'CoinGecko Watchlists & Reactions',
    image: '/assets/images/coingecko.webp',
    path: '/upvoting/coingecko',
    price: 15,
    priceHigh: undefined,
    priceLow: undefined
  },
  {
    title: 'Coinhunt Upvotes',
    image: '/assets/images/coinhunt.webp',
    path: '/upvoting/coinhunt',
    price: 9,
    priceHigh: undefined,
    priceLow: undefined
  },
  {
    title: 'CoinMarketCap Watchlists',
    image: '/assets/images/coinmarketcap.webp',
    path: '/upvoting/coinmarketcap',
    price: 20,
    priceLow: undefined,
    priceHigh: undefined
  },
  {
    title: 'Coinmooner Upvotes',
    image: '/assets/images/coinmooner.webp',
    path: '/upvoting/coinmooner',
    price: 9,
    priceLow: undefined,
    priceHigh: undefined
  },
  {
    title: 'Coinscope Upvotes',
    image: '/assets/images/coinscope.webp',
    path: '/upvoting/coinscope',
    price: 9,
    priceLow: undefined,
    priceHigh: undefined
  },
  {
    title: 'CoinSniper Upvotes & Watchlists',
    image: '/assets/images/dxsale.webp',
    path: '/upvoting/dxsale',
    price: 9,
    priceHigh: undefined,
    priceLow: undefined
  },
  {
    title: 'Watcher Upvotes',
    image: '/assets/images/watcher.webp',
    path: '/upvoting/watcher',
    price: 9,
    priceHigh: undefined,
    priceLow: undefined
  }
]

export default function Upvoting() {
  const [sites, setSites] = useState(INIT_SITES)

  return (
    <Box mt={10}>
      <Container maxWidth="xl">
        <Typography textAlign="center" variant="h4">
          Trending Services
        </Typography>
        <Typography textAlign="center" variant="h6">
          All-in-one crypto services with the most effective marketing solution from the marketplace.
        </Typography>

        <Box mt={6}>
          <Carousel
            slideSettings={SLIDE_SETTINGS}
            carouselItemComponent={ServiceCardItem}
            data={sites}
          />
        </Box>
      </Container>
    </Box>
  )
}