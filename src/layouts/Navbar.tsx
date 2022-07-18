import { Fragment, useState } from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Stack,
  styled
} from "@mui/material"
import { grey } from '@mui/material/colors'
import { Icon } from '@iconify/react'
import { ToolbarWithoutPaddingX } from "../components/styledComponents"
import { routes } from '../Routes/routes'
import { COLOR_WHITE } from '../utils/constants'

const CustomizedDrawer = styled(Drawer)`
  .MuiPaper-root {
    background-color: #111;
  }
`;

export default function Navbar() {
  const [drawerOpened, setDrawerOpened] = useState(false);
  const { pathname } = useLocation();

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <ToolbarWithoutPaddingX>
          {/* For Mobile */}
          <CustomizedDrawer
            anchor="right"
            open={drawerOpened}
            onClose={() => setDrawerOpened(false)}
          >
            <Box my={3}>
              <Stack direction="row" justifyContent="center" alignItems="center">
                <Button component={RouterLink} to="/">
                  <Box component="img" src="/assets/images/logo.png" width={100} />
                </Button>
              </Stack>
              <List sx={{ mt: 2 }} onClick={() => setDrawerOpened(false)}>
                {
                  routes.map(route => {
                    if (route.name) {
                      return (
                        <ListItem key={route.path}>
                          <ListItemButton
                            sx={{ color: grey[300] }}
                            component={RouterLink}
                            to={route.path}
                          >
                            {route.name}
                          </ListItemButton>
                        </ListItem>
                      )
                    } else {
                      return <Fragment key={route.path} />
                    }
                  })
                }
              </List>
            </Box>
          </CustomizedDrawer>

          {/* Logo */}
          <Button component={RouterLink} to="/">
            <Box component="img" src="/assets/images/logo.png" width={130} />
          </Button>

          <Box flexGrow={1}>
            <Stack direction="row" justifyContent="end">
              {/* For Mobile */}
              <IconButton
                size="large"
                sx={{ color: '#FFFFFF', ml: { xs: 2, md: 0 }, display: { xs: 'flex', sm: 'none' } }}
                onClick={() => setDrawerOpened(true)}
              >
                <Icon icon="bx:menu" />
              </IconButton>
            </Stack>
          </Box>
          {
            routes.map(route => {
              if (route.name) {
                return (
                  <Button
                    key={route.path}
                    component={RouterLink}
                    to={route.path}
                    sx={{
                      color: COLOR_WHITE,
                      textTransform: 'capitalize',
                      display: { xs: 'none', sm: 'flex' },
                      mr: 3
                    }}
                    variant={pathname === route.path ? 'contained' : 'text'}
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