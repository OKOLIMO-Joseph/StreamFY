import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import { Checkbox } from '@mui/material';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function TitlebarImageList() {
  return (
    <ImageList sx={{ width: 375, height: 280}}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">February</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite color='white'/>} />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://images.pexels.com/photos/14668063/pexels-photo-14668063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.pexels.com/photos/4890733/pexels-photo-4890733.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.pexels.com/photos/3303918/pexels-photo-3303918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Coffee',
    author: '@nolanissac',
    cols: 2,
  },
  {
    img: 'https://images.pexels.com/photos/3685406/pexels-photo-3685406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Hats',
    author: '@hjrc33',
    cols: 2,
  },
  {
    img: 'https://images.pexels.com/photos/9509661/pexels-photo-9509661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.pexels.com/photos/4063607/pexels-photo-4063607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.pexels.com/photos/6567714/pexels-photo-6567714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.pexels.com/photos/8463413/pexels-photo-8463413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Mushrooms',
    author: '@silverdalex',
    rows: 2,
    cols: 2,
  },
];