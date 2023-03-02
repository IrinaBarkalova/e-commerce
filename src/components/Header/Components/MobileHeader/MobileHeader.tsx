import React from 'react';

import styles from '@components/Header/Header.module.scss';
import Icon from '@components/Icon';
import label from '@components/img/label.svg';
import menu from '@components/img/menu.svg';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import { Link } from 'react-router-dom';

const items: MenuProps['items'] = [
  {
    label: <Link to="/">Products</Link>,
    key: '0',
  },
  {
    label: <Link to="/product/1">Categories</Link>,
    key: '1',
  },
  {
    label: <Link to="/">About Us</Link>,
    key: '3',
  },
];

const MobileHeader: React.FC = () => (
  <div className={styles.mobile__menu}>
    <div className={styles.header__icon}>
      <Icon src={label} />
    </div>
    <Dropdown menu={{ items }} trigger={['click']}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          <Icon src={menu} />
        </Space>
      </a>
    </Dropdown>
  </div>
);

export default MobileHeader;
