import { createContext, useContext } from "react";

export const ComponentsStateContext = createContext(undefined);

export function useComponentsStateContext() {
  const components = useContext(ComponentsStateContext);
  
  if (components === undefined) {
    throw new Error('useComponentsStateContext must be used with ComponentsStateContext')
  }

  return components;
}

export const ChildContext = createContext(undefined);

export function useChildElementContext() {
  const child = useContext(ChildContext);
  
  if (child === undefined) {
    throw new Error('useChildContext must be used with ChildContext')
  }

  return child;
}
