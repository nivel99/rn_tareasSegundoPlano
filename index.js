/**
 * @format
 */
// Import the library
import ReactNativeForegroundService from "@supersami/rn-foreground-service";
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// Register the service
ReactNativeForegroundService.register();

AppRegistry.registerComponent(appName, () => App);

var contador = 0;
ReactNativeForegroundService.add_task(() => {
    contador +=1;
    console.log("I am Being Tested" + contador )
}, {
    delay: 100,
    onLoop: true,
    taskId: "taskid",
    onError: (e) => console.log(`Error logging:`, e),
  });

  ReactNativeForegroundService.start({
    id: 144,
    title: "Foreground Service",
    message: "you are online!",
  });

//https://www.npmjs.com/package/@supersami/rn-foreground-service