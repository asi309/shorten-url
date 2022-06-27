import { useState } from 'react';

import {
  Stack,
  Box,
  Link,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import Logo from '../images/logo.svg';

const links = ['features', 'pricing', 'resources'];

const Drawer = () => (
  <Stack
    bgcolor="#3A3054"
    mx="24px"
    mt="24px"
    px="24px"
    py="40px"
    borderRadius="10px"
    sx={{ display: 'flex', alignItems: 'center' }}
  >
    {links.map((link, idx) => (
      <Link
        href="#"
        key={idx}
        underline="none"
        color="#fff"
        sx={{
          ':hover': {
            cursor: 'pointer',
          },
          display: 'flex',
          alignItems: 'center',
          fontWeight: '700',
          fontSize: '18px',
          lineHeight: '27px',
        }}
        textTransform="capitalize"
        mb="30px"
      >
        {link}
      </Link>
    ))}
    <Divider
      sx={{ color: '#9E9AA8', opacity: '0.25', borderColor: '#9E9AA8' }}
      flexItem={true}
    />
    <Button
      variant="text"
      sx={{
        color: '#fff',
        fontWeight: '700',
        fontSize: '18px',
        lineHeight: '27px',
        backgroundColor: 'transparent',
        height: '48px',
        textTransform: 'capitalize',
        fontFamily: 'Poppins',
        marginBottom: '15px',
        marginTop: '20px',
      }}
    >
      Login
    </Button>
    <Button
      variant="text"
      sx={{
        color: '#fff',
        fontWeight: '700',
        fontSize: '18px',
        lineHeight: '27px',
        backgroundColor: '#2BD0D0',
        height: '48px',
        width: '100%',
        borderRadius: '28px',
        textTransform: 'capitalize',
        fontFamily: 'Poppins',
      }}
    >
      Sign Up
    </Button>
  </Stack>
);

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    if (drawerOpen) {
      setDrawerOpen(false);
    } else {
      setDrawerOpen(true);
    }
  };

  return (
    <nav>
      <AppBar
        color="transparent"
        sx={{
          display: { xs: 'flex', lg: 'none' },
          boxShadow: 'none',
          position: 'static',
          marginTop: '40px',
          marginBottom: '23px',
          height: '33px',
        }}
        pt="40px"
      >
        <Toolbar
          sx={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingX: '24px',
            minHeight: '33px',
          }}
        >
          <img src={Logo} alt="logo" />
          <IconButton sx={{ padding: 0 }} onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
        {drawerOpen && <Drawer />}
      </AppBar>
      {/* Below section is for desktop navbar */}
      <Stack
        sx={{ display: { lg: 'flex', xs: 'none' } }}
        justifyContent="center"
        alignItems="center"
        flexDirection="row"
        pt="48px"
        px="165px"
      >
        <Stack flexDirection="row" justifyContent="space-between" width="100%">
          <Stack flexDirection="row" justifyContent="flex-start">
            <Box
              height="42.5px"
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
              }}
            >
              <img
                src={Logo}
                alt="logo"
                width="120px"
                height="32px"
                style={{ marginRight: '50px' }}
              />
            </Box>
            {links.map((link, idx) => (
              <Link
                href="#"
                key={idx}
                underline="none"
                color="#9E9AA8"
                sx={{
                  ':hover': {
                    color: '#34313D',
                    fontWeight: 700,
                    cursor: 'pointer',
                  },
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '15px',
                  lineHeight: '22px',
                }}
                mr="28px"
                height="42.5px"
                textTransform="capitalize"
              >
                {link}
              </Link>
            ))}
          </Stack>
          <Stack flexDirection="row">
            <Button
              variant="text"
              sx={{
                color: '#9E9AA8',
                fontWeight: '700',
                backgroundColor: 'transparent',
                height: '42.5px',
                width: '95px',
                textTransform: 'capitalize',
                fontFamily: 'Poppins',
                fontSize: '15px',
                lineHeight: '22px',
                ':hover': {
                  // backgroundColor: '#9AE3E3',
                  backgroundColor: 'transparent',
                  color: '#34313D',
                  padding: '9px 24px',
                  borderRadius: '21px',
                },
              }}
            >
              Login
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#2BD0D0',
                color: '#fff',
                fontWeight: '700',
                height: '42.5px',
                width: '110px',
                textTransform: 'capitalize',
                fontFamily: 'Poppins',
                fontSize: '15px',
                lineHeight: '22px',
                borderRadius: '21px',
                ':hover': {
                  backgroundColor: '#9AE3E3',
                  padding: '9px 24px',
                  color: '#fff',
                  borderRadius: '21px',
                },
              }}
            >
              Sign Up
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </nav>
  );
};

export default Navbar;
