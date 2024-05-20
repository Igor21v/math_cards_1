import React from 'react';
import {View, StyleSheet} from 'react-native';
import {AppButton} from '../../shared/ui/AppButton';
import {Backspace} from '../../shared/icons/Backspace';
import {Enter} from '../../shared/icons/Enter';

export const NumKeyboard = (props: {fn: (num: number) => void}) => {
  return (
    <View style={styles.keyboard}>
      <View style={styles.row}>
        <AppButton
          style={styles.button}
          onPress={() => {
            props.fn(1);
          }}>
          {' '}
          1
        </AppButton>
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
        <AppButton style={styles.button}>
          <Backspace />
        </AppButton>
        <AppButton style={styles.button}>0</AppButton>
        <AppButton style={styles.button}>
          <Enter />
        </AppButton>
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
