import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
//@ts-ignore
import AntDesign from 'react-native-vector-icons/AntDesign';
//@ts-ignore
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import {navigatinConstants} from '../constants/navigationConstants';
import {colors} from '../constants/colors';
import {useCartContext} from '../context/cartContext';

interface IProps {
  title?: string;
  enableGoBack?: boolean;
  children?: React.ReactNode | React.ReactNode[];
}

const GeneralLayout: React.FC<IProps> = ({enableGoBack, title, children}) => {
  const {goBack, canGoBack, navigate} = useNavigation<any>();
  const {selectedItems} = useCartContext();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.WHITE} />
      <View style={styles.header}>
        {enableGoBack && canGoBack() ? (
          <TouchableOpacity style={styles.goBackBtn} onPress={goBack}>
            <AntDesign name="arrowleft" size={25} />
          </TouchableOpacity>
        ) : (
          <View />
        )}
        {title ? <Text style={styles.title}>{title}</Text> : null}
        <TouchableOpacity
          style={styles.goBackBtn}
          onPress={() => navigate(navigatinConstants.CART_SCREEN)}>
          <Entypo name="shopping-cart" size={25} color={colors.GREY} />
          <View style={styles.badge}>
            <Text>{selectedItems?.length}</Text>
          </View>
        </TouchableOpacity>
      </View>
      {children}
    </SafeAreaView>
  );
};

export default GeneralLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  goBackBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
  },
  badge: {
    top: -2,
    right: -2,
    position: 'absolute',
    backgroundColor: colors.PRIMARY,
    width: 20,
    height: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
