import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../shared/types/route';
import {MenuLimit} from './MenuLimit';
import {MenuMode} from './MenuMode';
import {StyleSheet} from 'react-native';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const HeaderRight = () => {
  return (
    <>
      <MenuMode />
      <MenuLimit />
    </>
  );
};

const styles = StyleSheet.create({
  mode: {
    marginRight: 8,
  },
});