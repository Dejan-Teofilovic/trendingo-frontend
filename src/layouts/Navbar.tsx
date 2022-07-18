import { Link as RouterLink } from 'react-router-dom'
import { AppBar, Box, Button, Container } from "@mui/material"
import { ToolbarWithoutPaddingX } from "../components/styledComponents"
import { routes } from '../Routes/routes'
import { COLOR_WHITE } from '../utils/constants'
import { Fragment } from 'react'

export default function Navbar() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <ToolbarWithoutPaddingX>
          <Button component={RouterLink} to="/">
            <Box component="img" src="/assets/images/logo.webp" width={130} />
          </Button>
          <Box flexGrow={1} />
          {
            routes.map(route => {
              if (route.name) {
                return (
                  <Button
                    key={route.path}
                    component={RouterLink}
                    to={route.path}
                    sx={{ color: COLOR_WHITE }}
                  >{route.name}</Button>
                )
              } else {
                return <Fragment key={route.path} />
              }
            })
          }
        </ToolbarWithoutPaddingX>
      </Container>
    </AppBar>
  )
}