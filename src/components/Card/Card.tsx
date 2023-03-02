import React from 'react';

import styles from '@components/Card/card.module.scss';

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
    <div className={styles.card} onClick={props.onClick}>
      <img className={styles.card_img} src={props.image} alt="" />
      <div className={styles.card_title}>{props.title}</div>
      <div className={styles.card_subtitle}>{props.subtitle}</div>
      {props.content && (
        <div className={styles.card_content}>{props.content}</div>
      )}
    </div>
  );
};
