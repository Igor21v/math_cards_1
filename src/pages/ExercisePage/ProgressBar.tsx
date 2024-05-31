import React from 'react';
import {StyleSheet, View} from 'react-native';

export const ProgressBar = (responses: boolean[]) => {
  return <View style={styles.bar}></View>;
};

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
