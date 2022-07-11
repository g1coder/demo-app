import moxios from 'moxios';
import {__axios} from 'core/services/ApiService';
import {checkHydrate, checkRequest} from 'test/test-utils';
import UserService from 'core/services/UserService';
import UserTransformer from 'core/transformers/UserTransformer';
import IUserRaw from 'core/models/IUserRaw';

describe('UserService', () => {
  beforeEach(() => {
    moxios.install(__axios);
  });

  afterEach(() => {
    moxios.uninstall(__axios);
  });

  describe('getAll', () => {
    const data = [];

    beforeEach(() => {
      moxios.stubRequest('/api/users/', {
        status: 200,
        responseText: JSON.stringify(data),
      });
    });

    it(
      'should make request',
      checkRequest(() => UserService.getAll({}))
    );
  });

  describe('getOne', () => {
    const user: IUserRaw = {
      id: 'uid1',
      name: 'John Dow',
      age: 50,
      nick_name: 'johny50',
      email: 'jd@gmail.com'
    }

    beforeEach(() => {
      moxios.stubRequest('/api/users/uid1', {
        status: 200,
        responseText: JSON.stringify(user),
      });
    });

    it(
      'should make request',
      checkRequest(() => UserService.getOne(user.id))
    );

    it(
      'should hydrate results',
      checkHydrate(() => UserService.getOne(user.id), UserTransformer, user)
    );
  });
});
