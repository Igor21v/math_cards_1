/**
 * @format
 */

import {AppRegistry, NativeModules} from 'react-native';
import App from './src/app/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
const fn = async () => {
  console.log('ЗАРАБОТАЛО!!!');
  setTimeout(() => NativeModules.BackgroundTask.startService(), 50000);
};
AppRegistry.registerHeadlessTask('BackgroundTask', () => fn);
