import React from 'react';
import '@components/CheckBox/checkbox.scss';

export type CheckBoxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange'
> & {
  /** Вызывается при клике на чекбокс */
  onChange: (value: boolean) => void;
};

export const CheckBox: React.FC<CheckBoxProps> = ({ onChange, ...props }) => {
  return (
    <label className="checkbox">
      <input
        {...props}
        type={'checkbox'}
        onChange={(event) => onChange(event.target.checked)}
        className="checkbox-item"
      />
      <span className="checkmark"></span>
    </label>
  );
};
