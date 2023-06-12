import React from 'react';
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { productSlice } from '../store/productSlice';

const ProductScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const productTapped = (item) => () => {
    //update selected product
    //dispatch an event in air. Reducer will catch this action and current state. 
    dispatch(productSlice.actions.setSelected(item.id));
    navigation.navigate('Product details');
  };

  const products = useSelector((state) => state.products.products);

    return (
        <FlatList
          data={products}
          renderItem={({ item }) => (
            <Pressable onPress={productTapped(item)} style={styles.itemContainer}>
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