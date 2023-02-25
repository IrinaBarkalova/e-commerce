import React from 'react';

import { Loader } from '@components/Loader/Loader';
import classNames from 'classnames';
import '@components/Button/button.scss';
import '@components/Loader/loader.scss';

export type ButtonProps = React.PropsWithChildren<{
  /**
   * Если true, то внутри кнопки вместе с children отображается компонент Loader
   * Также кнопка должна переходить в состояние disabled
   */
  loading?: boolean;
}> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({ loading, ...props }) => {
  let res = classNames(
    'button',
    { button_disabled: props.disabled || loading },
    props.className
  );

  return (
    <button type={'button'} disabled={loading} {...props} className={res}>
      {loading && <Loader className={' button-loader'} />}
      {props.children}
    </button>
  );
};
