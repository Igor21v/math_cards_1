/**
 * @format
 */

import {AppRegistry, NativeModules} from 'react-native';
import App from './src/app/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
const fnHeadlessJS = async () => {
  console.log('Background task is run');
};
AppRegistry.registerHeadlessTask('BackgroundTask', () => fnHeadlessJS);
