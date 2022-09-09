import {observable, action, computed, makeAutoObservable, runInAction, configure} from 'mobx';
import IBaseProduct from 'features/catalog/models/IBaseProduct';
import CatalogService from 'features/catalog/services/CatalogService';

configure({enforceActions: 'observed'});

class CartStore {
  @observable availableProducts: IBaseProduct[] = [];
  @observable products: Map<string, number> = new Map([]);

  constructor() {
    makeAutoObservable(this);
    this.fetchAvailableProducts();
  }

  fetchAvailableProducts = () => {
    console.log('fetchAvailableProducts');
    CatalogService.getList({}).then((products) => {
      runInAction(() => {
        this.availableProducts = products;
      });
    });
  };

  @action refreshCart = () => {
    CatalogService.getCart().then((pairs) => {
      runInAction(() => {
        for (const key in pairs) {
          this.products.set(key, pairs[key]);
        }
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

  @computed get totalPrice() {
    let total = 0;
    this.products.forEach((value, key) => {
      const price = this.availableProducts.find((ap) => ap.id === key)?.price;
      if (price) {
        total += value * +price;
      }
    });
    return total;
  }
}

export default new CartStore();
