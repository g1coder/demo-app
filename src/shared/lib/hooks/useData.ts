import {useCallback, useReducer, Reducer, useEffect} from 'react';

const LOAD = 'useData/LOAD';
const LOAD_COMPLETE = 'useData/LOAD_COMPLETE';
const ERROR = 'useData/ERROR';
const INIT = 'useData/INIT';
const RESET = 'useData/RESET';

const cancelMarker = Symbol('promise.cancel');

type Action<T> =
  | {type: typeof LOAD}
  | {type: typeof LOAD_COMPLETE; payload: IState<T>['data']}
  | {type: typeof ERROR; payload: IState<T>['error']}
  | {type: typeof INIT; payload: IState<T>['data']}
  | {type: typeof RESET};

const reducer = <T>(state: IState<T>, action: Action<T>) => {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true,
      };

    case LOAD_COMPLETE:
      return {
        ...state,
        loading: false,
        ready: true,
        error: null,
        data: action.payload,
      };

    case ERROR:
      return {
        ...state,
        loading: false,
        ready: true,
        error: action.payload,
        data: state.initialData,
      };

    case INIT:
      return {
        ...state,
        loading: false,
        ready: true,
        data: action.payload,
        error: null,
      };

    case RESET:
      return {
        ...state,
        loading: false,
        ready: false,
        data: state.initialData,
        error: null,
      };

    default:
      return state;
  }
};

export interface IUseDataConfig<T = unknown | null> {
  data: T;
  fetch: (...args: unknown[]) => Promise<T>;
}

export interface IState<T> {
  data: T;
  initialData: T;
  loading: boolean;
  ready: boolean;
  error: unknown | null;
}

export interface ICancelablePromise<T = unknown> {
  promise: Promise<T>;
  cancel: () => void;
}

export interface IActions<T> {
  fetch: () => ICancelablePromise<T>;
  reset: () => void;
  init: (data: T) => void;
}

const makeCancelable = <T = unknown>(promise: Promise<T>): ICancelablePromise<T> => {
  let hasCanceled = false;

  const wrappedPromise = new Promise<T>((resolve, reject) => {
    promise
      .then((val) => (hasCanceled ? reject(cancelMarker) : resolve(val)))
      .catch((error) => (hasCanceled ? reject(cancelMarker) : reject(error)));
  });

  return {
    promise: wrappedPromise,
    cancel() {
      hasCanceled = true;
    },
  };
};

function useData<T>(config: IUseDataConfig<T>, dependencies: unknown[] = []): [IState<T>, IActions<T>] {
  const initialState: IState<T> = {
    data: config.data,
    initialData: config.data,
    loading: false,
    ready: false,
    error: null,
  };
  const [state, dispatch] = useReducer<Reducer<IState<T>, Action<T>>>(reducer, initialState);

  const fetch = useCallback(() => {
    dispatch({type: LOAD});
    const cancelable = makeCancelable(config.fetch());
    cancelable.promise
      .then((data) => dispatch({type: LOAD_COMPLETE, payload: data}))
      .catch((err) => {
        dispatch({type: ERROR, payload: err});
      });

    return cancelable;
  }, dependencies);

  const reset = useCallback(() => {
    dispatch({type: RESET});
  }, []);

  const init = useCallback((data) => {
    dispatch({type: INIT, payload: data});
  }, []);

  useEffect(() => {
    const cancelableFetch = fetch();
    return cancelableFetch.cancel;
  }, dependencies);

  return [state, {fetch, reset, init}];
}

export default useData;
