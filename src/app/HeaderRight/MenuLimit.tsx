import {useContext, useState} from 'react';
import {StyleSheet} from 'react-native';
import {Context, Limit} from '../../shared/lib/Context';
import {AppButton} from '../../shared/ui/AppButton';
import {AppMenu, ItemMenu} from '../../shared/ui/AppMenu';

export const MenuLimit = () => {
  const {limit, setLimit} = useContext(Context);
  const [showML, setShowML] = useState(false);
  const pressHendler = (lim: Limit) => {
    return () => {
      setLimit(lim);
      setShowML(false);
    };
  };
  const items: ItemMenu[] = [
    {el: <>10</>, fn: pressHendler(10)},
    {el: <>20</>, fn: pressHendler(20)},
  ];

  return (
    <>
      <AppButton onPress={() => setShowML(true)}>{limit}</AppButton>
      <AppMenu
        show={showML}
        setShow={setShowML}
        styleWrap={styles.modalStyle}
        title="Максимальное число в примерах"
        items={items}
      />
    </>
  );
};

const styles = StyleSheet.create({
  modalStyle: {
    maxWidth: 200,
    right: 60,
    top: 50,
  },
});
