import INamedEntity from 'shared/core/models/INamedEntity';

interface IUserRaw extends INamedEntity<string> {
  email: string;
  age: number;
  nick_name: string;
}

export default IUserRaw;