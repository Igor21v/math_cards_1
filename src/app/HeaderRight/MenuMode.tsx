import {useContext, useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {AppMenu, ItemMenu} from '../../shared/ui/AppMenu';
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
  const items: ItemMenu[] = [
    {
      el: <>+ -</>,
      fn: pressHendler('all'),
    },
    {
      el: <>+</>,
      fn: pressHendler('add'),
    },
    {
      el: <>-</>,
      fn: pressHendler('subtract'),
    },
  ];

  return (
    <>
      <AppButton onPress={() => setShowMM(true)} style={styles.button}>
        +
      </AppButton>
      <AppMenu
        show={showMM}
        setShow={setShowMM}
        styleWrap={styles.modalStyle}
        items={items}
        title="Режим"
      />
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    marginRight: 8,
  },
  modalStyle: {
    right: 100,
    top: 50,
  },
});
