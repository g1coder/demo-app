import {observable, action, computed, makeAutoObservable} from 'mobx';
import IBaseProduct from 'features/catalog/models/IBaseProduct';
import CatalogService from 'features/catalog/services/CatalogService';

class CartStore {
  @observable availableProducts: IBaseProduct[] = [];
  @observable products: Map<string, number> = new Map([]);

  constructor() {
    makeAutoObservable(this);
  }

  @action setAvailableProducts = (products: IBaseProduct[]) => {
    this.availableProducts = products;
  };

  @action refreshCart = () => {
    CatalogService.getCart().then((pairs) => {
      for (const key in pairs) {
        this.products.set(key, pairs[key]);
      }
    });
  };

  @action submitCart = () => {
    CatalogService.submitOrder().then(() => {
      this.products = new Map([]);
    });
  };

  @action increase = (product: IBaseProduct) => {
    CatalogService.updateCart(product.id, 'increment').then(({count}) => {
      this.products.set(product.id, count);
    });
  };

  @action decrease = (product: IBaseProduct) => {
    CatalogService.updateCart(product.id, 'decrement').then(({count}) => {
      this.products.set(product.id, count);
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
