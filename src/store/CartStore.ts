import {observable, action, computed, makeAutoObservable} from 'mobx';
import IBaseProduct from 'features/catalog/models/IBaseProduct';

class CartStore {
  constructor() {
    makeAutoObservable(this);
  }

  @observable availableProducts: IBaseProduct[] = [];
  @observable products: Map<string, number> = new Map([]);

  @action setAvailableProducts = (products: IBaseProduct[]) => {
    this.availableProducts = products;
  };

  @action decrease = (product: IBaseProduct) => {
    const count = this.products.get(product.id);
    if (count) {
      this.products.set(product.id, count - 1);
    }
  };

  @action increase = (product: IBaseProduct) => {
    const count = this.products.get(product.id);
    this.products.set(product.id, (count || 0) + 1);
  };

  @computed get count() {
    let num = 0;
    this.products.forEach((value) => {
      num += value;
    });
    return num;
  }

  @computed get totalPrice() {
    let total = 0;
    this.products.forEach((value, key) => {
      const price = this.availableProducts.find(ap => ap.id === key)?.price;
      if (price) {
        total += value * +price;
      }
    });
    return total;
  }
}

export default new CartStore();
