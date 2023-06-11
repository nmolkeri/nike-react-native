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

import ProductScreen from './src/screens/ProductScreen';
import ProductDetailsScreen from './src/screens/ProductDetailsScreen.js';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        {/* <ProductScreen/> */}
        <ProductDetailsScreen/>
      </View>
    </SafeAreaView>
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
