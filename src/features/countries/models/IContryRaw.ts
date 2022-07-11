import INamedEntity from 'core/models/INamedEntity';

interface ICountryRaw extends INamedEntity{
  iso_code: string;
  population: number;
  size: number;
  density: number;
}

export default ICountryRaw;