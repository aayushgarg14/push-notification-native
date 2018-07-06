import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import OneSignal from "react-native-onesignal"

export default class App extends React.Component {
  componentWillMount() {
    // OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    // OneSignal.addEventListener('ids', this.onIds);
  }

  componentWillUnmount() {
    // OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    // OneSignal.removeEventListener('ids', this.onIds);
  }

  // onReceived(notification) {
  //   console.log("Notification received: ", notification);
  // }

  onOpened(openResult) {
    // console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    // console.log('isActive: ', openResult.notification.isAppInFocus);
    // console.log('openResult: ', openResult);
  }

  // onIds(device) {
  //   console.log('Device info: ', device);
  // }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
