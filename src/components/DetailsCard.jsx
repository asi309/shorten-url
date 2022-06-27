import { Box, Typography } from '@mui/material';

const DetailsCard = ({ title, description, icon, idx }) => {
  return (
    <Box
      sx={{
        zIndex: '2',
        backgroundColor: '#fff',
        borderRadius: '5px',
        paddingX: '32px',
        paddingBottom: '41px',
        marginTop: `${(idx + 1) * 44}px`,
      }}
    >
      <Box
        sx={{
          borderRadius: '50%',
          height: '88px',
          width: '88px',
          marginTop: '-44px',
          marginLeft: '32px',
          backgroundColor: '#3A3054',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img src={icon} alt="card icon" />
      </Box>
      <Typography
        variant="h4"
        sx={{
          marginTop: '33px',
          fontFamily: 'Poppins',
          fontWeight: 700,
          fontSize: '22px',
          lineHeight: '33px',
          color: '#34313D',
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          marginTop: '12px',
          fontFamily: 'Poppins',
          fontWeight: 500,
          fontSize: '15px',
          lineHeight: '26px',
          color: '#9E9AA8',
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default DetailsCard;
