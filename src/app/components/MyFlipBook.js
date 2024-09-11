'use client';
import { Box, ImageListItem, ImageListItemBar } from '@mui/material';
import React, { useState } from 'react';

const Pages = [
  {
    image:
      'https://plus.unsplash.com/premium_photo-1671822689857-9141c5de8813?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8l1',
    description: 'description for image 0',
  },
  {
    image:
      'https://images.unsplash.com/photo-1725610147248-4f20f7b13999?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8',
    description: 'description for image 1',
  },
  {
    image:
      'https://images.unsplash.com/photo-1725489892948-9ace0d73f9ad?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'description for image 2',
  },
  {
    image:
      'https://images.unsplash.com/photo-1535905496755-26ae35d0ae54?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fHw%3D',
    description: 'description for image 3',
  },
  {
    image:
      'https://images.unsplash.com/photo-1467709757686-06cbdd818d90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjB8fHxlbnwwfHx8fHw%3D',
    description: 'description for image 4',
  },
  {
    image:
      'https://plus.unsplash.com/premium_photo-1682587554012-dd36e97bd76e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8',
    description: 'description for image 5',
  },
];

export const MyFlipBook = () => {
  const [curr, setCurr] = useState(0);
  const thickness = 4;
  const handlePageClick = (idx) => {
    const current = idx % 2 ? idx : idx + 1;
    setCurr(current);
    console.log('id : ', idx);
    console.log('current : ', current);
  };
  return (
    //Book staring here
    <Box
      sx={{
        // overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        margin: 'auto',
        width: '40cqmin',
        pointerEvents: 'none',
        transformStyle: 'preserve-3d',
        transition: 'translate 1s',
        translate: `calc(min(${curr}, 1) * 50%) 0%`,
        rotate: '1 0 0 30deg',
      }}
    >
      {Pages.map((val, idx) => (
        //each page of the book
        <Box
          onClick={() => handlePageClick(idx)}
          key={idx}
          sx={{
            boxShadow: '0em .5em 1em -.2em #00000020',
            position: 'relative',
            backfaceVisibility: 'hidden',
            overflow: 'hidden',
            backgroundColor: '#fff',
            flex: 'none',
            display: 'flex',
            width: '100%',
            fontSize: '2cqmin',
            pointerEvents: 'all',
            userSelect: 'none',
            transformStyle: 'preserve-3d',
            transformOrigin: 'left center',
            transition: `
            transform 1s,
            rotate 1s ease-in calc((min(${idx}, ${curr}) - max(${idx}, ${curr})) * 50ms)
          `,
            translate: `calc(${idx} * -100%) 0px 0px`,
            transform: `translateZ(calc((${curr} - ${idx} - 0.5) * calc(${thickness} * 0.23cqmin)))`,
            rotate: `0 1 0 calc(clamp(0, ${curr} - ${idx}, 1) * -180deg)`,
            // rotate: idx % 2 !== 0 ? '0 1 0 180deg': '',
            // translate: idx % 2 !== 0 ? '-100% 0' : '',
          }}
        >
          <ImageListItem key={idx}>
            <img srcSet={`${val.image}`} src={`${val.image}`} loading="lazy" />
            <ImageListItemBar title={val.description} />
          </ImageListItem>
        </Box>
      ))}
    </Box>
  );
};
