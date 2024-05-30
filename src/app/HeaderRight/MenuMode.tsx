import {useContext, useState} from 'react';
import {StyleSheet} from 'react-native';

import {AppButton} from '../../shared/ui/AppButton';
import {AppMenu, ItemMenu} from '../../shared/ui/AppMenu';
import {Context, Mode} from '../../shared/lib/Context';

export const MenuMode = () => {
  const {mode, setMode} = useContext(Context);
  const [showMM, setShowMM] = useState(false);
  const pressHendler = (mode: Mode) => {
    return () => {
      setMode(mode);
      setShowMM(false);
    };
  };

  const itemsList: Mode[] = ['+ -', '+', '-'];
  const items: ItemMenu[] = itemsList.map(item => ({el: <>{item}</>, fn: pressHendler(item)}));

  return (
    <>
      <AppButton onPress={() => setShowMM(true)} style={styles.button}>
        {mode}
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
