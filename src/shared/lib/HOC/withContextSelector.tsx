import {ComponentType, Context, memo, useContext} from 'react';

const withContextSelector = <P extends unknown, C extends object>(
  Component: ComponentType<P & C>,
  componentContext: Context<C>,
  selectors: Record<string, (data: C) => C[keyof C]>
) => {
  const MemoizedComponent = memo(Component) as ComponentType<P & Partial<C>>;

  return (props: P & Partial<C>) => {
    const contextValue = useContext<C>(componentContext);
    const contextProps: C = Object.keys(selectors).reduce((acc, key) => {
      acc[key] = selectors[key](contextValue);
      return acc;
    }, {} as C);

    return <MemoizedComponent {...props} {...contextProps} />;
  };
};

export default withContextSelector;
