import {createContext} from 'react';

export type Limit = 10 | 20;

export interface ContextProps {
  limit: Limit;
  setLimit: (limit: Limit) => void;
}

export const Context = createContext<ContextProps>({limit: 10, setLimit: () => {}});
