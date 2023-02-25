import React from 'react';
import '@styles/Loader/loader.scss';

export enum LoaderSize {
  s = 's',
  m = 'm',
  l = 'l',
}

export type LoaderProps = {
  loading?: boolean;
  size?: LoaderSize;
  className?: string;
};
export const Loader: React.FC<LoaderProps> = (props) => {
  let className: string;

  className = props.size ? `${props.size}` : 'm';
  className += props.className ? ` ${props.className}` : '';

  return (
    <>
      {(props.loading || props.loading === undefined) && (
        <div className={`loading-spinner ${className}`} />
      )}
    </>
  );
};
