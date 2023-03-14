import React from 'react';

import { useReposContext } from '@App/App';
import styles from '@App/pages/Product/product.module.scss';
import { Button } from '@components/Button/Button';
import Icon from '@components/Icon';
import leftArrow from '@components/img/leftArrow.svg';
import rightArrow from '@components/img/righthArrow.svg';
import { observer } from 'mobx-react-lite';
import Carousel from 'react-material-ui-carousel';
import { useParams } from 'react-router-dom';
const Product = () => {
  const { id } = useParams<{ id: string }>();
  const repoContext = useReposContext();
  React.useEffect(() => {
    if (id) {
      repoContext.oneProductStore.getProduct({ userId: { id } }).then();
    }
  }, [repoContext, id]);
  return (
    <div className={styles.product_container}>
      <Carousel
        autoPlay={false}
        indicators={false}
        swipe={true}
        navButtonsAlwaysVisible={true}
        animation={'slide'}
        navButtonsProps={{
          style: {
            background: 'unset',
          },
        }}
        NextIcon={<Icon src={rightArrow} />}
        PrevIcon={<Icon src={leftArrow} />}
        className={styles.product_carousel}
      >
        {repoContext.oneProductStore.product.images.map((img, i) => (
          <img key={i} src={img} alt="" />
        ))}
      </Carousel>

      <div className={styles.product_about}>
        <h2 className={styles.product_title}>
          {repoContext.oneProductStore.product.title}
        </h2>
        <p className={styles.product_subtitle}>
          Ergonomic executive chair upholstered in bonded black leather and PVC
          padded seat and back for all-day comfort and support
        </p>
        <p
          className={styles.product_price}
        >{`$ ${repoContext.oneProductStore.product.price}`}</p>
        <div className={styles.product_buttons}>
          <Button className={styles.product_buttonsGreen}>Buy Now</Button>
          <Button className={styles.product_buttonsWhite}>Add to Cart</Button>
        </div>
      </div>
    </div>
  );
};
export default observer(Product);
