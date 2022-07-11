import ICountryRaw from 'features/countries/models/IContryRaw';
import ICountry from 'features/countries/models/ICountry';

function hydrate(data: ICountryRaw): ICountry {
  return {
    id: data.id,
    name: data.name,
    isoCode: data.iso_code,
    density: data.density,
    population: data.population,
    size: data.size
  }
}

export default {
  hydrate
}