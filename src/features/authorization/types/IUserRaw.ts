import INamedEntity from '@shared/types/named-entity';

export interface IUserRaw extends INamedEntity<string> {
  email: string;
  age: number;
  nick_name: string;
}

