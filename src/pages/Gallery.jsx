import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import edcimg1 from '../assets/images/edcimg1.JPG';
import edcimg2 from '../assets/images/edcimg2.JPG';
import edcimg3 from '../assets/images/edcimg3.JPG';
import edcimg4 from '../assets/images/edcimg4.JPG';
import edcimg5 from '../assets/images/edcimg5.JPG';
import edcimg6 from '../assets/images/edcimg6.JPG';
import edcimg7 from '../assets/images/edcimg7.JPG';
import edcimg8 from '../assets/images/edcimg8.JPG';
import edcimg9 from '../assets/images/edcimg9.JPG';

const itemData = [
  { img: edcimg1, title: 'EDC Photo 1', cols: 2, rows: 2 },
  { img: edcimg2, title: 'EDC Photo 2' },
  { img: edcimg3, title: 'EDC Photo 3' },
  { img: edcimg4, title: 'EDC Photo 4' },
  { img: edcimg5, title: 'EDC Photo 5' },
  { img: edcimg6, title: 'EDC Photo 6' },
  { img: edcimg7, title: 'EDC Photo 7' },
  { img: edcimg8, title: 'EDC Photo 8' },
  { img: edcimg9, title: 'EDC Photo 9' },
];


export default function Gallery() {
  return (
    <ImageList sx={{ width: 1000, height: 900 }} cols={3} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

