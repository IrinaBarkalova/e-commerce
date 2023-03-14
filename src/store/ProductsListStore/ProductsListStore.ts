import { apiUrls } from '@config/apiUrls';
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
import axios from 'axios';
import {
  action,
  computed,
  makeObservable,
  observable,
  runInAction,
} from 'mobx';

type PrivateFields = '_products' | '_meta' | '_total';

export default class ProductsListStore implements IProductsStore, ILocalStore {
  private apiStore = rootStore.apiStore;
  private _products: CollectionT<number, ProductsModel> =
    getInitialCollectionModel();
  private _meta: Meta = Meta.initial;
  private _total: number = 0;

  constructor() {
    makeObservable<ProductsListStore, PrivateFields>(this, {
      _products: observable.ref,
      _meta: observable,
      _total: observable,
      products: computed,
      meta: computed,
      total: computed,
      getProductsList: action,
      getTotal: action,
    });
  }

  get products(): ProductsModel[] {
    return linearizeCollection(this._products);
  }

  get meta(): Meta {
    return this._meta;
  }
  get total(): number {
    return this._total;
  }
  async getTotal(): Promise<void> {
    const response = await this.apiStore.request<ProductsApiModel[]>({
      method: HTTPMethod.GET,
      endpoint: 'products',
      headers: { Accept: 'application/json' },
      data: {},
    });
    runInAction(() => {
      if (!response.success) {
        this._meta = Meta.error;
      }
      try {
        this._meta = Meta.success;
        this._total = response.data.length ?? 0;
        return;
      } catch (e) {
        this._meta = Meta.error;
      }
    });
  }
  async getProductsList(params: GetProductsListParams): Promise<void> {
    this._meta = Meta.loading;
    this._products = getInitialCollectionModel();
    const response = await axios(apiUrls.listOfProducts(params));

    runInAction(() => {
      if (response.status === 404) {
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
    this._total = 0;
  }
}
