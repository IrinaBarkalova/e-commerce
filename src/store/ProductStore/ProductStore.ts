import { apiUrls } from '@config/apiUrls';
import {
  getInitialProductModel,
  normalizeProductsModel,
  ProductsModel,
} from '@store/Models/Products';
import { GetProductParams, IProductStore } from '@store/ProductStore/types';
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

type PrivateFields = '_product' | '_meta';
export default class ProductStore implements IProductStore, ILocalStore {
  private _meta: Meta = Meta.initial;
  private _product: ProductsModel = getInitialProductModel();
  constructor() {
    makeObservable<ProductStore, PrivateFields>(this, {
      _product: observable.ref,
      _meta: observable,
      product: computed,
      meta: computed,
      getProduct: action,
    });
  }
  get product(): ProductsModel {
    return this._product;
  }

  get meta(): Meta {
    return this._meta;
  }
  async getProduct(params: GetProductParams): Promise<void> {
    this._meta = Meta.loading;
    this._product = getInitialProductModel();
    const response = await axios(apiUrls.oneProduct(params.userId.id));
    runInAction(() => {
      if (response.status === 404) {
        this._meta = Meta.error;
      }
      try {
        this._meta = Meta.success;
        this._product = normalizeProductsModel(response.data);
        return;
      } catch (e) {
        this._meta = Meta.error;
        this._product = getInitialProductModel();
      }
    });
  }
  destroy(): void {
    this._product = getInitialProductModel();
    this._meta = Meta.initial;
  }
}
