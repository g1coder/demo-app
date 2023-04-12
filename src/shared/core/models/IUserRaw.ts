import INamedEntity from 'shared/model/INamedEntity';

interface IUserRaw extends INamedEntity<string> {
  email: string;
  age: number;
  nick_name: string;
}

export default IUserRaw;