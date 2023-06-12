import { NavigationContainer } from "@react-navigation/native";
import ProductScreen from "./screens/ProductScreen";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";
import ShoppingCart from "./screens/ShoppingCart";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Pressable, Text } from "react-native";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator
            screenOptions={{contentStyle: {backgroundColor: 'white'}}}>
                <Stack.Screen 
                name="Products" 
                component={ProductScreen}
                options={({navigation}) => ({
                    headerRight: () => (
                        <Pressable onPress={() => navigation.navigate("Shopping cart")} >
                            <Text>Cart</Text>
                        </Pressable>
                        ),
                    })}
                    />
                <Stack.Screen 
                    name="Product details" 
                    component={ProductDetailsScreen}
                    options={{presentation: "modal"}}
                />
                <Stack.Screen name="Shopping cart" component={ShoppingCart}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;