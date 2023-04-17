import INamedEntity from '@shared/models/INamedEntity';

interface IUser extends INamedEntity {
  email: string;
  age: number;
  nickName: string;
}

export default IUser;
