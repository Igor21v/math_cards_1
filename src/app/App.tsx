import React, {useEffect, useState} from 'react';
import {Context, Limit, Mode} from '../shared/lib/Context';
import {Navigation} from './Navigation';
import {getStorage} from '../shared/lib/getStorage';

function App(): React.JSX.Element {
  const [limit, setLimit] = useState<Limit>(10);
  const [mode, setMode] = useState<Mode>('+');
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
  useEffect(() => {
    getStorage('limit', initLimit);
    getStorage('mode', initMode);
  }, []);

  return (
    <Context.Provider value={{limit, setLimit, mode, setMode}}>
      <Navigation />
    </Context.Provider>
  );
}

export default App;
