import {createContext} from 'react';

export type Limit = 5 | 10 | 20;
export type Mode = '+' | '-' | '+ -';

export interface ContextProps {
  limit: Limit;
  setLimit: (limit: Limit) => void;
  mode: Mode;
  setMode: (mode: Mode) => void;
}

export const Context = createContext<ContextProps>({
  limit: 10,
  setLimit: () => {},
  mode: '+',
  setMode: () => {},
});
