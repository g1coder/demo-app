import {observable, action, makeAutoObservable} from 'mobx';

class CartStore {
  constructor() {
    makeAutoObservable(this);
  }

  @observable count = 0;

  @action decrease = () => {
    this.count = this.count - 1;
  };

  @action increase = () => {
    this.count = this.count + 1;
  };
}

export default new CartStore();
