import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../shared/types/route';
import {AppButton} from '../shared/ui/AppButton';
import {useContext} from 'react';
import {Context} from '../shared/lib/Context';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const HeaderRight = () => {
  const {limit, setLimit} = useContext(Context);
  return (
    <>
      <AppButton onPress={() => setLimit(20)}>{limit}</AppButton>
    </>
  );
};
