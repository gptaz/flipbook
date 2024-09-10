'use client';
import React, { useEffect, useRef } from 'react';
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
      'https://images.unsplash.com/photo-1725489892948-9ace0d73f9ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8',
    description: 'description for image 3',
  },
];

const Book = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  margin: 'auto',
  width: '50cqmin',
  pointerEvents: 'none',
  transformStyle: 'preserve-3d',
  transition: 'translate 1s',
  translate: 'calc(min(var(--c), 1) * 50%) 0%',
  rotate: '1 0 0 50deg',
  overflow: 'hidden',
}));

const Page = styled(Box)(({ theme }) => ({
  '--thickness': '4',
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

const Flip = () => {
  return;
  <>
    <Book>
      <Page></Page>
    </Book>
  </>;
};

export default Flip;
