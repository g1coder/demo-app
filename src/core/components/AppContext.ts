import {createContext} from 'use-context-selector';

export interface IAppContext {
  user: {name: string} | undefined;
  logout: () => void;
}

export default createContext<IAppContext>({user: undefined, logout: () => {}});
