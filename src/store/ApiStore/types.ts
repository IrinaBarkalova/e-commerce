import { ProductsModel } from '@store/Models/Products/productsModels';
import { CollectionT } from '@utils/collection';

export enum HTTPMethod {
  GET = 'GET',
  POST = 'POST',
}

export type RequestParams<ReqT> = {
  method: HTTPMethod;
  endpoint: string;
  headers: Record<string, string>;
  params?: Record<string, number>;
  data: ReqT;
};

export type ApiResponse<SuccessT = any, ErrorT = any> =
  | {
      success: true;
      data: SuccessT;
    }
  | {
      success: false;
      data: ErrorT;
    };

export interface IApiStore {
  readonly baseUrl: string;

  request<SuccessT, ErrorT = any, ReqT = {}>(
    params: RequestParams<ReqT>
  ): Promise<ApiResponse<CollectionT<number, ProductsModel>>>;
}
