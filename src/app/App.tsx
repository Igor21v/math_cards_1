import React, {useState} from 'react';
import {Context, Limit, Mode} from '../shared/lib/Context';
import {Navigation} from './Navigation';

function App(): React.JSX.Element {
  const [limit, setLimit] = useState<Limit>(10);
  const [mode, setMode] = useState<Mode>('+');

  return (
    <Context.Provider value={{limit, setLimit, mode, setMode}}>
      <Navigation />
    </Context.Provider>
  );
}

export default App;
