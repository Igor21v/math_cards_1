import React from 'react';
import {StyleSheet, View} from 'react-native';

interface Props {
  ansArr: boolean[];
}

export const ProgressBar = (props: Props) => {
  const {ansArr} = props;

  return <View style={styles.bar}></View>;
};

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
