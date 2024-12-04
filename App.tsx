// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Main from './src/navigation/Main';
import {CartProvider} from './src/context/cartContext';

export default function App() {
  return (
    <NavigationContainer>
      <CartProvider>
        <Main />
      </CartProvider>
    </NavigationContainer>
  );
}
