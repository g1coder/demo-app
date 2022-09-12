import {observable, action, computed, makeAutoObservable, runInAction, configure} from 'mobx';
import IBaseProduct from 'features/catalog/models/IBaseProduct';
import CatalogService from 'features/catalog/services/CatalogService';

configure({enforceActions: 'observed'});

class CartStore {
  @observable products: Map<string, number> = new Map([]);
  @observable totalPrice: number = 0;
  @observable totalCount: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  @action refreshCart = () => {
    CatalogService.getCart().then(({products, totalCount, totalPrice}) => {
      runInAction(() => {
        for (const key in products) {
          this.products.set(key, products[key]);
        }
        this.totalCount = totalCount;
        this.totalPrice = totalPrice;
      });
    });
  };

  @action submitCart = () => {
    CatalogService.submitOrder().then(() => {
      runInAction(() => {
        this.products = new Map([]);
      });
    });
  };

  @action increase = (product: IBaseProduct) => {
    return CatalogService.updateCart(product.id, 'increment').then(({count}) => {
      runInAction(() => {
        this.products.set(product.id, count);
      });
    });
  };

  @action decrease = (product: IBaseProduct) => {
    return CatalogService.updateCart(product.id, 'decrement').then(({count}) => {
      runInAction(() => {
        this.products.set(product.id, count);
      });
    });
  };

  @computed get count() {
    let num = 0;
    this.products.forEach((value) => (num += value));
    return num;
  }
}

export default new CartStore();
