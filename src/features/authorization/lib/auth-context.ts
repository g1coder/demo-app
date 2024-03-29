import {createContext} from 'react';
import {IUser} from '../types';

export interface IAuthContext {
  user: IUser | undefined;
  logout: () => void;
}

export const AuthContext = createContext<IAuthContext>({
  user: undefined,
  logout: () => {
    throw Error('Define logout method!');
  },
});
