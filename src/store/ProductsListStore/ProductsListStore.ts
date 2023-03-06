import { HTTPMethod } from '@store/ApiStore/types';
import {
  normalizeProductsToCollection,
  ProductsApiModel,
  ProductsModel,
} from '@store/Models/Products';
import {
  GetProductsListParams,
  IProductsStore,
} from '@store/ProductsListStore/types';
import rootStore from '@store/rootStore';
import {
  CollectionT,
  getInitialCollectionModel,
  linearizeCollection,
} from '@utils/collection';
import { Meta } from '@utils/meta';
import { ILocalStore } from '@utils/useLocalStore';
import {
  action,
  computed,
  makeObservable,
  observable,
  runInAction,
} from 'mobx';
type PrivateFields = '_products' | '_meta';
export default class ProductsListStore implements IProductsStore, ILocalStore {
  private apiStore = rootStore.apiStore;
  private _products: CollectionT<number, ProductsModel> =
    getInitialCollectionModel();
  private _meta: Meta = Meta.initial;

  constructor() {
    makeObservable<ProductsListStore, PrivateFields>(this, {
      _products: observable.ref,
      _meta: observable,
      products: computed,
      meta: computed,
      getProductsList: action,
    });
  }

  get products(): ProductsModel[] {
    return linearizeCollection(this._products);
  }

  get meta(): Meta {
    return this._meta;
  }

  async getProductsList(params: GetProductsListParams): Promise<void> {
    this._meta = Meta.loading;
    this._products = getInitialCollectionModel();
    const response = await this.apiStore.request<ProductsApiModel[]>({
      method: HTTPMethod.GET,
      endpoint: 'products',
      headers: { Accept: 'application/json' },
      params: {
        offset: params.offset,
        limit: params.limit,
      },
      data: {},
    });
    runInAction(() => {
      if (!response.success) {
        this._meta = Meta.error;
      }
      try {
        this._meta = Meta.success;
        this._products = normalizeProductsToCollection(response.data ?? []);
        return;
      } catch (e) {
        this._meta = Meta.error;
        this._products = getInitialCollectionModel();
      }
    });
  }
  destroy(): void {
    this._products = getInitialCollectionModel();
    this._meta = Meta.initial;
  }
}
