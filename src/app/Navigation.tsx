import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from '../pages/Home/Home';
import {FullPostScreen} from '../pages/FullPost/FullPostScreen';
import {RootStackParamList} from '../shared/types/route';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Новости'}}
        />
        <Stack.Screen
          name="FullPost"
          component={FullPostScreen}
          options={{title: 'Статья'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
