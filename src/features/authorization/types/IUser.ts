import {INamedEntity} from '@shared/types';

export interface IUser extends INamedEntity {
  email: string;
  age: number;
  nickName: string;
}
