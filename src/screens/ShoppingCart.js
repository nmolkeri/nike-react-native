import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import cart from "../data/cart";
import CardListItem from "../components/CardListItem";


const ShoppingCart = () => {
    const checkout = () => {
      
    };
    return(
        <>
        <FlatList
            data={cart}
            renderItem={({item}) =>
                <CardListItem cartItem={item}/> }
            ListFooterComponent={() => (
                <View style={styles.totalsContainer}>
                    <View style={styles.row}>
                        <Text style={styles.text}>Subtotal</Text>
                        <Text style={styles.text}>$410,000 US</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.text}>Delivery</Text>
                        <Text style={styles.text}>$40 US</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.textBold}>Total</Text>
                        <Text style={styles.textBold}>$410,040 US</Text>
                    </View>
                </View>
            )}
        />
        <Pressable
          onPress={checkout} 
          style={styles.button}>
          <Text style={styles.buttonText}>
            Checkout
          </Text>
        </Pressable>
    </>

    )
}

const styles = StyleSheet.create({
    totalsContainer: {
        margin: 20,
        borderTopWidth: 1,
        borderColor: 'gray'
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 16,
        color: 'gray'
    },
    textBold: {
        fontSize: 16,
        fontWeight: '500'
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
})

export default ShoppingCart;