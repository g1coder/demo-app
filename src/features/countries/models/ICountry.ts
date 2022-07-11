import INamedEntity from 'core/models/INamedEntity';

interface ICountry extends INamedEntity{
  isoCode: string;
  population: number;
  size: number;
  density: number;
}

export default ICountry;
