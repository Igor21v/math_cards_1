import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {Navigation} from './Navigation';

function App(): React.JSX.Element {
  return (
    <>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <Navigation />
    </>
  );
}

export default App;
