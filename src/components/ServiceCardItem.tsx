import { Card, CardContent, CardMedia, Typography } from "@mui/material"
import { useNavigate } from 'react-router-dom'

/* -------------------------------------------------------------- */

export interface IServiceCardDataItem {
  title: string,
  image: string,
  path: string,
  price: number | undefined,
  priceHigh: number | undefined,
  priceLow: number | undefined
}

interface IProps {
  key: number,
  dataItem: IServiceCardDataItem
}

/* -------------------------------------------------------------- */

export default function ServiceCardItem({ dataItem }: IProps) {
  const navigate = useNavigate();

  const handleGotoRoute = () => {
    navigate(dataItem.path)
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