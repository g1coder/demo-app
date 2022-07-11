import {fireEvent, render} from '@testing-library/react';
import {screen} from '@testing-library/dom';
import LoginPage from "../LoginPage";

describe('LoginPage', () => {
  let props;
  beforeEach(() => {
    props = {
      onLogin: jest.fn(() => Promise.resolve()),
      onReset: jest.fn(() => Promise.resolve())
    }
  });

  it('should render according rules', async () => {
    render(<LoginPage {...props} />);
    await screen.findByText('Email address');
    screen.getByText('Password');
  });

  it('should show reset password form by click on Forgot your password?', async () => {
    render(<LoginPage {...props} />);
    await screen.findByText('Email address');
    fireEvent.click(screen.getByText('Forgot your password?'));
    expect(screen.getByText(`We’ll help you reset it and get back on track.`)).toBeInTheDocument();
  });

  it('should call login handler by click on Sign in', async () => {
    render(<LoginPage {...props} />);
    await screen.findByText('Email address');

    fireEvent.change(screen.getByPlaceholderText('user@gmail.com'), {target: {value: 'my@email.com'}})
    fireEvent.change(screen.getByPlaceholderText('123'), {target: {value: 'my-pass'}})

    fireEvent.click(screen.getByText('Sign in'));
    expect(props.onLogin).toHaveBeenCalledWith({
      username: 'my@email.com',
      password: 'my-pass'
    });
  });
});