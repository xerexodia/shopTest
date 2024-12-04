import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import GeneralLayout from '../components/GeneralLayout';
import {colors} from '../constants/colors';
import Button from '../components/Button';
import {useCartContext} from '../context/cartContext';

const ProductDetails = () => {
  const {params} = useRoute<any>();
  const {setSelectedItems} = useCartContext();
  return (
    <GeneralLayout enableGoBack title={'Details du produits'}>
      <View style={styles.container}>
        <Image source={{uri: params?.item?.image}} style={styles.img} />
        <View style={{gap: 3}}>
          <Text style={styles.title}> {params?.item?.title}</Text>
          <Text style={styles.price}>{params?.item?.price} €</Text>
          <Text>{params?.item?.description} €</Text>
        </View>
        <View
          style={{flexGrow: 1, justifyContent: 'flex-end', paddingBottom: 10}}>
          <Button
            onPress={() => {
              setSelectedItems(prev => [...prev, params?.item]);
            }}
            text="Ajouter à la carte"
          />
        </View>
      </View>
    </GeneralLayout>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    gap: 10,
  },
  img: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: '600',
  },
  price: {
    fontWeight: '600',
    color: colors.PRIMARY,
    fontSize: 16,
  },
});
