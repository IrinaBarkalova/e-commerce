import React from 'react';

import styles from '@components/Header/Header.module.scss';
import Icon from '@components/Icon';
import bag from '@components/img/bag.svg';
import label from '@components/img/label.svg';
import user from '@components/img/user.svg';
import { Link } from 'react-router-dom';

const DesktopHeader = () => (
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

export default DesktopHeader;
