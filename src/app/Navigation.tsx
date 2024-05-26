import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {HomePage} from '../pages/HomePage/HomePage';
import {TestPage} from '../pages/TestPage/TestPage';
import {RootStackParamList} from '../shared/types/route';
import {ExercisePage} from '../pages/ExercisePage/ExercisePage';
import {LinePage} from '../pages/LinePage/LinePage';
import {ComparePage} from '../pages/ComparePage/ComparePage';
import {StyleSheet} from 'react-native';
import {colors} from '../shared/ui/Colors';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator /* screenOptions={{contentStyle: styles.stackNav}} */>
        <Stack.Screen name="Home" component={HomePage} options={{title: 'Математика 1й класс'}} />
        <Stack.Screen name="Line" component={LinePage} options={{title: 'Соедини линию'}} />
        <Stack.Screen name="Exercise" component={ExercisePage} options={{title: 'Примеры'}} />
        <Stack.Screen name="Test" component={TestPage} options={{title: 'Тесты'}} />
        <Stack.Screen name="Compare" component={ComparePage} options={{title: 'Неравенства'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

/* const styles = StyleSheet.create({
  stackNav: {
    backgroundColor: colors.second,
  },
}); */
