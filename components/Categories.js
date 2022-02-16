import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import News from '../components/News';

const categories = [
  'Entertainment',
  'Business',
  'Health',
  'Technology',
  'Sports',
];

const Categories = ({navigation}) => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {categories.map((category, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            navigation.navigate('News', {category});
          }}>
          <View>
            <Text
              style={{
                padding: 10,
                borderWidth: 1,
                borderColor: 'black',
                fontSize: 19,
                margin: 10,
                borderRadius: 10,
              }}>
              {category}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Categories;

//6237badf0fbf47438f1ee5d60af2c3c9
