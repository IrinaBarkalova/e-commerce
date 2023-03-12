import React from 'react';

import { Button } from '@components/Button/Button';
import Icon from '@components/Icon';
import search from '@components/img/search-normal.svg';
import styles from '@components/Input/input.module.scss';
import classNames from 'classnames';

export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'value'
> & {
  value: string;
  icon?: string;
  buttonText?: string;
  onChange: (value: string) => void;
};

export const Input: React.FC<InputProps> = ({
  value,
  onChange,
  buttonText,
  ...props
}) => {
  let res = classNames(
    styles.input,
    { [styles.input_disabled]: props.disabled },
    props.className
  );

  return (
    <div className={styles.input_block}>
      <Icon className={styles.input_icon} src={search} />
      <input
        {...props}
        type={'text'}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={res}
      />
      <Button>{buttonText}</Button>
    </div>
  );
};
