import { View, Text, StyleSheet, Image, Button } from "react-native";
import { cartSlice } from "../store/cartSlice";
import { useSelector, useDispatch } from "react-redux";

const CartListItem = ({ cartItem }) => {
    const dispatch = useDispatch();

  const increaseQuantity = () => {
    dispatch(cartSlice.actions.changeQuantity({productId: cartItem.product.id, amount: 1}));
  };

  const decreaseQuantity = () => {
    dispatch(cartSlice.actions.changeQuantity({productId: cartItem.product.id, amount: -1}));
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: cartItem.product.image }} style={styles.image} />
      <View style={styles.contentContainer}>
        <Text style={styles.name}>{cartItem.product.name}</Text>
        <Text style={styles.size}>Size {cartItem.size}</Text>

        <View style={styles.footer}>
            <Button
                title="-"
                onPress={decreaseQuantity}
                style={styles.stepperButton}
            />
            <Text style={styles.quantity}>{cartItem.quantity}</Text>
            <Button
                title="+"
                onPress={increaseQuantity}
                style={styles.stepperButton}
            />
          <Text style={styles.itemTotal}>$320.0</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
  },
  contentContainer: {
    flex: 1,
    marginLeft: 10,
  },
  image: {
    width: "40%",
    aspectRatio: 1,
  },
  name: {
    fontWeight: "500",
    fontSize: 18,
  },
  size: {
    fontSize: 16,
    color: "gray",
  },
  quantity: {
    marginHorizontal: 10,
    fontWeight: "bold",
    color: "gray",
  },
  footer: {
    marginTop: "auto",
    flexDirection: "row",
    alignItems: "center",
  },
  itemTotal: {
    fontSize: 16,
    marginLeft: "auto",
    fontWeight: "500",
  },
  stepperButton: {
    width: 10,
    height: 10
  }
});

export default CartListItem;