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
        <AppButton title="1" style={styles.button} />
        <AppButton title="2" style={styles.button} />
        <AppButton title="3" style={styles.button} />
      </View>
      <View style={styles.row}>
        <AppButton title="4" style={styles.button} />
        <AppButton title="5" style={styles.button} />
        <AppButton title="6" style={styles.button} />
      </View>
      <View style={styles.row}>
        <AppButton title="7" style={styles.button} />
        <AppButton title="8" style={styles.button} />
        <AppButton title="9" style={styles.button} />
      </View>
      <View style={styles.row}>
        <AppButton title="<" style={styles.button} />
        <AppButton title="0" style={styles.button} />
        <AppButton title="J" style={styles.button} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  keyboard: {
    width: '100%',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  button: {
    flex: 1,
  },
});
