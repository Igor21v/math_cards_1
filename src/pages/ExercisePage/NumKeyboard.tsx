import React, {Dispatch, SetStateAction} from 'react';
import {View, StyleSheet} from 'react-native';
import {AppButton} from '../../shared/ui/AppButton';
import {Backspace} from '../../shared/icons/Backspace';
import {Enter} from '../../shared/icons/Enter';

interface KeyboardProps {
  setNum: Dispatch<SetStateAction<string>>;
  enter: () => void;
  setError: Dispatch<SetStateAction<boolean>>;
}

export const NumKeyboard = (props: KeyboardProps) => {
  const {setNum, enter, setError} = props;
  const addDigit = (num: string) => {
    return () => {
      setNum(currNum => {
        setError(false);
        if (currNum === '?') return num;
        if (currNum.length < 3) return currNum + num;
        return currNum;
      });
    };
  };
  const delDegit = () => {
    setError(false);
    setNum(currNum => {
      return currNum.slice(0, -1);
    });
  };

  return (
    <View style={styles.keyboard}>
      <View style={styles.row}>
        <AppButton style={styles.button} size="xl" onPress={addDigit('1')}>
          1
        </AppButton>
        <AppButton style={styles.button} size="xl" onPress={addDigit('2')}>
          2
        </AppButton>
        <AppButton style={styles.button} size="xl" onPress={addDigit('3')}>
          3
        </AppButton>
      </View>
      <View style={styles.row}>
        <AppButton style={styles.button} size="xl" onPress={addDigit('4')}>
          4{' '}
        </AppButton>
        <AppButton style={styles.button} size="xl" onPress={addDigit('5')}>
          5
        </AppButton>
        <AppButton style={styles.button} size="xl" onPress={addDigit('6')}>
          6
        </AppButton>
      </View>
      <View style={styles.row}>
        <AppButton style={styles.button} size="xl" onPress={addDigit('7')}>
          7
        </AppButton>
        <AppButton style={styles.button} size="xl" onPress={addDigit('8')}>
          8
        </AppButton>
        <AppButton style={styles.button} size="xl" onPress={addDigit('9')}>
          9
        </AppButton>
      </View>
      <View style={styles.row}>
        <AppButton style={styles.button} size="xl" onPress={delDegit}>
          <Backspace />
        </AppButton>
        <AppButton style={styles.button} size="xl" onPress={addDigit('0')}>
          0
        </AppButton>
        <AppButton style={styles.button} size="xl" onPress={enter}>
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
