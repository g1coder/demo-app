export interface INamedEntity<T extends number | string = string> {
  id: T;
  name: string;
}
