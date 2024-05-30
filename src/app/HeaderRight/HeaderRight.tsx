import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../shared/types/route';
import {MenuLimit} from './MenuLimit';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const HeaderRight = () => {
  return (
    <>
      <MenuLimit />
    </>
  );
};
