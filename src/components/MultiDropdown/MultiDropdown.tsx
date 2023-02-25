import React, { useState } from 'react';
import '@styles/MultiDropdown/multiDropdown.scss';

export type Option = {
  /** Ключ варианта, используется для отправки на бек/использования в коде */
  key: string;
  /** Значение варианта, отображается пользователю */
  value: string;
};

/** Пропсы, которые принимает компонент Dropdown */
export type MultiDropdownProps = {
  /** Массив возможных вариантов для выбора */
  options: Option[];
  /** Текущие выбранные значения поля, может быть пустым */
  value: Option[];
  /** Callback, вызываемый при выборе варианта */
  onChange: (value: Option[]) => void;
  /** Заблокирован ли дропдаун */
  disabled?: boolean;
  /** Преобразовать выбранные значения в строку. Отображается в дропдауне в качестве выбранного значения */
  pluralizeOptions: (value: Option[]) => string;
};

export const MultiDropdown: React.FC<MultiDropdownProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const [clicked, setClicked] = useState<Option[]>([...props.value]);

  if (props.value.toString() !== clicked.toString()) {
    setClicked([...props.value]);
  }
  const optionIsClicked = (option: Option) =>
    clicked.find((item) => item.key === option.key);

  return (
    <div className={'multi-dropdown'}>
      <button
        className={'multi-dropdown__res'}
        disabled={props.disabled}
        onClick={() => setIsOpen(!isOpen)}
      >
        {props.pluralizeOptions(clicked)}
      </button>
      {!props.disabled && isOpen && (
        <div className={'multi-dropdown__box'}>
          {props.options.map((option) => {
            return (
              <li key={option.key} className={'multi-dropdown__item'}>
                {(optionIsClicked(option) && (
                  <button
                    onClick={() => {
                      const newClicked = clicked.filter(
                        (item) => item.key !== option.key
                      );

                      setClicked(newClicked);
                      props.onChange(newClicked);
                    }}
                    className="multi-dropdown__clicked"
                  >
                    {option.value}
                  </button>
                )) || (
                  <button
                    onClick={() => {
                      const newClicked = [...clicked, option];
                      setClicked(newClicked);
                      props.onChange([option]);
                    }}
                    className="multi-dropdown__notClicked"
                  >
                    {option.value}
                  </button>
                )}
              </li>
            );
          })}
        </div>
      )}
    </div>
  );
};
