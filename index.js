/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Flurry from 'react-native-flurry-sdk';

// Init Flurry once as early as possible recommended in index.js.
new Flurry.Builder()
    .withLogEnabled(true)
    .withLogLevel(Flurry.LogLevel.VERBOSE)
    .withMessaging(true)
    .build('2C75ZBJDTGZSMNKXDQGB', 'HSV8YVH9VW3CH8KXRK7T');

// Flurry Config listener
Flurry.addConfigListener((event) => {
  if (event.Type === Flurry.ConfigStatus.SUCCESS) {
    // Data fetched, activate it.
    Flurry.activateConfig();
  } else if (event.Type === Flurry.ConfigStatus.ACTIVATED) {
    // Received cached data, or newly activated data.
    Flurry.getConfigString('welcome_message', 'Welcome!').then((value) => {
      console.log((event.isCache ?
              'Received cached data: ' : 'Received newly activated data: ') +
              value.welcome_message);
    });
  } else if (event.Type === Flurry.ConfigStatus.UNCHANGED) {
    // Fetch finished, but data unchanged.
    Flurry.getConfigString('welcome_message', 'Welcome!').then((value) => {
      console.log('Received unchanged data: ' + value.welcome_message);
    });
  } else if (event.Type === Flurry.ConfigStatus.ERROR) {
    // Fetch failed.
    console.log('Fetch error! Retrying: ' + event.isRetrying);
  }
});
 
Flurry.fetchConfig();

// Flurry Push messaging listener
Flurry.addMessagingListener((message) => {
  if (message.Type === Flurry.MessageType.RECEIVED) {
    Flurry.willHandleMessage(false);
    // Add your actions here.
  } else if (message.Type === Flurry.MessageType.CLICKED) {
    Flurry.willHandleMessage(false);
    // Add your actions here.
  }
  Flurry.printMessage(message);
});

AppRegistry.registerComponent(appName, () => App);
