declare module 'moxios' {
  function install(value?: any): void;
  function uninstall(value?: any): void;
  function stubRequest(path?: string, value?: any): void;
  function wait(...args: any[]): void;

  export = {
    install,
    uninstall,
    stubRequest,
    wait,
    requests: any,
    // moxiosWait: () => new Promise((r) => moxios.wait(r))
  };
}
