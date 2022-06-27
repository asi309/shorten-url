import { Box, Typography } from '@mui/material';

import DetailsCard from './DetailsCard';
import icon1 from '../images/icon-brand-recognition.svg';
import icon2 from '../images/icon-detailed-records.svg';
import icon3 from '../images/icon-fully-customizable.svg';
import UrlCard from './UrlCard';

const details = [
  {
    title: 'Brand Recognition',
    description:
      'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.',
    icon: icon1,
  },
  {
    title: 'Detailed Records',
    description:
      'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
    icon: icon2,
  },
  {
    title: 'Fully Customizable',
    description:
      'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
    icon: icon3,
  },
];

const DetailCards = () => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      width: '77%',
      position: 'relative',
      gap: '30px',
    }}
  >
    <Box
      sx={{
        background: '#2BD0D0',
        width: '100%',
        height: '8px',
        position: 'absolute',
        top: '50%',
        bottom: '50%',
        right: 0,
        left: 0,
        zIndex: 0,
      }}
    />
    {details.map(({ title, description, icon }, idx) => (
      <DetailsCard
        key={idx}
        title={title}
        description={description}
        icon={icon}
        idx={idx}
      />
    ))}
  </Box>
);

const Details = ({ link, shortLink, urls }) => {
  return (
    <Box mt="-168px" pb="120px" sx={{ backgroundColor: '#EFF1F7' }}>
      <Box sx={{ height: '84px' }} />
      <Box
        pt="8px"
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {urls.map((url, idx) => (
          <UrlCard key={idx} link={url.link} shortLink={url.shortUrl} />
        ))}
      </Box>
      <Box
        mt="120px"
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Typography
          variant="h3"
          mb="18px"
          sx={{
            fontFamily: 'Poppins',
            fontWeight: 700,
            fontSize: '40px',
            lineHeight: '48px',
            letterSpacing: '-1px',
            color: '#34313D',
          }}
        >
          Advanced Statistics
        </Typography>
        <Typography
          variant="h5"
          mb="56px"
          sx={{
            fontFamily: 'Poppins',
            fontWeight: 500,
            fontSize: '18px',
            lineHeight: '32px',
            letterSpacing: '0.12px',
            color: '#9E9AA8',
            width: '37.5%',
            textAlign: 'center',
          }}
        >
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </Typography>
        <DetailCards />
      </Box>
    </Box>
  );
};

export default Details;
