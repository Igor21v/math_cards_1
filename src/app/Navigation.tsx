import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';
import {ComparePage} from '../pages/ComparePage/ComparePage';
import {ExercisePage} from '../pages/ExercisePage';
import {HomePage} from '../pages/HomePage';
import {PairPage} from '../pages/LinePage/PairPage';
import {TestPage} from '../pages/TestPage/TestPage';
import {RootStackParamList} from '../shared/types/route';
import {colors} from '../shared/ui/Colors';
import {HeaderRight} from './HeaderRight/HeaderRight';
import {ResultspPage} from '../pages/ResultspPage';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerRight: () => <HeaderRight />,
          headerTintColor: colors.second,
          headerStyle: styles.stackNav,
          navigationBarHidden: true,
          statusBarStyle: 'inverted',
          statusBarColor: colors.first,
        }}>
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{title: 'Математика 1й класс', headerRight: () => null}}
        />
        <Stack.Screen name="Pair" component={PairPage} options={{title: 'Соедини пару'}} />
        <Stack.Screen name="Exercise" component={ExercisePage} options={{title: 'Примеры'}} />
        <Stack.Screen name="Test" component={TestPage} options={{title: 'Тесты'}} />
        <Stack.Screen name="Compare" component={ComparePage} options={{title: 'Неравенства'}} />
        <Stack.Screen
          name="Results"
          component={ResultspPage}
          options={{title: 'Результаты', headerBackVisible: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  stackNav: {
    backgroundColor: colors.first,
  },
});
