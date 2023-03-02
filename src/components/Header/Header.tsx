import { memo } from 'react';
import React from 'react';

import Icon from '@components/Header/Components/Label';
import bag from '@components/img/bag.svg';
import label from '@components/img/label.svg';
import user from '@components/img/user.svg';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__icon}>
        <Icon src={label} />
      </div>
      <div className={styles.header__items}>
        <li className={styles.header__item}>
          <Link className={styles.header__link} to="/">
            Products
          </Link>
        </li>
        <li className={styles.header__item}>
          <Link className={styles.header__link} to="/product/1">
            Categories
          </Link>
        </li>
        <li className={styles.header__item}>
          <Link className={styles.header__link} to="/">
            About Us
          </Link>
        </li>
      </div>
      <div className={styles.header__icon}>
        <Icon style={{ marginRight: '22px' }} src={bag} />
        <Icon src={user} />
      </div>
    </div>
  );
};

export default memo(Header);
