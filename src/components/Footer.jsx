import { Box, Typography } from '@mui/material';

import { ReactComponent as Logo } from '../images/logo.svg';
import { ReactComponent as Fb } from '../images/icon-facebook.svg';
import { ReactComponent as Insta } from '../images/icon-instagram.svg';
import { ReactComponent as Pi } from '../images/icon-pinterest.svg';
import { ReactComponent as Tw } from '../images/icon-twitter.svg';

const Footer = () => {
  return (
    <Box
      pt="72px"
      pb="72px"
      sx={{
        background: '#232127',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          width: '77%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <Logo className="footer-logo" />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '66%',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <Typography
              mb="22px"
              sx={{
                fontFamily: 'Poppins',
                fontSize: '16px',
                lineHeight: '24px',
                letterSpacing: '-0.25px',
                fontWeight: 700,
                color: '#fff',
              }}
            >
              Features
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: '#BFBFBF',
                fontFamily: 'Poppins',
                fontWeight: 500,
                fontSize: '15px',
                lineHeight: '22.5px',
                letterSpacing: '-0.23px',
                marginBottom: '10px',
              }}
            >
              Link Shortening
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: '#BFBFBF',
                fontFamily: 'Poppins',
                fontWeight: 500,
                fontSize: '15px',
                lineHeight: '22.5px',
                letterSpacing: '-0.23px',
                marginBottom: '10px',
              }}
            >
              Branded Links
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: '#BFBFBF',
                fontFamily: 'Poppins',
                fontWeight: 500,
                fontSize: '15px',
                lineHeight: '22.5px',
                letterSpacing: '-0.23px',
                marginBottom: '10px',
              }}
            >
              Analytics
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <Typography
              mb="22px"
              sx={{
                fontFamily: 'Poppins',
                fontSize: '16px',
                lineHeight: '24px',
                letterSpacing: '-0.25px',
                fontWeight: 700,
                color: '#fff',
              }}
            >
              Resources
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: '#BFBFBF',
                fontFamily: 'Poppins',
                fontWeight: 500,
                fontSize: '15px',
                lineHeight: '22.5px',
                letterSpacing: '-0.23px',
                marginBottom: '10px',
              }}
            >
              Blog
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: '#BFBFBF',
                fontFamily: 'Poppins',
                fontWeight: 500,
                fontSize: '15px',
                lineHeight: '22.5px',
                letterSpacing: '-0.23px',
                marginBottom: '10px',
              }}
            >
              Developers
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: '#BFBFBF',
                fontFamily: 'Poppins',
                fontWeight: 500,
                fontSize: '15px',
                lineHeight: '22.5px',
                letterSpacing: '-0.23px',
                marginBottom: '10px',
              }}
            >
              Support
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <Typography
              mb="22px"
              sx={{
                fontFamily: 'Poppins',
                fontSize: '16px',
                lineHeight: '24px',
                letterSpacing: '-0.25px',
                fontWeight: 700,
                color: '#fff',
              }}
            >
              Company
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: '#BFBFBF',
                fontFamily: 'Poppins',
                fontWeight: 500,
                fontSize: '15px',
                lineHeight: '22.5px',
                letterSpacing: '-0.23px',
                marginBottom: '10px',
              }}
            >
              About
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: '#BFBFBF',
                fontFamily: 'Poppins',
                fontWeight: 500,
                fontSize: '15px',
                lineHeight: '22.5px',
                letterSpacing: '-0.23px',
                marginBottom: '10px',
              }}
            >
              Our Team
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: '#BFBFBF',
                fontFamily: 'Poppins',
                fontWeight: 500,
                fontSize: '15px',
                lineHeight: '22.5px',
                letterSpacing: '-0.23px',
                marginBottom: '10px',
              }}
            >
              Careers
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: '#BFBFBF',
                fontFamily: 'Poppins',
                fontWeight: 500,
                fontSize: '15px',
                lineHeight: '22.5px',
                letterSpacing: '-0.23px',
                marginBottom: '10px',
              }}
            >
              Contact
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              gap: '24px'
            }}
          >
            <Box>
              <Fb />
            </Box>
            <Box>
              <Tw />
            </Box>
            <Box>
              <Pi />
            </Box>
            <Box>
              <Insta />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
