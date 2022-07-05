import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Stack,
  Toolbar,
} from '@mui/material';
import { Icon } from '@iconify/react';
import { grey } from '@mui/material/colors';
import { Link as ScrollLink } from 'react-scroll';
import { PrimaryButton, TextButton, CustomDrawer } from '../components/styledComponents';
import { COLOR_BLACK } from '../utils/constants';

const ROUTES = [
  {
    name: 'foo',
    path: 'foo'
  },
  {
    name: 'bar',
    path: 'bar'
  }
];

export default function Navbar() {
  const [drawerOpened, setDrawerOpened] = useState(false);

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: 'rgba(10, 10, 10, 0.8)',
        py: { md: 1 },
        borderBottom: `1px solid ${COLOR_BLACK}`
      }}>
      <Container maxWidth="xl">
        <Toolbar>
          {/* For Mobile */}
          <IconButton
            size="large"
            sx={{ color: '#FFFFFF', ml: { xs: 2, md: 0 }, display: { xs: 'flex', md: 'none' } }}
            onClick={() => setDrawerOpened(true)}
          >
            <Icon icon="ant-design:menu-outlined" />
          </IconButton>

          {/* For Mobile */}
          <CustomDrawer
            anchor="right"
            open={drawerOpened}
            onClose={() => setDrawerOpened(false)}
          >
            <Box my={3}>
              <Stack direction="row" justifyContent="center" alignItems="center">
                <Button component={RouterLink} to="/">
                  <Box component="img" src="/assets/images/logo.png" width={50} />
                </Button>
              </Stack>
              <List sx={{ mt: 2 }} onClick={() => setDrawerOpened(false)}>
                {
                  ROUTES.map(route => (
                    <ListItem key={route.path}>
                      <ListItemButton
                        sx={{ color: grey[300] }}
                      >
                        <ScrollLink
                          to={route.path}
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                        >
                          {route.name}
                        </ScrollLink>
                      </ListItemButton>
                    </ListItem>
                  ))
                }
              </List>
            </Box>
          </CustomDrawer>

          {/* Logo for desktop */}
          <Button component={RouterLink} to="/" sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Box component="img" src="/assets/images/logo.png" width={70} ml={1} />
          </Button>

          <Box flexGrow={1}>
            <Stack direction="row" justifyContent="center">
              {/* Logo for desktop */}
              <Button component={RouterLink} to="/" sx={{ display: { xs: 'flex', md: 'none' } }}>
                <Box component="img" src="/assets/images/logo.png" width={70} ml={1} />
              </Button>
            </Stack>
          </Box>
          {
            ROUTES.map(route => (
              <TextButton
                key={route.path}
                sx={{ mr: 4, fontWeight: 600, color: grey[300], display: { xs: 'none', md: 'flex' } }}
              >
                <ScrollLink
                  to={route.path}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {route.name}
                </ScrollLink>
              </TextButton>
            ))
          }
          <PrimaryButton
            variant="contained"
          >Buy Now</PrimaryButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}