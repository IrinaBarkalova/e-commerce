export type GetProductsListParams = {
  limit: number;
  offset: number;
};

export interface IProductsStore {
  getProductsList(params: GetProductsListParams): Promise<void>;
}
