import React from 'react';
import {View, Text, Alert, StyleSheet, Image, Button, TouchableOpacity} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../shared/types/route';
import {AppButton} from '../../shared/ui/AppButton';

type Props = NativeStackScreenProps<RootStackParamList, 'Exercise'>;

export const NumKeyboard = () => {
  return (
    <View style={styles.keyboard}>
      <View style={styles.row}>
        <AppButton style={styles.button}> 1</AppButton>
        <AppButton style={styles.button}>2</AppButton>
        <AppButton style={styles.button}>3</AppButton>
      </View>
      <View style={styles.row}>
        <AppButton style={styles.button}>4</AppButton>
        <AppButton style={styles.button}>5</AppButton>
        <AppButton style={styles.button}>6</AppButton>
      </View>
      <View style={styles.row}>
        <AppButton style={styles.button}>7</AppButton>
        <AppButton style={styles.button}>8</AppButton>
        <AppButton style={styles.button}>9</AppButton>
      </View>
      <View style={styles.row}>
        <AppButton style={styles.button}>{String.fromCharCode(13)}</AppButton>
        <AppButton style={styles.button}>0</AppButton>
        <AppButton style={styles.button}></AppButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  keyboard: {
    width: '100%',
    alignItems: 'center',
    gap: 5,
    padding: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    gap: 5,
    height: 80,
  },
  button: {
    flex: 1,
  },
});
