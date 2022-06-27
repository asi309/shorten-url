import { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';

import { baseURL, fetchShortUrl } from '../utils/api';
import bg from '../images/bg-shorten-desktop.svg';

const ShortenUrl = ({ link, setLink, setshortLink, setUrls }) => {
  const errorText = 'Please add a link';
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    if (error) {
      setError(false);
    }
    setLink(e.target.value);
  };

  const handleSubmit = async () => {
    if (
      link === '' ||
      !link.match(
        /((http|https):\/\/)?(www\.)?[a-zA-Z0-9@:%._+~#?&/=]{2,256}\.[a-z]{2,6}\b([a-zA-Z0-9@:%._+~#?&/=]*)/
      )
    ) {
      setError(true);
      return;
    }

    const data = await fetchShortUrl(`${baseURL}/shorten?url=${link}`);
    
    setshortLink(data.result.full_short_link);
    setUrls((state) => [
      ...state,
      {
        link,
        shortUrl: data.result.full_short_link,
      },
    ]);
    // console.log(data);
  };

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '168px',
        background: 'transparent',
      }}
    >
      <Box
        mt="-84px"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          height: '168px',
          minWidth: '77%',
          position: 'relative',
          zIndex: 1,
          backgroundColor: '#3A3054',
          borderRadius: '10px',
          overflow: 'hidden',
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
          <img src={bg} alt="background" style={{ objectFit: 'cover' }} />
        </Box>
        <TextField
          variant="standard"
          InputProps={{
            disableUnderline: true,
          }}
          value={link}
          onChange={handleChange}
          helperText={error && errorText}
          error={error}
          placeholder="Shorten a link here..."
          sx={{
            background: '#fff',
            flex: 1,
            marginY: '52px',
            marginLeft: '64px',
            marginRight: '24px',
            outline: `${error ? '3px solid #F46363' : 'none'}`,
            height: '64px',
            borderRadius: '10px',
            paddingX: '32px',
            paddingY: '14px',
            input: {
              fontSize: '20px',
              lineHeight: '36px',
              letterSpacing: '0.15px',
              fontFamily: 'Poppins',
              fontWeight: '500',
              color: `${error ? '#F46363' : '#34313D'}`,
              height: '100%',
            },
          }}
          FormHelperTextProps={{
            sx: {
              marginTop: '24px',
              marginLeft: '-32px',
              fontFamily: 'Poppins',
              fontStyle: 'italic',
              fontWeight: 500,
              fontSize: '16px',
              lineHeight: '18px',
              color: '#F46363',
            },
          }}
        />
        <Button
          variant="contained"
          sx={{
            background: '#2BD0D0',
            color: '#fff',
            height: '64px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textTransform: 'capitalize',
            marginRight: '65px',
            paddingX: '41px',
            borderRadius: '10px',
            ':hover': {
              background: '#9AE3E3',
            },
            fontFamily: 'Poppins',
            fontWeight: '700',
            fontSize: '20px',
            lineHeight: '30px',
          }}
          onClick={handleSubmit}
        >
          Shorten it!
        </Button>
      </Box>
    </Box>
  );
};

export default ShortenUrl;
