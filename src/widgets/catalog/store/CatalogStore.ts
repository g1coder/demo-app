import {action, computed, makeAutoObservable, observable, runInAction} from 'mobx';
import {getFavoriteIds, toggleFavorites} from "../api/CatalogService";

class CatalogStore {
  @observable private _favorite: Array<string> = [];

  constructor() {
    makeAutoObservable(this);
  }

  @action fetchFavoriteIds() {
    return getFavoriteIds().then((response) => {
      runInAction(() => {
        this._favorite = response;
      });
    });
  }

  @action toggleFavorites(id: string) {
    const mode = this._favorite.includes(id) ? 'remove' : 'add';
    return toggleFavorites(id, mode).then((response) => {
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
