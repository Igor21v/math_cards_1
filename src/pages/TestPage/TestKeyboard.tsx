import React, {Dispatch, SetStateAction} from 'react';
import {View, StyleSheet} from 'react-native';
import {AppButton} from '../../shared/ui/AppButton';
import {Backspace} from '../../shared/icons/Backspace';
import {Enter} from '../../shared/icons/Enter';

interface Props {
  check: (ans: number) => void;
  variants: number[];
}

export const TestKeyboard = (props: Props) => {
  const {check, variants} = props;
  const genCheck = (ans: number) => () => {
    check(ans);
  };

  return (
    <View style={styles.keyboard}>
      <View style={styles.row}>
        <AppButton style={styles.button} size="xl" onPress={genCheck(variants[0])}>
          {variants[0]}
        </AppButton>
        <AppButton style={styles.button} size="xl" onPress={genCheck(variants[1])}>
          {variants[1]}
        </AppButton>
      </View>
      <View style={styles.row}>
        <AppButton style={styles.button} size="xl" onPress={genCheck(variants[2])}>
          {variants[2]}
        </AppButton>
        <AppButton style={styles.button} size="xl" onPress={genCheck(variants[3])}>
          {variants[3]}
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
    height: 100,
  },
  button: {
    flex: 1,
  },
});
