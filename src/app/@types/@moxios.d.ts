declare module 'moxios' {
  function install(value?: unknown): void;
  function uninstall(value?: unknown): void;
  function stubRequest(path?: string, value?: unknown): void;
  function wait(...args: unknown[]): void;

  export = {
    install,
    uninstall,
    stubRequest,
    wait,
    requests: any,
  };
}
