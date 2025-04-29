import * as React from 'react';
import PropTypes from 'prop-types';
// import Avatar from '@mui/material/Avatar';
// import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import Pagination from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';

const articleInfo = [
  {
    tag: 'Slide',
    title: '01EDC x YEDC Chicken & Pig Mechanical Slider',
    description:
      'A collaborative creation by 01EDC and YEDC, this mechanical slider features charming chicken and pig designs. Crafted from premium materials, it offers a satisfying tactile experience, making it both a functional tool and a collectible item.',
    authors: [
      { name: 'Stainless Steel / Zirconium (Shell)', avatar: '/static/images/avatar/1.jpg' },
      { name: 'Stainless Steel (Liner)', avatar: '/static/images/avatar/2.jpg' },
    ],
  },
  {
    tag: 'Slide',
    title: 'PdEDC X-Feel Fidget Slider',
    description:
      'The X-Feel Fidget Slider by PdEDC combines a sleek design with a smooth sliding mechanism. Its compact form factor and durable build make it an ideal companion for stress relief and focus enhancement.',
    authors: [{ name: 'Aluminium + Brass', avatar: '/static/images/avatar/6.jpg' }],
  },
  {
    tag: 'Slide',
    title: 'Muyi MUSKETEER Fidget Slider',
    description:
      'Inspired by the valor of musketeers, this fidget slider from Muyi boasts a robust construction and intricate detailing. Its mechanical structure delivers a crisp, satisfying click, perfect for enthusiasts seeking both form and function.',
    authors: [{ name: 'Titanium + Stainless Steel / Zirconium + Brass', avatar: '/static/images/avatar/7.jpg' }],
  },
  {
    tag: 'Slide',
    title: 'Wanwu Reactive Armor Shield Fidget Slider',
    description:
      'Inspired by futuristic armor designs, this compact fidget slider offers a satisfying tactile experience with its stone-tumbled finish and magnetic mechanism.',
    authors: [{ name: 'Stainless Steel / Zirconium / PEI / G10', avatar: '/static/images/avatar/3.jpg' }],
  },
  {
    tag: 'Slide',
    title: 'Wanwu Bulletproof Mini Shield Fidget Slider',
    description:
      'A sleek and durable mini slider that combines robust materials with a minimalist design, perfect for on-the-go stress relief.',
    authors: [
      { name: 'Stainless Steel', avatar: '/static/images/avatar/4.jpg' },
      { name: 'PEI', avatar: '/static/images/avatar/5.jpg' },
    ],
  },
  {
    tag: 'Slide',
    title: 'MLD Magnetic Swivel EDC Fidget Slider',
    description:
      'This stainless steel slider features a unique swivel mechanism, providing a smooth and engaging fidgeting experience.',
    authors: [{ name: 'Stainless Steel', avatar: '/static/images/avatar/2.jpg' }],
  },
  {
    tag: 'Slide',
    title: 'MOT EDC Sky Breaker Fidget Slider',
    description:
      "With its futuristic design and precise engineering, the Sky Breaker offers a dynamic sliding action that's both satisfying and addictive.",
    authors: [
      { name: 'Stainless Steel', avatar: '/static/images/avatar/4.jpg' },
      { name: 'Titanium', avatar: '/static/images/avatar/5.jpg' },
    ],
  },
  {
    tag: 'Slide',
    title: 'Fashion Toy Studio LASER Double Push Fidget Slider',
    description:
      'This intricately designed slider features a double push mechanism, delivering a unique tactile feedback for enthusiasts.',
    authors: [{ name: 'Titanium / Stainless Steel​', avatar: '/static/images/avatar/2.jpg' }],
  },
  {
    tag: 'Spinner',
    title: 'Lautie CARNIVAL Roulette Wheel Desk Fidget Spinner',
    description:
      'A luxurious desk spinner that mimics a roulette wheel, combining elegance with mesmerizing spin dynamics.',
    authors: [{ name: 'Cupronickel + Brass / Zirconium + Stainless Steel​', avatar: '/static/images/avatar/7.jpg' }],
  },
  {
    tag: 'Haptic Coin',
    title: "Metal Toys Dz Top-C Mechanical Haptic Coin",
    description:
      "A compact haptic coin offering a satisfying click with each press, designed for discreet fidgeting.",
    authors: [{ name: 'Stainless Steel / Brass / Copper / Cupronickel', avatar: '/static/images/avatar/3.jpg' }],
  },
];

const StyledTypography = styled(Typography)({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

const TitleTypography = styled(Typography)(({ theme }) => ({
  position: 'relative',
  textDecoration: 'none',
  '&:hover': { cursor: 'pointer' },
  '& .arrow': {
    visibility: 'hidden',
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: 'translateY(-50%)',
  },
  '&:hover .arrow': {
    visibility: 'visible',
    opacity: 0.7,
  },
  '&:focus-visible': {
    outline: '3px solid',
    outlineColor: 'hsla(210, 98%, 48%, 0.5)',
    outlineOffset: '3px',
    borderRadius: '8px',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    width: 0,
    height: '1px',
    bottom: 0,
    left: 0,
    backgroundColor: (theme.vars || theme).palette.text.primary,
    opacity: 0.3,
    transition: 'width 0.3s ease, opacity 0.3s ease',
  },
  '&:hover::before': {
    width: '100%',
  },
}));

function Author({ authors }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: 2,
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Box
        sx={{ display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'center' }}
      >
        {/* <AvatarGroup max={3}>
          {authors.map((author, index) => (
            <Avatar
              key={index}
              alt={author.name}
              src={author.avatar}
              sx={{ width: 24, height: 24 }}
            />
          ))}
        </AvatarGroup> */}
        <Typography variant="caption" sx={{ fontWeight: 'bold'}}>
          Material: 
        </Typography>
        <Typography variant="caption">
          {authors.map((author) => author.name).join(', ')}
        </Typography>
      </Box>
      <Typography variant="caption">July 14, 2021</Typography>
    </Box>
  );
}

Author.propTypes = {
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default function Latest() {
  const [focusedCardIndex, setFocusedCardIndex] = React.useState(null);

  const handleFocus = (index) => {
    setFocusedCardIndex(index);
  };

  const handleBlur = () => {
    setFocusedCardIndex(null);
  };

  return (
    <div>
      <Typography variant="h2" gutterBottom>
        Latest
      </Typography>
      <Grid container spacing={8} columns={12} sx={{ my: 4 }}>
        {articleInfo.map((article, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6 }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: 1,
                height: '100%',
              }}
            >
              <Typography gutterBottom variant="caption" component="div">
                {article.tag}
              </Typography>
              <TitleTypography
                gutterBottom
                variant="h6"
                onFocus={() => handleFocus(index)}
                onBlur={handleBlur}
                tabIndex={0}
                className={focusedCardIndex === index ? 'Mui-focused' : ''}
              >
                {article.title}
                <NavigateNextRoundedIcon
                  className="arrow"
                  sx={{ fontSize: '1rem' }}
                />
              </TitleTypography>
              <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                {article.description}
              </StyledTypography>

              <Author authors={article.authors} />
            </Box>
          </Grid>
        ))}
      </Grid>
      {/* <Box sx={{ display: 'flex', flexDirection: 'row', pt: 4 }}>
        <Pagination hidePrevButton hideNextButton count={10} boundaryCount={10} />
      </Box> */}
    </div>
  );
}
