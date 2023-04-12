import {createContext} from 'react';
import IUser from 'shared/core/models/IUser';

export interface IAppContext {
  user: IUser | undefined;
  login: (params: {email: string; password: string}) => Promise<void | string>;
  signup: (params: {email: string; password: string}, token: string) => Promise<void>;
  logout: () => void;
  reset: () => void;
}

export default createContext<IAppContext>({
  user: undefined,
  login: (params: {email: string; password: string}) => Promise.resolve(),
  signup: (params: {email: string; password: string}, token: string) => Promise.resolve(),
  logout: () => {},
  reset: () => {},
});
