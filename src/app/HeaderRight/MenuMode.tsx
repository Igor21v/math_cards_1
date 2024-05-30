import {useContext, useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {AppMenu} from '../../shared/ui/AppMenu';
import {AppButton} from '../../shared/ui/AppButton';
import {Context, Limit} from '../../shared/lib/Context';
import {AppText} from '../../shared/ui/AppText';
import {colors} from '../../shared/ui/Colors';
import {Mode} from '../../pages/ExercisePage/taskFn';

export const MenuMode = () => {
  /* const {limit, setLimit} = useContext(Context); */
  const [showMM, setShowMM] = useState(false);
  const pressHendler = (mode: Mode) => {
    return () => {
      /* setLimit(lim); */
      setShowMM(false);
    };
  };
  return (
    <>
      <AppButton onPress={() => setShowMM(true)} style={styles.button}>
        +
      </AppButton>
      <AppMenu show={showMM} setShow={setShowMM} styleWrap={styles.modalStyle}>
        <AppText size="s" style={styles.title}>
          Режим
        </AppText>
        <AppText style={styles.item} onPress={pressHendler('all')}>
          +-
        </AppText>
        <AppText style={styles.item} onPress={pressHendler('add')}>
          +
        </AppText>
        <AppText style={styles.item} onPress={pressHendler('add')}>
          -
        </AppText>
      </AppMenu>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    marginRight: 8,
  },
  title: {
    paddingHorizontal: 30,
    paddingTop: 10,
  },
  item: {
    color: colors.first,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  modalStyle: {
    right: 100,
    top: 50,
  },
});
