import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Categories from './Categories';
import Trending from './Trending';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Categories navigation={navigation} />
      </View>
      <View style={{flex: 8}}>
        <Trending />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
