import INamedEntity from '../models/INamedEntity';

export default {
  joinNames,
};

function joinNames<T extends string | number>(namedArray: INamedEntity<T>[]) {
  return (namedArray || []).map((e) => e.name).join(', ');
}
