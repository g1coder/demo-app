import {v4 as uuid} from 'uuid';
import {render} from '@testing-library/react';
import {screen} from '@testing-library/dom';
import CountriesPage from 'features/countries/components/CountriesPage/CountriesPage';
import CountriesService from 'features/countries/services/CountriesService';

function createData(name, isoCode, population, size) {
  const density = population / size;
  return {id: uuid(), name, isoCode, population, size, density};
}

describe('CountriesPage', () => {
  beforeEach(() => {
    jest.spyOn(CountriesService, 'getAll').mockImplementation(() => Promise.resolve([
      createData('India', 'IN', 1324171354, 3287263),
      createData('China', 'CN', 1403500365, 9596961),
    ]));
  });

  it('should render countries list', async () => {
    render(<CountriesPage />);

    await screen.findByText('India');
    screen.getByText('China');
  });
});