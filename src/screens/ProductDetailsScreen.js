import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  ScrollView,
  Pressable
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { cartSlice } from '../store/cartSlice';


const ProductDetailsScreen = () => {
    var product = useSelector((state) => state.products.selectedProduct);
    const dispatch = useDispatch();
    const {width} = useWindowDimensions()

    const addToCart = (item) => () => {
      dispatch(cartSlice.actions.addItemToCart({product}))
    };

    return (
      <View >
        <ScrollView
          showsVerticalScrollIndicator='false'>
          <FlatList
            data={product.images}
            renderItem={({item}) => (
              <Image source={{uri: item}}
                style={{width, aspectRatio: 1}}/>
            )}
            horizontal
            showsHorizontalScrollIndicator='false'
            pagingEnabled
          />
          <View style={{padding: 20}}>
            <Text style={styles.title}>
              {product.name}
            </Text>

            <Text style={styles.price}>
              ${product.price}
            </Text>

            <Text style={styles.description}>
              {product.description}
            </Text>
          </View>
        </ScrollView>

        <Pressable
          onPress={addToCart(product)} 
          style={styles.button}>
          <Text style={styles.buttonText}>
            Add to cart
          </Text>
        </Pressable>
       </View>
    )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: "500",
    marginVertical: 10
  },
  price: {
    fontWeight:"500",
    fontSize: 16
  },
  description: {
    marginVertical: 10,
    fontSize: 18,
    lineHeight: 24,
    fontWeight: 300
  },
  button: {
    position: 'absolute',
    padding: 20,
    bottom: 30,
    width: '90%',
    backgroundColor: "black",
    alignSelf: 'center',
    borderRadius: 20,
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16
  }
});

export default ProductDetailsScreen;