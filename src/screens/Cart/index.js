import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ToastAndroid,
  FlatList,
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

const DATA = [
  {
    id: 1,
    title: 'iPhone 9',
    description: 'An apple mobile which is nothing like apple',
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: 'Apple',
    category: 'smartphones',
    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    images: [
      'https://i.dummyjson.com/data/products/1/1.jpg',
      'https://i.dummyjson.com/data/products/1/2.jpg',
      'https://i.dummyjson.com/data/products/1/3.jpg',
      'https://i.dummyjson.com/data/products/1/4.jpg',
      'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    ],
  },
  {
    id: 2,
    title: 'iPhone X',
    description:
      'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
    price: 899,
    discountPercentage: 17.94,
    rating: 4.44,
    stock: 34,
    brand: 'Apple',
    category: 'smartphones',
    thumbnail: 'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
    images: [
      'https://i.dummyjson.com/data/products/2/1.jpg',
      'https://i.dummyjson.com/data/products/2/2.jpg',
      'https://i.dummyjson.com/data/products/2/3.jpg',
      'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
    ],
  },
  {
    id: 3,
    title: 'Samsung Universe 9',
    description:
      "Samsung's new variant which goes beyond Galaxy to the Universe",
    price: 1249,
    discountPercentage: 15.46,
    rating: 4.09,
    stock: 36,
    brand: 'Samsung',
    category: 'smartphones',
    thumbnail: 'https://i.dummyjson.com/data/products/3/thumbnail.jpg',
    images: ['https://i.dummyjson.com/data/products/3/1.jpg'],
  },
  {
    id: 4,
    title: 'OPPOF19',
    description: 'OPPO F19 is officially announced on April 2021.',
    price: 280,
    discountPercentage: 17.91,
    rating: 4.3,
    stock: 123,
    brand: 'OPPO',
    category: 'smartphones',
    thumbnail: 'https://i.dummyjson.com/data/products/4/thumbnail.jpg',
    images: [
      'https://i.dummyjson.com/data/products/4/1.jpg',
      'https://i.dummyjson.com/data/products/4/2.jpg',
      'https://i.dummyjson.com/data/products/4/3.jpg',
      'https://i.dummyjson.com/data/products/4/4.jpg',
      'https://i.dummyjson.com/data/products/4/thumbnail.jpg',
    ],
  },
  {
    id: 5,
    title: 'Huawei P30',
    description:
      'Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.',
    price: 499,
    discountPercentage: 10.58,
    rating: 4.09,
    stock: 32,
    brand: 'Huawei',
    category: 'smartphones',
    thumbnail: 'https://i.dummyjson.com/data/products/5/thumbnail.jpg',
    images: [
      'https://i.dummyjson.com/data/products/5/1.jpg',
      'https://i.dummyjson.com/data/products/5/2.jpg',
      'https://i.dummyjson.com/data/products/5/3.jpg',
    ],
  },
  {
    id: 6,
    title: 'MacBook Pro',
    description:
      'MacBook Pro 2021 with mini-LED display may launch between September, November',
    price: 1749,
    discountPercentage: 11.02,
    rating: 4.57,
    stock: 83,
    brand: 'APPle',
    category: 'laptops',
    thumbnail: 'https://i.dummyjson.com/data/products/6/thumbnail.png',
    images: [
      'https://i.dummyjson.com/data/products/6/1.png',
      'https://i.dummyjson.com/data/products/6/2.jpg',
      'https://i.dummyjson.com/data/products/6/3.png',
      'https://i.dummyjson.com/data/products/6/4.jpg',
    ],
  },
];

const Cart = props => {
  const [total, setTotal] = useState(null);

  useEffect(() => {
    getTotal(DATA);
  }, []);

  //get total price of all items in the cart
  const getTotal = productData => {
    let totalPrice = 0;
    for (let index = 0; index < productData.length; index++) {
      let price = productData[index].price;
      totalPrice = totalPrice + price;
    }
    setTotal(total);
  };

  const checkOut = async () => {
    try {
    } catch (error) {
      return error;
    }

    ToastAndroid.show('Items will be Deliverd SOON!', ToastAndroid.SHORT);

    props.navigation.navigate('Home');
  };

  const renderProducts = ({item}) => {
    return (
      <View
        onPress={() => props.navigation.navigate('ProductDetail', {})}
        style={styles.productContainer}>
        <View style={styles.imageContainer}>
          <Image source={{uri: item.thumbnail}} style={styles.image} />
        </View>

        <View style={styles.productInfo}>
          <View>
            <Text style={styles.productTitle}>{item.title}</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.productPrice}>${item.price}</Text>
            </View>
          </View>

          <View style={styles.productButtons}>
            <View style={styles.numberOfProducts}>
              <TouchableOpacity style={styles.minusButton}>
                <MaterialCommunityIcons
                  name="minus"
                  style={styles.materialIcon}
                />
              </TouchableOpacity>

              <Text>1</Text>

              <TouchableOpacity style={styles.plusButton}>
                <MaterialCommunityIcons
                  name="plus"
                  style={styles.materialIcon}
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity>
              <MaterialCommunityIcons
                name="delete-outline"
                style={styles.deleteIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.secondaryTitle}>My Cart</Text>
        <FlatList
          data={DATA}
          renderItem={renderProducts}
          keyExtractor={item => item.id}
          paddingHorizontal={16}
        />
      </View>

      <View style={styles.checkoutContainer}>
        <TouchableOpacity
          onPress={() => (total !== 0 ? checkOut() : null)}
          style={styles.checkoutButton}>
          <Text style={styles.checkoutButtonText}>
            CHECKOUT (${total + total / 20})
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export {Cart};
