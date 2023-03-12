import React from 'react';

import styles from '@components/Button/button.module.scss';
import { Loader } from '@components/Loader/Loader';
import loaderStyles from '@components/Loader/loader.module.scss';
import classNames from 'classnames';

export type ButtonProps = React.PropsWithChildren<{
  loading?: boolean;
}> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({ loading, ...props }) => {
  let res = classNames(
    styles.button,
    { [styles.button_disabled]: props.disabled || loading },
    props.className
  );

  return (
    <button type={'button'} disabled={loading} {...props} className={res}>
      {loading && <Loader className={loaderStyles.buttonLoader} />}
      {props.children}
    </button>
  );
};
