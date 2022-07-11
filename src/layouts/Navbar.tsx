import { Link as RouterLink } from 'react-router-dom'
import { AppBar, Box, Button, Container } from "@mui/material"
import { ToolbarWithoutPaddingX } from "../components/styledComponents"
import { routes } from '../Routes/routes'
import { COLOR_WHITE } from '../utils/constants'

export default function Navbar() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <ToolbarWithoutPaddingX>
          <Button component={RouterLink} to="/">
            <Box component="img" src="logo192.png" width={50} />
          </Button>
          <Box flexGrow={1} />
          {
            routes.map(route => (
              <Button
                key={route.path}
                component={RouterLink}
                to={route.path}
                sx={{ color: COLOR_WHITE }}
              >{route.name}</Button>
            ))
          }
        </ToolbarWithoutPaddingX>
      </Container>
    </AppBar>
  )
}