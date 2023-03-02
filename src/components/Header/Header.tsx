import { memo } from 'react';
import React from 'react';

import DesktopHeader from '@components/Header/Components/DesktopHeader';
import MobileHeader from '@components/Header/Components/MobileHeader';

const Header: React.FC = () => {
  return (
    <>
      <DesktopHeader />
      <MobileHeader />
    </>
  );
};

export default memo(Header);
