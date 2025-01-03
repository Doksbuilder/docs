import React from 'react';
import clsx from 'clsx';

const Grid = ({ columns, children, className }) => (
  <div className={clsx(`grid grid--${columns}`, className)}>
    {children}
  </div>
);

export default Grid;