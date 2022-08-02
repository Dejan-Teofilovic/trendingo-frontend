import { 
  Box, 
  Container, 
  Fab, 
  Link, 
  Stack, 
  Typography, 
  useTheme, 
} from "@mui/material";
import { Icon } from "@iconify/react";
import { COLOR_WHITE } from "../utils/constants";

const SOCIAL_LINKS = [
  {
    url: 'https://medium.com/@Trendingo.cc',
    icon: 'arcticons:medium-alt'
  },
  {
    url: 'https://www.reddit.com/r/Trendingo/',
    icon: 'ant-design:reddit-outlined'
  },
  {
    url: 'https://www.instagram.com/trendingocc/',
    icon: 'akar-icons:instagram-fill'
  },
  {
    url: 'https://twitter.com/Trendingo_cc',
    icon: 'icon-park-outline:twitter'
  },
  {
    url: 'https://t.me/trendingo_cc',
    icon: 'la:telegram'
  }
]

export default function Footer() {
  const theme = useTheme();
  return (
    <Box py={12} bgcolor={theme.palette.background.paper}>
      <Container maxWidth="xl">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack direction="row" alignItems="center" spacing={6}>
            <Box
              component="img"
              src="/assets/images/logo.png"
              alt="logo"
              width={200}
            />

            <Stack direction="row" alignItems="center" spacing={1}>
              {
                SOCIAL_LINKS.map(socialLink => (
                  <Fab
                    size="small"
                    component={Link}
                    target="_blank"
                    href={socialLink.url}
                    sx={{ fontSize: 24 }}
                    color="primary"
                  >
                    <Icon icon={socialLink.icon} />
                  </Fab>
                ))
              }
            </Stack>
          </Stack>
          <Typography textAlign="center" color={COLOR_WHITE}>
            © {new Date().getFullYear()} Trendingo
          </Typography>
        </Stack>
      </Container>
    </Box>
  )
}