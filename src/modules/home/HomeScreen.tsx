import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import words from '../../mock/words.json';
import {Colors} from '../../constants/Colors.constant';
import NavigationItem from '../../components/items/NavigationItem';

const HomeScreen = ({navigation}: {navigation: any}) => {
  // https://random-words-api.vercel.app/word

  const navigateToInfo = (wordData: any) => {
    navigation.navigate('Info', {info: wordData});
  };

  const headerComponent = (): JSX.Element => {
    return <Text style={styles.heading}>Choose to know more!</Text>;
  };

  const footerComponent = (): JSX.Element => {
    return (
      <View style={styles.footerView}>
        <Text style={styles.footerText}>You reached the end</Text>
      </View>
    );
  };

  const renderItem = ({item}: {item: any}): JSX.Element => {
    return (
      <View key={Math.random()}>
        <NavigationItem
          title={item.word}
          description={item.definition}
          onPress={() => {
            navigateToInfo(item);
          }}
        />
      </View>
    );
  };

  return (
    <FlatList
      showsVerticalScrollIndicator={true}
      indicatorStyle={'black'}
      style={styles.container}
      data={words}
      renderItem={renderItem}
      keyExtractor={item => item.word}
      ListHeaderComponent={headerComponent}
      ListFooterComponent={footerComponent}
    />
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    padding: 16,
  },
  heading: {
    fontSize: 28,
    fontWeight: '500',
    color: Colors.primary,
    textAlign: 'center',
    letterSpacing: 1,
  },
  footerView: {marginBottom: 50, padding: 16},
  footerText: {textAlign: 'center'},
});
