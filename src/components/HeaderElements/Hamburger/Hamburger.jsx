import React from 'react';
import styles from './styles.module.scss';

function HamburgerIcon({ height = '40', width = '40', type, className }) {
  switch (type) {
    case 'hamburger':
      return (
        <svg
          className={className}
          viewBox='0 0 448 512'
          fill='#010101'
          width={width}
          height={height}
        >
          <path d='M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z' />
        </svg>
      );
    case 'close':
      return (
        <svg
          className={className}
          cache-id='43de6ef1331e475a99a7f1f596e132f0'
          id='eVwp1qSKDt71'
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          shapeRendering='geometricPrecision'
          textRendering='geometricPrecision'
          fill='#010101'
          width={width}
          height={height}
        >
          <path
            d='M2,36.5068L37,1.99979'
            fill='none'
            stroke='#1b5722'
            strokeWidth='4'
          />
          <path
            d='M2,36.5068L37,1.99979'
            fill='none'
            stroke='#1b5722'
            strokeWidth='4'
          />
          <path
            d='M2,36.5068L37,1.99979'
            transform='matrix(-1 0 0 1 39 0)'
            fill='none'
            stroke='#1b5722'
            strokeWidth='4'
          />
        </svg>
      );
    default:
      return (
        <svg
          className={className}
          viewBox='0 0 448 512'
          fill='#010101'
          width={width}
          height={height}
        >
          <path d='M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z' />
        </svg>
      );
  }
}

export function Hamburger({ hamburgerMenuToogle, hamburgerToggler }) {
  return (
    <button className={styles.button} onClick={hamburgerToggler}>
      {!hamburgerMenuToogle ? (
        <HamburgerIcon type='hamburger' className={styles.icon} />
      ) : (
        <HamburgerIcon type='close' className={styles.icon} />
      )}
    </button>
  );
}
