import React from 'react';

import styles from '@components/Input/input.module.scss';
import classNames from 'classnames';

export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'value'
> & {
  /** Значение поля */
  value: string;
  /** Callback, вызываемый при вводе данных в поле */
  onChange: (value: string) => void;
};

export const Input: React.FC<InputProps> = ({ value, onChange, ...props }) => {
  let res = classNames(
    styles.input,
    { [styles.input_disabled]: props.disabled },
    props.className
  );

  return (
    <input
      {...props}
      type={'text'}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className={res}
    />
  );
};
