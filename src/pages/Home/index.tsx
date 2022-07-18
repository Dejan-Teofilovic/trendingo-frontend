import { Box, Container, Grid, Typography } from "@mui/material"
import { useState } from "react"
// import Carousel from "../../components/Carousel"
import ServiceCardItem, { IServiceCardDataItem } from "../../components/ServiceCardItem"
import { COLOR_PRIMARY, COLOR_WHITE } from "../../utils/constants"

/* ----------------------------------------------------------------- */

type TInitSites = Array<IServiceCardDataItem>

/* ----------------------------------------------------------------- */

// const SLIDE_SETTINGS = {
//   dots: true,
//   arrows: false,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 4,
//   slidesToScroll: 1,
//   initialSlide: 0,
//   autoplay: true,
//   autoplaySpeed: 9000,
//   responsive: [
//     {
//       breakpoint: 1280,
//       settings: { slidesToShow: 4 }
//     },
//     {
//       breakpoint: 1024,
//       settings: { slidesToShow: 3 }
//     },
//     {
//       breakpoint: 960,
//       settings: { slidesToShow: 2 }
//     },
//     {
//       breakpoint: 480,
//       settings: { slidesToShow: 1, centerPadding: '0' }
//     }
//   ]
// }

const INIT_SITES: TInitSites = [
  {
    title: 'Coin Gecko Fast-Track Listing',
    image: '/assets/images/coingecko.webp',
    path: '/listing/coingecko',
    price: 4500,
    priceHigh: undefined,
    priceLow: undefined
  },
  {
    title: 'CoinMarketCap Trending',
    image: '/assets/images/coinmarketcap.webp',
    path: '/trending/coinmarketcap',
    price: undefined,
    priceLow: 2000,
    priceHigh: 12000
  },
  {
    title: 'CoinSniper Upvotes & Watchlists',
    image: '/assets/images/coinsniper.webp',
    path: '/upvote/coinsniper',
    price: 9,
    priceHigh: undefined,
    priceLow: undefined
  },
  {
    title: 'Cryptocom Trending',
    image: '/assets/images/crypto.webp',
    path: '/trending/crypto',
    price: undefined,
    priceLow: 600,
    priceHigh: 1000
  },
  {
    title: 'Dextools Trending',
    image: '/assets/images/dextools.webp',
    path: '/trending/dextools',
    price: undefined,
    priceLow: 9000,
    priceHigh: 18000
  },
  {
    title: 'Pinksale Trending',
    image: '/assets/images/pinksale.webp',
    path: '/trending/pinksale',
    price: 500,
    priceHigh: undefined,
    priceLow: undefined
  }
]

export default function Home() {
  const [sites, setSites] = useState(INIT_SITES)

  return (
    <Box my={{ xs: 5, md: 10 }}>
      <Container maxWidth="xl">
        <Typography textAlign="center" variant="h4" color={COLOR_PRIMARY}>
          Leading Marketing Services In The Crypto Industry
        </Typography>
        <Typography textAlign="center" variant="h6" color={COLOR_WHITE}>
          All-in-one crypto services with the most effective marketing solution from the marketplace.
        </Typography>

        <Box mt={{ xs: 3, md: 6 }}>
          {/* <Carousel
            slideSettings={SLIDE_SETTINGS}
            carouselItemComponent={ServiceCardItem}
            data={sites}
          /> */}
          <Grid container spacing={{ xs: 1, sm: 2, md: 4 }}>
            {sites.map((dataItem, index) => (
              <Grid item xs={6} sm={4} md={3} key={dataItem.title}>
                <ServiceCardItem key={index} dataItem={dataItem} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}