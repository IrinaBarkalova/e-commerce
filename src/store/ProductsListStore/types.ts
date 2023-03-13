export type GetProductsListParams = {
  productId?: number; // TODO надо ли мне это тут
  limit: number;
  offset: number;
};

export interface IProductsStore {
  getProductsList(params: GetProductsListParams): Promise<void>;
}
