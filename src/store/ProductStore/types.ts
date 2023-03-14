export type GetProductParams = {
  userId: { id: string };
};

export interface IProductStore {
  getProduct(params: GetProductParams): Promise<void>;
}
