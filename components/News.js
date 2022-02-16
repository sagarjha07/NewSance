import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  ActivityIndicator,
} from 'react-native';

function News({navigation, route}) {
  const [news, setNews] = useState([]);

  const url =
    'https://newsapi.org/v2/top-headlines?country=in&category=' +
    route.params.category +
    '&apiKey=6237badf0fbf47438f1ee5d60af2c3c9';

  const getNewsByCategory = async () => {
    let res = await fetch(url);
    let resJson = await res.json();
    setNews(resJson.articles);
  };

  useEffect(() => {
    getNewsByCategory();
    console.log(news);
  }, []);

  return (
    <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
      {news.length === 0 ? (
        <ActivityIndicator size="large" />
      ) : (
        news.map((item, idx) => (
          <View key={idx} style={styles.container}>
            <Image source={{uri: item.urlToImage}} style={styles.img} />
            <Text style={styles.text}>{item.description}</Text>
          </View>
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    padding: 10,
    margin: 5,
    backgroundColor: '#eee',
    borderRadius: 30,
  },
  text: {
    height: 150,
    width: 300,
    paddingVertical: 15,
    paddingLeft: 10,
    fontWeight: '500',
  },
  img: {
    height: 400,
    width: 350,
    borderRadius: 20,
  },
});

export default News;
