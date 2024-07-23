import React, {useEffect, useRef, useState} from 'react';
import {Context, Limit, Mode} from '../shared/lib/Context';
import {Navigation} from './Navigation';
import {getStorage} from '../shared/lib/getStorage';
import {setStorage} from '@src/shared/lib/setStorage';
import {RootStackParamList} from '@src/shared/types/route';

function App(): React.JSX.Element {
  const [limit, setLimit] = useState<Limit>(10);
  const [mode, setMode] = useState<Mode>('+');
  const [labels, setLabels] = useState<Partial<Record<keyof RootStackParamList, boolean>>>({});
  const labelTimerIsRun = useRef(false);
  const initLimit = (value: Limit) => {
    if (value) {
      setLimit(value);
    }
  };
  const initMode = (mode: Mode) => {
    if (mode) {
      setMode(mode);
    }
  };

  const resetLabels = () => {
    setLabels({});
    labelTimerIsRun.current = false;
    console.log('RESET');
    console.log(labels);
  };
  const setLabel = (label: keyof RootStackParamList) => {
    setLabels(labels => ({...labels, [label]: true}));
    setStorage(`label${label}`, `${Date.now()}`);
    const endOfToday = new Date();
    endOfToday.setHours(16, 49, 59, 999);
    const restTime = endOfToday.getTime() - Date.now();
    console.log('rest ' + restTime / 1000);
    if (!labelTimerIsRun.current) {
      setTimeout(resetLabels, restTime);
      labelTimerIsRun.current = true;
    }
  };
  const initLabel = (label: keyof RootStackParamList) => (storTime: number) => {
    if (Number.isInteger(+storTime)) {
      const startOfToday = new Date();
      startOfToday.setHours(0, 0, 0, 0);
      if (storTime > startOfToday.getTime()) {
        setLabel(label);
      }
    }
  };

  useEffect(() => {
    getStorage('limit', initLimit);
    getStorage('mode', initMode);
    getStorage(`labelExercise`, initLabel('Exercise'));
    getStorage(`labelTest`, initLabel('Test'));
    getStorage(`labelPair`, initLabel('Pair'));
  }, []);

  return (
    <Context.Provider
      value={{
        limit,
        setLimit,
        mode,
        setMode,
        labels,
        setLabel,
      }}>
      <Navigation />
    </Context.Provider>
  );
}

export default App;
