import React from 'react';
import '@components/Card/card.scss';

export type CardProps = {
  /** URL изображения */
  image: string;
  /** Заголовок карточки */
  title: React.ReactNode;
  /** Подзаголовок карточки */
  subtitle: React.ReactNode;
  /** Содержимое карточки (футер/боковая часть), может быть пустым */
  content?: React.ReactNode;
  /** Клик на карточку */
  onClick?: React.MouseEventHandler;
};

export const Card: React.FC<CardProps> = (props) => {
  return (
    <div className={'card'} onClick={props.onClick}>
      <img className={'card_img'} src={props.image} alt="" />
      <div className={'card_title'}>{props.title}</div>
      <div className={'card_subtitle'}>{props.subtitle}</div>
      {props.content && <div className={'card_content'}>{props.content}</div>}
    </div>
  );
};
