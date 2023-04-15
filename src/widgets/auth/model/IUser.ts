import INamedEntity from '@shared/model/INamedEntity';

interface IUser extends INamedEntity {
  email: string;
  age: number;
  nickName: string;
}

export default IUser;
