import {render} from '@testing-library/react';
import {screen} from '@testing-library/dom';
import LandingPage from 'app/components/LandingPage/LandingPage';

describe('LoginPage', () => {
  it('should render all sections', async () => {
    render(<LandingPage />);
    await screen.findByText('Mineral Water');
    screen.getByText('About Aquaterias');
    screen.getByText('Delivery Service');
    screen.getByText('Mineral composition');
    screen.getByText('What our clients say');
    screen.getByText('Recent posts');
    screen.getByText(
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Vivamus tristique ligula quis orci malesuada tincidunt.'
    );
    screen.getByText(' All Rights Reserved');
  });
});
