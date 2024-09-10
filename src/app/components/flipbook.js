'use client';
import React, { useEffect, useRef } from 'react';
import { Box, Typography, Link } from '@mui/material';
import { styled } from '@mui/system';

const Book = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  margin: 'auto',
  width: '40cqmin',
  pointerEvents: 'none',
  transformStyle: 'preserve-3d',
  transition: 'translate 1s',
  translate: 'calc(min(var(--c), 1) * 50%) 0%',
  rotate: '1 0 0 30deg',
  overflow: 'hidden',
  borderRadius: 'none',
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
    content: 'attr(data-page)',
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

const Cover = styled(PageSide)(({ theme }) => ({
  background: `radial-gradient(circle farthest-corner at 80% 20%, hsl(150 80% 20% / .3) 0%, hsl(170 60% 10% / .1) 100%),
    hsl(231, 32%, 29%) url("https://picsum.photos/id/984/800/900") 50% / cover`,
  color: 'hsl(200 30% 98%)',
  '&::after': {
    content: '""',
  },
}));

const FlipBook = () => {
  const bookRef = useRef(null);

  useEffect(() => {
    const elBook = bookRef.current;
    if (elBook) {
      elBook.style.setProperty('--c', 0);
      const pages = elBook.querySelectorAll('.MuiBox-root');
      pages.forEach((page, idx) => {
        page.style.setProperty('--i', idx);
        page.addEventListener('click', (evt) => {
          if (evt.target.closest('a')) return;
          const curr = evt.target.closest("[data-side='back']") ? idx : idx + 1;
          elBook.style.setProperty('--c', curr);
        });
      });
    }
  }, []);

  return (
    <Book ref={bookRef}>
      <Page>
        <Cover data-side="front">
          <Typography variant="h4">FlipBook</Typography>
          <Typography>
            2024.
            <br />
            Second edition
          </Typography>
        </Cover>
        <PageSide data-side="back" data-page="1">
          <Typography variant="h5">Responsive</Typography>
          <Typography>
            Fully responsive CSS flip book, thanks to the <code>cqmin</code>{' '}
            unit.
          </Typography>
        </PageSide>
      </Page>
      <Page>
        <PageSide data-side="back" data-page="1">
          <Typography variant="h5">Responsive</Typography>
          <Typography>
            Fully responsive CSS flip book, thanks to the <code>cqmin</code>{' '}
            unit.
          </Typography>
        </PageSide>
      </Page>
      <Page>
        <PageSide data-side="back" data-page="1">
          <Typography variant="h5">Responsive</Typography>
          <Typography>
            Fully responsive CSS flip book, thanks to the <code>cqmin</code>{' '}
            unit.
          </Typography>
        </PageSide>
      </Page>
      <Page>
        <PageSide data-side="back" data-page="1">
          <Typography variant="h5">Responsive</Typography>
          <Typography>
            Fully responsive CSS flip book, thanks to the <code>cqmin</code>{' '}
            unit.
          </Typography>
        </PageSide>
      </Page>
      <Page>
        <PageSide data-side="back" data-page="1">
          <Typography variant="h5">Responsive</Typography>
          <Typography>
            Fully responsive CSS flip book, thanks to the <code>cqmin</code>{' '}
            unit.
          </Typography>
        </PageSide>
      </Page>
      {/* Add more pages here */}
    </Book>
  );
};

export default FlipBook;
