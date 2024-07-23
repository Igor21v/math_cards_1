import {createContext} from 'react';
import {RootStackParamList} from '../types/route';

export type Limit = 5 | 10 | 20;
export type Mode = '+' | '-' | '+ -';

export interface ContextProps {
  limit: Limit;
  setLimit: (limit: Limit) => void;
  mode: Mode;
  setMode: (mode: Mode) => void;
  labels: Partial<Record<keyof RootStackParamList, boolean>>;
  setLabel: (label: keyof RootStackParamList, time?: number) => void;
}

export const Context = createContext<ContextProps>({
  limit: 10,
  setLimit: () => {},
  mode: '+',
  setMode: () => {},
  labels: {},
  setLabel: () => {},
});
