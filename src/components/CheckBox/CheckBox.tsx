import React from 'react';

import styles from '@components/CheckBox/checkbox.module.scss';

export type CheckBoxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange'
> & {
  /** Вызывается при клике на чекбокс */
  onChange: (value: boolean) => void;
};

export const CheckBox: React.FC<CheckBoxProps> = ({ onChange, ...props }) => {
  return (
    <label className={styles.checkbox}>
      <input
        {...props}
        type={'checkbox'}
        onChange={(event) => onChange(event.target.checked)}
      />
      <span className={styles.checkmark}></span>
    </label>
  );
};
