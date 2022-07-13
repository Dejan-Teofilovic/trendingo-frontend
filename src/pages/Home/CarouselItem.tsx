import { Card, CardContent, CardMedia, Typography } from "@mui/material"
import { ISiteDataItem } from "."
import { Link as RouterLink, useNavigate } from 'react-router-dom';

/* -------------------------------------------------------------- */

interface IProps {
  key: number,
  dataItem: ISiteDataItem
}

/* -------------------------------------------------------------- */

export default function CarouselItem({ dataItem }: IProps) {
  const navigate = useNavigate();

  const handleGotoRoute = () => {
    navigate(`services/${dataItem.pathParam}`)
  }

  return (
    <Card sx={{ height: '99%', mx: 1, cursor: 'pointer' }} onClick={handleGotoRoute}>
      <CardMedia
        component="img"
        image={dataItem.image}
        alt={dataItem.title}
      />
      <CardContent>
        <Typography variant="h6">{dataItem.title}</Typography>
        {
          dataItem.price && (<Typography variant="body1">{dataItem.price} BUSD</Typography>)
        }
        {
          dataItem.priceHigh && dataItem.priceLow && (
            <Typography variant="body1">
              {dataItem.priceLow} BUSD - {dataItem.priceHigh} BUSD
            </Typography>
          )
        }
      </CardContent>
    </Card>
  )
}