'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, Link } from '@mui/material';
import { styled } from '@mui/system';

const Pages = [
  {
    image:
      'https://plus.unsplash.com/premium_photo-1671822689857-9141c5de8813?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8l1',
    description: 'description for image',
  },
  {
    image:
      'https://images.unsplash.com/photo-1725610147248-4f20f7b13999?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8',
    description: 'description for image2',
  },
  {
    image:
      'https://images.unsplash.com/photo-1725489892948-9ace0d73f9ad?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'description for image 3',
  },
  {
    image:
      'https://images.unsplash.com/photo-1535905496755-26ae35d0ae54?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fHw%3D',
    description: 'description for image 4',
  },
  {
    image:
      'https://images.unsplash.com/photo-1467709757686-06cbdd818d90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjB8fHxlbnwwfHx8fHw%3D',
    description: 'description for image 5',
  },
];

const Book = styled(Box)(({ theme }) => ({
  '--c': curr,
  position: 'relative',
  display: 'flex',
  margin: 'auto',
  border: '1px',
  width: '40cqmin',
  pointerEvents: 'none',
  transformStyle: 'preserve-3d',
  transition: 'translate 1s',
  translate: 'calc(min(var(--c), 1) * 50%) 0%',
  rotate: '1 0 0 50deg',
  overflow: 'hidden',
}));

const Page = styled(Box)(({ theme }) => ({
  '--thickness': '4',
  '--c': curr,
  '--i': 0,
  borderRadius: 'none',
  flex: 'none',
  display: 'flex',
  width: '100%',
  fontSize: '2cqmin',
  pointerEvents: 'all',
  userSelect: 'none',
  transformStyle: 'preserve-3d',
  transformOrigin: 'left center',
  transition:
    'transform 1s, rotate 1s ease-in calc((min(var(--i), var(--c)) - max(var(--i), var(--c))) * 50ms)',
  translate: 'calc(var(--i) * -100%) 0px 0px',
  transform:
    'translateZ(calc((var(--c) - var(--i) - 0.5) * calc(var(--thickness) * .23cqmin)))',
  rotate: '0 1 0 calc(clamp(0, var(--c) - var(--i), 1) * -180deg)',
  boxShadow: '0em .5em 1em -.2em #00000020',
}));

const PageSide = styled(Box)(({ theme, side }) => ({
  position: 'relative',
  flex: 'none',
  width: '100%',
  backfaceVisibility: 'hidden',
  overflow: 'hidden',
  backgroundColor: '#fff',
  translate: side === 'back' ? '-100% 0' : '0px',
  rotate: side === 'back' ? '0 1 0 180deg' : '0',
  display: 'flex',
  flexFlow: 'column wrap',
  justifyContent: 'space-between',
  padding: '2em',
  border: '1px solid #0002',
  '&::after': {
    position: 'absolute',
    bottom: '1em',
    // content: 'attr(data-page)',
    fontSize: '0.8em',
    right: side === 'front' ? '1em' : 'auto',
    left: side === 'back' ? '1em' : 'auto',
  },
  background:
    side === 'front'
      ? 'linear-gradient(to left, #f7f7f7 80%, #eee 100%)'
      : 'linear-gradient(to right, #f7f7f7 80%, #eee 100%)',
  borderRadius:
    side === 'front' ? '.1em .5em .5em .1em' : '.5em .1em .1em .5em',
}));

const Flip = () => {
  const bookRef = useRef(null);
  const [curr,setCurr] = useState(0);
  useEffect
  return;
  <>
    <Book ref={bookRef}>
      <Page></Page>
    </Book>
  </>;
};

export default Flip;
