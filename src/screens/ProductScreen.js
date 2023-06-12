import React from 'react';
import products from '../data/products';
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';

const ProductScreen = ({navigation}) => {
  const productTapped = () => {
    navigation.navigate('Product details')
  };

    return (
        <FlatList
          data={products}
          renderItem={({ item }) => (
            <Pressable onPress={productTapped} style={styles.itemContainer}>
              <Image source={{uri: item.image}}
              style={styles.image}/>
            </Pressable>
          )}
          numColumns={2}
        />
    )
}

const styles = StyleSheet.create({
    image: {
      width: "100%", 
      aspectRatio: 1
    },
    itemContainer: {
      width: '50%',
      padding: 1,
    }
  });

  export default ProductScreen;