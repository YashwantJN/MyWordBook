import React from 'react';
import {ScrollView, View} from 'react-native';
import NavigationItem from '../../components/items/NavigationItem';

const WordsList = ({wordsList, navigateToInfo}) => {
  return (
    <ScrollView>
      {wordsList?.map((word: any) => {
        return (
          <View key={Math.random()}>
            <NavigationItem
              title={word?.word}
              description={word?.meanings[0]?.definitions[0]?.definition}
              onPress={() => {
                navigateToInfo(word);
              }}
            />
          </View>
        );
      })}
    </ScrollView>
  );
};

export default WordsList;
