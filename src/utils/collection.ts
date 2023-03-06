import { ProductsModel } from '@store/Models/Products/productsModels';

export type CollectionT<Uid extends number | string, T> = {
  order: Uid[];
  entities: Record<Uid, T>;
};

export const normalizeProductsCollection = <
  Uid extends string | number,
  T extends ProductsModel
>(
  collection: CollectionT<Uid, T>
): T[] => collection.order.map((uid) => collection.entities[uid]);

export const getInitialCollectionModel = (): CollectionT<any, any> => ({
  order: [],
  entities: {},
});

export const linearizeCollection = <Uid extends string | number, T>(
  elements: CollectionT<Uid, T>
): T[] => elements.order?.map((el) => elements.entities[el]);
