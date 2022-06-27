import { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';

const UrlCard = ({ link, shortLink }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(shortLink);
    setIsCopied(true);
  };

  return (
    <Box
      mt="16px"
      sx={{
        height: '72px',
        background: '#fff',
        borderRadius: '5px',
        width: '77%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: '32px',
        paddingRight: '24px',
        paddingY: '16px',
      }}
    >
      <Typography
        sx={{
          fontFamily: 'Poppins',
          fontSize: '20px',
          fontWeight: 500,
          lineHeight: '36px',
          letterSpacing: '0.15px',
          color: '#34313D',
        }}
      >
        {link}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontSize: '20px',
            fontWeight: 500,
            lineHeight: '36px',
            letterSpacing: '0.15px',
            color: '#2BD0D0',
            marginRight: '24px',
          }}
        >
          {shortLink}
        </Typography>
        <Button
          variant="contained"
          onClick={handleCopy}
          sx={{
            backgroundColor: isCopied ? '#3A3054' : '#2BD0D0',
            borderRadius: '5px',
            textTransform: 'capitalize',
            height: '40px',
            width: '103px',
            color: '#fff',
            fontSize: '15px',
            lineHeight: '22.5px',
            fontWeight: 700,
            ':hover': {
              backgroundColor: '#9AE3E3',
            },
          }}
        >
          {isCopied ? 'Copied!' : 'Copy'}
        </Button>
      </Box>
    </Box>
  );
};

export default UrlCard;
