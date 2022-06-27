import { Box, Button, Typography } from '@mui/material';

import bg from '../images/bg-boost-desktop.svg';

const Cta = () => {
  return (
    <Box
      sx={{
        background: '#3A3054',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          zIndex: 0,
        }}
      >
        <img src={bg} alt="background" />
      </Box>
      <Typography
        variant="h3"
        mt="57px"
        mb="32px"
        sx={{
          fontFamily: 'Poppins',
          fontSize: '40px',
          lineHeight: '48px',
          letterSpacing: '-1px',
          fontWeight: 700,
          color: '#fff',
          zIndex: 1,
        }}
      >
        Boost your links today
      </Typography>
      <Button
        variant="contained"
        sx={{
          background: '#2BD0D0',
          color: '#fff',
          fontFamily: 'Poppins',
          fontWeight: 700,
          fontSize: '20px',
          lineHeight: '30px',
          textTransform: 'capitalize',
          paddingY: '14px',
          paddingX: '40px',
          borderRadius: '28px',
          ':hover': {
            background: '#9AE3E3',
          },
          marginBottom: '57px',
        }}
      >
        Get Started
      </Button>
    </Box>
  );
};

export default Cta;
