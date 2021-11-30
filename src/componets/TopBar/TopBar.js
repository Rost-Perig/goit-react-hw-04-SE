import React from 'react';
import s from './TopBar.module.css';

const TopBar = ({ children }) => {
  return (
      <div className={s.topBar}>
            {children}
         </div>
  );
};

export default TopBar;