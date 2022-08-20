import {observable, action, computed, makeAutoObservable} from 'mobx';
import IBaseProduct from 'features/shop/models/IBaseProduct';

class CartStore {
  constructor() {
    makeAutoObservable(this);
  }

  @observable products: IBaseProduct[] = [];

  @action decrease = (product: IBaseProduct) => {
    const indexForDelete = this.products.findIndex((p) => p.id === product.id);
    if (indexForDelete > -1) {
      this.products.splice(indexForDelete, 1);
    }
  };

  @action increase = (product: IBaseProduct) => {
    this.products.push(product);
  };

  @computed get count() {
    return this.products.length;
  }
}

export default new CartStore();
