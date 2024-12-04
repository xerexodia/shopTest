import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigatinConstants} from '../constants/navigationConstants';
import ProductList from '../screens/ProductList';
import ProductDetails from '../screens/ProductDetails';
import Cart from '../screens/Cart';

const Main = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName={navigatinConstants.PRODUCT_LIST_SCREEN}
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={navigatinConstants.PRODUCT_LIST_SCREEN}
        component={ProductList}
      />
      <Stack.Screen
        name={navigatinConstants.PRODUCT_DETAILS_SCREEN}
        component={ProductDetails}
      />
      <Stack.Screen name={navigatinConstants.CART_SCREEN} component={Cart} />
    </Stack.Navigator>
  );
};

export default Main;
