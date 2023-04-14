import {fireEvent, render} from '@testing-library/react';
import {screen} from '@testing-library/dom';
import IBaseProduct from '@entities/catalog/model/IBaseProduct';
import Cart from '../ui/cart';
import * as CartService from '../api/CartService';

const mockProduct = {
  id: 'uid1',
  image: 'img',
  price: 6.99,
  name: 'bottle lemon water',
  description: 'Duis et aliquam orci. Vivamus augue quam augue quam augue quam',
};

describe('CartPage', () => {
  let cartDetails: Array<{product: IBaseProduct; count: number}> = [];

  beforeEach(() => {
    jest.spyOn(CartService, 'getCartDetails').mockImplementation(() => Promise.resolve(cartDetails));
  });

  it('should show message if there is no items', async () => {
    render(<Cart />);
    await screen.findByText('No products in cart');
  });

  it('should show item in cart', async () => {
    const submitOrderMock = jest.spyOn(CartService, 'submitOrder');

    cartDetails = [{product: mockProduct, count: 3}];
    render(<Cart />);
    await screen.findByText(mockProduct.name);
    screen.getByText('Product');
    screen.getByText('Price');
    screen.getByText('Count');
    screen.getByText('Total');
    screen.getByText('$6.99');
    screen.getByText('3');
    screen.getByText('$20.97');
    screen.getByText('Summary');

    fireEvent.click(screen.getByText('Checkout'));
    expect(submitOrderMock).toHaveBeenCalled();
  });
});
