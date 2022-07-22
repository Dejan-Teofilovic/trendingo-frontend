import { Card, CardContent, CardMedia, Typography } from "@mui/material"
import { useMemo } from "react";
import { useLocation, useNavigate } from 'react-router-dom'
import { IMAGES } from "../utils/data";
import { IServiceCardItem } from "../utils/interfaces";

export default function ServiceCardItem({ dataItem }: IServiceCardItem) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleGotoRoute = () => {
    navigate(`${pathname}/${dataItem.name}`)
  }

  const imageSrc = useMemo(() => {
    let image = IMAGES.find(element => element.id === dataItem.imageId)
    return image?.value
  }, [dataItem.imageId])

  return (
    <Card sx={{ height: '99%', mx: 1, cursor: 'pointer' }} onClick={handleGotoRoute}>
      <CardMedia
        component="img"
        image={imageSrc}
        alt={dataItem.title}
      />
      <CardContent>
        <Typography variant="h6">{dataItem.title}</Typography>
        {/* {
          dataItem.price && (<Typography variant="body1">{dataItem.price} BUSD</Typography>)
        }
        {
          dataItem.priceHigh && dataItem.priceLow && (
            <Typography variant="body1">
              {dataItem.priceLow} BUSD - {dataItem.priceHigh} BUSD
            </Typography>
          )
        } */}
      </CardContent>
    </Card>
  )
}