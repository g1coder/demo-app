import {action, computed, makeAutoObservable, observable, runInAction} from 'mobx';
import CatalogService from 'features/catalog/services/CatalogService';

class CatalogStore {
  @observable private _favorite: Array<string> = [];

  constructor() {
    makeAutoObservable(this);
  }

  @action fetchFavoriteIds() {
    return CatalogService.getFavoriteIds().then((response) => {
      runInAction(() => {
        this._favorite = response;
      });
    });
  }

  @action toggleFavorites(id: string) {
    const mode = this._favorite.includes(id) ? 'remove' : 'add';
    return CatalogService.toggleFavorites(id, mode).then((response) => {
      runInAction(() => {
        this._favorite = response;
      });
    });
  }

  @computed get favoriteIds() {
    return this._favorite;
  }
}

export default new CatalogStore();
