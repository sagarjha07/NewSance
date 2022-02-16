import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

import {WebView} from 'react-native-webview';

function Trending() {
  const [news, setNews] = useState([]);

  const getTopNews = async () => {
    let res = await fetch(
      'https://newsapi.org/v2/top-headlines?country=in&apiKey=6237badf0fbf47438f1ee5d60af2c3c9',
    );
    let resJson = await res.json();
    setNews(resJson.articles);
  };

  useEffect(() => {
    getTopNews();
    // console.log(news);
  }, []);

  return (
    <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
      {news.length === 0 ? (
        <ActivityIndicator size="large" />
      ) : (
        news.map((item, idx) => (
          <TouchableOpacity key={idx} onPress={() => <Text>done</Text>}>
            <View key={idx} style={styles.container}>
              <Image source={{uri: item.urlToImage}} style={styles.img} />
              <Text style={styles.text}>{item.description}</Text>
            </View>
          </TouchableOpacity>
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

export default Trending;
