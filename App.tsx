/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import Navigation from './src/navigation';
import { store } from './src/store';

function App(): JSX.Element {
  return (
  <Provider store={store}>
    <Navigation/>
  </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: 'center'
  },
});

export default App;
