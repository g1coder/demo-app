import {useCallback} from 'react';
import {render, fireEvent} from '@testing-library/react';
import {screen} from '@testing-library/dom';
import useFetch from '../useFetch';

const users = {
  1: {id: 1, name: 'User 1'},
  2: {id: 2, name: 'User 2'},
};

interface IProps {
  userId: number;
}

const TestCase = (props: IProps) => {
  const [user, actions] = useFetch<any>(
    {
      fetch: () => (users[props.userId] ? Promise.resolve(users[props.userId]) : Promise.reject('Not Found')),
      data: null,
    },
    [props.userId]
  );

  const init = useCallback(() => actions.init({id: 3, name: 'User 3'}), [actions]);
  const reset = useCallback(() => actions.reset(), [actions]);
  const refetch = useCallback(() => actions.fetch(), [actions]);

  if (user.loading) {
    return 'Loading...';
  }
  if (user.error) {
    return user.error;
  }
  if (user.ready) {
    return (
      <div>
        <div data-qa="data">
          {user.data.id}|{user.data.name}
        </div>
        <button type="button" data-qa="init" onClick={init}>
          Init
        </button>
        <button type="button" data-qa="reset" onClick={reset}>
          Reset
        </button>
        <button type="button" data-qa="refetch" onClick={refetch}>
          Refetch
        </button>
      </div>
    );
  }
  return null;
};

describe('useFetch', () => {
  it('should fetch data on mount', async () => {
    render(<TestCase userId={1} />);
    // eslint-disable-next-line testing-library/no-debugging-utils
    await screen.findByText('Loading...');
    const data = await screen.findByText(`1|${users[1].name}`);
    expect(data).toBeInTheDocument();
  });

  it('should refetch data on dependencies update', async () => {
    const {rerender} = render(<TestCase userId={1} />);
    await screen.findByText(`1|${users[1].name}`);
    rerender(<TestCase userId={2} />);
    await screen.findByText('Loading...');
    await screen.findByText(`2|${users[2].name}`);
  });

  it('should NOT refetch data on didUpdate if dependencies are untouched', async () => {
    const {rerender} = render(<TestCase userId={1} />);
    await screen.findByText(`1|${users[1].name}`);
    rerender(<TestCase userId={1} />);
    await screen.findByText(`1|${users[1].name}`);
  });

  it('should set error on error', async () => {
    render(<TestCase userId={5} />);
    await screen.findByText('Not Found');
  });

  it('should reset to initial state on reset', async () => {
    const {container} = render(<TestCase userId={1} />);
    await screen.findByText(`1|${users[1].name}`);
    fireEvent.click(screen.getByText('Reset'));
    expect(container.innerHTML).toEqual('');
  });

  it('should update state on init', async () => {
    render(<TestCase userId={1} />);
    await screen.findByText(`1|${users[1].name}`);
    fireEvent.click(screen.getByText('Init'));
    await screen.findByText('3|User 3');
  });
});
