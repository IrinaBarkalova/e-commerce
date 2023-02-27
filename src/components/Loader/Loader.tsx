import React from 'react';

import styles from '@components/Loader/loader.module.scss';
import classNames from 'classnames';

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
  let res = classNames(
    styles.loadingSpinner,
    { [styles.m]: !props.size || props.size === 'm' },
    { [styles.s]: props.size === 's' },
    { [styles.l]: props.size === 'l' },
    props.className
  );
  return (
    <>
      {(props.loading || props.loading === undefined) && (
        <div className={res} />
      )}
    </>
  );
};
