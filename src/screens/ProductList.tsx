import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import useGetProducts from '../hooks/useGetProducts';
import GeneralLayout from '../components/GeneralLayout';
import Card from '../components/Card';
import {useNavigation} from '@react-navigation/native';
import {navigatinConstants} from '../constants/navigationConstants';

const ProductList = () => {
  const {products, loading} = useGetProducts();
  const {navigate} = useNavigation<any>();
  return (
    <GeneralLayout title="Liste des Produits">
      <View style={{flex: 1}}>
        {loading ? (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size={30} />
          </View>
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{gap: 20, paddingHorizontal: 20}}
            data={products ?? []}
            renderItem={({item}) => (
              <Card
                key={item.id}
                onPress={() =>
                  navigate(navigatinConstants.PRODUCT_DETAILS_SCREEN, {item})
                }
                item={item}
              />
            )}
            keyExtractor={item => item.title}
          />
        )}
      </View>
    </GeneralLayout>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  loaderContainer: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
