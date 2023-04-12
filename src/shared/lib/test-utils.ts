import moxios from 'moxios';

type ServiceAction = () => Promise<unknown>;

export const checkRequest = (action: ServiceAction, checkMethod?: string) => {
  return (done) => {
    const onFulfilled = jest.fn();

    action().then(onFulfilled).catch(done);

    // eslint-disable-next-line testing-library/await-async-utils
    moxios.wait(() => {
      expect(onFulfilled).toHaveBeenCalled();
      if (checkMethod) {
        expect(checkMethod).toEqual(moxios.requests.mostRecent().config.method);
      }
      done();
    }, 0);
  };
};

export const checkTransformerMethod = (method: string) => {
  return (action: ServiceAction, transformer: any, ...expectedArguments) => {
    return (done) => {
      const spy = jest.spyOn(transformer, method).mockImplementation(() => true);

      action().catch(done);

      moxios.wait(() => {
        expect(transformer[method]).toHaveBeenCalledWith(...expectedArguments);
        spy.mockRestore();
        done();
      }, 0);
    };
  };
};

export const checkHydrate = checkTransformerMethod('hydrate');


