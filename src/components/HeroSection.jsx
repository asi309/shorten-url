import { Box, Typography, Button } from '@mui/material';

import HeroImg from '../images/illustration-working.svg';

const HeroSection = () => {
  return (
    <Box
      pt="75px"
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        gap: { lg: '100px', xl: '125px' },
        width: '100%',
        position: 'relative',
      }}
      pl="165px"
      pb="222px"
    >
      <Box mt="70px">
        <Typography
          variant="h1"
          color="#34313D"
          sx={{
            fontFamily: 'Poppins',
            fontWeight: '700',
            fontSize: '80px',
            lineHeight: '90px',
            letterSpacing: '-2px',
          }}
        >
          More than just
          <br />
          shorter links
        </Typography>
        <Typography
          variant="h2"
          color="#9E9AA8"
          pt="5px"
          sx={{
            fontFamily: 'Poppins',
            fontWeight: '500',
            fontSize: '22px',
            lineHeight: '36px',
            letterSpacing: '0.15px',
          }}
        >
          Build your brand’s recognition and get detailed
          <br />
          insights on how your links are performing.
        </Typography>
        <Box mt="38px">
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#2BD0D0',
              width: '200px',
              paddingY: '14px',
              fontFamily: 'Poppins',
              borderRadius: '28px',
              textTransform: 'capitalize',
              boxShadow: 'none',
              ':hover': {
                backgroundColor: '#9AE3E3',
              },
            }}
          >
            Get Started
          </Button>
        </Box>
      </Box>
      <Box
        style={{ position: 'absolute', right: '-123px' }}
      >
        <img src={HeroImg} alt="working illustration" />
      </Box>
    </Box>
  );
};

export default HeroSection;
