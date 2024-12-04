import {FlatList, Text} from 'react-native';
import React from 'react';
import {useCartContext} from '../context/cartContext';
import Card from '../components/Card';
import GeneralLayout from '../components/GeneralLayout';

const Cart = () => {
  const {selectedItems} = useCartContext();
  return (
    <GeneralLayout title="Votre Carte" enableGoBack>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{gap: 20, paddingHorizontal: 20}}
        data={selectedItems ?? []}
        renderItem={({item}) => <Card key={item.id} item={item} />}
        keyExtractor={item => item.title}
        ListEmptyComponent={() => <Text>Aucun produit trouvé</Text>}
      />
    </GeneralLayout>
  );
};

export default Cart;
