/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {App} from './src/App';
import {name as appName} from './app.json';
// import {LogBox} from 'react-native';

// LogBox.ignoreLogs(['Warning: ...']);
// LogBox.ignoreAllLogs();

console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => App);
