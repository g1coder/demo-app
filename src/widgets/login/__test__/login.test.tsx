import {fireEvent, render} from '@testing-library/react';
import {screen} from '@testing-library/dom';
import Login from '../index';

describe('login', () => {
  let props;
  beforeEach(() => {
    props = {
      onLogin: jest.fn(() => Promise.resolve()),
      onReset: jest.fn(() => Promise.resolve()),
    };
  });

  it('should render according rules', async () => {
    render(<Login {...props} />);
    await screen.findByText('Email address');
    screen.getByText('Password');
  });

  describe('LoginResetPasswordForm', () => {
    it('should show reset password form by click on Forgot your password? and call reset', async () => {
      render(<Login {...props} />);
      await screen.findByText('Email address');
      fireEvent.click(screen.getByText('Forgot your password?'));
      expect(screen.getByText(`We’ll help you reset it and get back on track.`)).toBeInTheDocument();

      fireEvent.change(screen.getByRole('textbox'), {target: {value: 'my@email.com'}});
      fireEvent.click(screen.getByText('Reset password'));
      expect(props.onReset).toHaveBeenCalledWith({
        email: 'my@email.com',
      });
    });

    it('should disable reset button on Forgot password form if user input is not email', async () => {
      render(<Login {...props} />);
      await screen.findByText('Email address');
      fireEvent.click(screen.getByText('Forgot your password?'));

      fireEvent.change(screen.getByRole('textbox'), {target: {value: 'not email text'}});
      expect(screen.getByText('Reset password')).toHaveAttribute('disabled');
    });
  });

  describe('LoginForm', () => {
    it('should disable login button if user input not email string', async () => {
      render(<Login {...props} />);
      await screen.findByText('Email address');

      fireEvent.change(screen.getByPlaceholderText('user@gmail.com'), {target: {value: 'not email text'}});
      fireEvent.change(screen.getByPlaceholderText('123'), {target: {value: 'my-pass'}});

      expect(screen.getByText('Sign in')).toHaveAttribute('disabled');
    });

    it('should call login handler by click on Sign in', async () => {
      render(<Login {...props} />);
      await screen.findByText('Email address');

      fireEvent.change(screen.getByPlaceholderText('user@gmail.com'), {target: {value: 'my@email.com'}});
      fireEvent.change(screen.getByPlaceholderText('123'), {target: {value: 'my-pass'}});

      fireEvent.click(screen.getByText('Sign in'));
      expect(props.onLogin).toHaveBeenCalledWith({
        username: 'my@email.com',
        password: 'my-pass',
      });
    });
  });
});
