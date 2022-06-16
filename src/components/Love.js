import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import Center from './Center';
export default function Love() {
  return (
    <Center>
<ImageList sx={{ width: 800, height: 800 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">Life is so beautiful...</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=500&fit=crop&auto=format`}
            srcSet={`${item.img}?w=500&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.discription}
            
          />
        </ImageListItem>
      ))}
    </ImageList>
 
    </Center>
  ); 
}

const itemData = [
  {
    img: './tee.jpg',
    title: 'Tea Garden',
    discription: 'Travel in Hangzhou',
    
    featured: true,
  },
  {
    img: './image1.jpg',
    title: 'Hukou Waterfall',
    discription: 'Travel in Xian',
  },
  {
    img: './traval.jpg',
    title: 'Niagara Waterfall',
    discription: 'Travel in Ontario',
  },
  {
    img: './bao.jpg',
    title: 'My Dog and Cat',
    discription: 'Waiting for me...',
  },
  {
    img: './fried.jpg',
    title: 'Fried Dumplings',
    discription: 'like a professional chef？',
    
  },
  {
    img: './tom.jpg',
    title: 'Backyard Tomatoes',
    discription: "Great harvest！",
  },
  
  {
    img: './beef.jpg',
    title: 'Bauced Beef',
    discription: 'Delicious!',
  },
  {
    img: './str.jpg',
    title: 'Strawberry',
    discription: 'My strawberries are ripe',
  },
  {
    img: './water.jpg',
    title: 'Watermelon',
    discription: "I didn't expect to grow watermelon",
  },
  {
    img: './dump.jpg',
    title: 'Tranditional Dumpings',
    discription: 'Taught by my mom.Miss her..',
    rows: 2,
    cols: 2,
    featured: true,
  },
  
];