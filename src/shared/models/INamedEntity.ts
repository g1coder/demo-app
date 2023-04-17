interface INamedEntity<T extends number | string = string> {
  id: T;
  name: string;
}

export default INamedEntity;
