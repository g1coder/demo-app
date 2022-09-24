import {makeAutoObservable} from 'mobx';

class CatalogStore {
  constructor() {
    makeAutoObservable(this);
  }
}

export default new CatalogStore();
