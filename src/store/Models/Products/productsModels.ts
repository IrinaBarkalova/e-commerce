import { CollectionT } from '@utils/collection';

export type ProductCategoryModel = {
  id: number;
  name: string;
  image: string;
};
export type ProductCategoryApiModel = {
  id: number;
  name: string;
  image: string;
};
const getInitialProductsCategoryModel = () => ({
  id: -1,
  name: '',
  image: '',
});
export const normalizeProductsCategoryModel = (
  raw: ProductCategoryApiModel
): ProductCategoryModel => ({
  id: raw.id,
  name: raw.name,
  image: raw.image,
});

export type ProductsModel = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: ProductCategoryModel;
  images: string[];
};
export const getInitialProductModel = () => ({
  id: -1,
  title: '',
  price: -1,
  description: '',
  category: getInitialProductsCategoryModel(),
  images: [''],
});
export type ProductsApiModel = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: ProductCategoryModel;
  images: string[];
};

export const normalizeProductsModel = (
  raw: ProductsApiModel
): ProductsModel => ({
  id: raw.id,
  title: raw.title,
  price: raw.price,
  description: raw.description,
  images: [...raw.images],
  category: normalizeProductsCategoryModel(raw.category),
});
export const normalizeProductsToCollection = (
  rawList: ProductsApiModel[]
): CollectionT<number, ProductsModel> => {
  return {
    order: rawList?.map((item) => item.id),
    entities: rawList?.reduce(
      (acc, item) => ({
        ...acc,
        [item.id]: normalizeProductsModel(item),
      }),
      {}
    ),
  };
};
