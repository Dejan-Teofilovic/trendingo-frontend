import { Box, Container, Typography, Grid } from "@mui/material"
import ServiceCardItem from "../../components/ServiceCardItem"
import { COLOR_WHITE, COLOR_PRIMARY } from "../../utils/constants"
import { TRENDING_SERVICES } from "../../utils/data"

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

export default function Trending() {

  return (
    <Box>
      <Container maxWidth="xl">
        <Typography textAlign="center" variant="h4" color={COLOR_PRIMARY}>
          Trending Services
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
            {TRENDING_SERVICES.map((dataItem, index) => (
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