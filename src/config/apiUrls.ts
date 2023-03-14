import { GetProductsListParams } from '@store/ProductsListStore/types';

const ProductsApi = (endpoint: string): string =>
  `https://api.escuelajs.co/api/v1/${endpoint}`;

export const apiUrls = {
  listOfProducts: (params: GetProductsListParams): string =>
    ProductsApi(`products?offset=${params.offset}&limit=${params.limit}`),
  oneProduct: (id: string): string => ProductsApi(`products/${id}`),
};

export const routing = {
  urls: {
    productPage: (id: number): string => `/product/${id}`,
  },
};
