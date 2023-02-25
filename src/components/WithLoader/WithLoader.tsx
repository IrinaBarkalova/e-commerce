import React from 'react';

import { Loader } from '@components/Loader/Loader';

export type WithLoaderProps = React.PropsWithChildren<{
  loading: boolean;
}>;

export const WithLoader: React.FC<WithLoaderProps> = (props) => {
  return (
    <>
      {props.loading && <Loader />}
      <div>{props.children}</div>
    </>
  );
};
