import React, {createContext, useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {Navigation} from './Navigation';
import {Context, ContextProps, Limit} from '../shared/lib/Context';

function App(): React.JSX.Element {
  const [limit, setLimit] = useState<Limit>(10);
  return (
    <Context.Provider value={{limit, setLimit}}>
      <Navigation />
    </Context.Provider>
  );
}

export default App;
