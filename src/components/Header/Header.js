import React from 'react';
import './Header.css';

export default function Header({ title }) {
  return (
    <>
      <h6 className='header' data-testid='header-1'>
        {title}
      </h6>
      <h6 className='header' data-testid='header-2'>
        ㅁㄴㅇㄹ
      </h6>
    </>
  );
}
