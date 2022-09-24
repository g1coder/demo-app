import {observable, action, computed, makeAutoObservable, runInAction, configure} from 'mobx';
import IBaseProduct from 'features/catalog/models/IBaseProduct';
import CartService from 'features/catalog/services/CartService';

configure({enforceActions: 'observed'});

export class CartStore {
  @observable products: Map<string, number> = new Map([]);
  @observable totalPrice: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  @action refreshCart = () => {
    CartService.getCart().then(({products, totalPrice}) => {
      runInAction(() => {
        for (const key in products) {
          this.products.set(key, products[key]);
        }
        this.totalPrice = totalPrice;
      });
    });
  };

  @action submitCart = () => {
    CartService.submitOrder().then(() => {
      runInAction(() => {
        this.products = new Map([]);
        this.totalPrice = 0;
      });
    });
  };

  @action increase = (product: IBaseProduct) => {
    return CartService.updateCart(product.id, 'increment').then(({count, total_price}) => {
      runInAction(() => {
        this.products.set(product.id, count);
        this.totalPrice = total_price;
      });
    });
  };

  @action decrease = (product: IBaseProduct) => {
    return CartService.updateCart(product.id, 'decrement').then(({count, total_price}) => {
      runInAction(() => {
        this.products.set(product.id, count);
        this.totalPrice = total_price;
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
