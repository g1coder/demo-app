import INamedEntity from 'core/models/INamedEntity';

export default {
  joinNames,
  nameOf,
};

function joinNames<T extends string | number>(namedArray: INamedEntity<T>[]) {
  return (namedArray || []).map((e) => e.name).join(', ');
}

function nameOf<T>(name: keyof T) {
  return name;
}
