import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IProduct} from '../types/types';
import {colors} from '../constants/colors';
import Button from './Button';

interface ICardProps {
  item: IProduct;
  onPress?: () => void;
}

const Card: React.FC<ICardProps> = ({item, onPress}) => {
  const {image, title, rating, price, description} = item;
  return (
    <View style={styles.card}>
      <Image
        source={{uri: image}}
        style={styles.imageStyle}
        resizeMode="cover"
      />
      <View style={styles.descContainer}>
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
        <Text style={styles.price}>{price} €</Text>
        <Text>Rating: {rating.rate}</Text>
      </View>
      <View style={styles.bottom}>
        <Text numberOfLines={3}>{description}</Text>
        <Button onPress={onPress} text="Voir le produit" />
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    padding: 10,
    gap: 12,
    backgroundColor: colors.WHITE,
    elevation: 5,
  },
  imageStyle: {
    width: 120,
    height: 80,
    borderRadius: 12,
    alignSelf: 'center',
  },
  info: {
    flexDirection: 'row',
    gap: 5,
    flex: 1,
  },
  descContainer: {
    width: '100%',
    flex: 1,
    gap: 3,
  },
  title: {
    fontWeight: '500',
  },
  price: {
    fontWeight: '500',
    color: colors.PRIMARY,
  },
  bottom: {
    gap: 15,
  },
});
