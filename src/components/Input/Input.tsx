import React from 'react';

import classNames from 'classnames';
import '@styles/Input/input.scss';

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
    'input',
    { input_disabled: props.disabled },
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
