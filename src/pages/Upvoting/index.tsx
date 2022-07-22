import { Box, Container, Typography, Grid } from "@mui/material"
// import Carousel from "../../components/Carousel"
import ServiceCardItem from "../../components/ServiceCardItem"
import { COLOR_PRIMARY, COLOR_WHITE } from "../../utils/constants"

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

export default function Upvoting() {
  return (
    <Box my={{ xs: 5, md: 10 }}>
      <Container maxWidth="xl">
        <Typography textAlign="center" variant="h4" color={COLOR_PRIMARY}>
          Upvoting Services
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

          </Grid>
        </Box>
      </Container>
    </Box>
  )
}