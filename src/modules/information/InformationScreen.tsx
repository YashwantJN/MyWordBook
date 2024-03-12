import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {useAudio} from './audio/useAudio';

interface InformationScreenProps {
  info?: any;
}

type InformationScreenRouteProp = RouteProp<{
  InformationScreen: InformationScreenProps;
}>;

const InformationScreen = () => {
  const route = useRoute<InformationScreenRouteProp>();
  const {playAudio} = useAudio();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{route.params?.info.word}</Text>
      <Text style={styles.description}>{route.params?.info.definition}</Text>
      {route.params?.info?.phonetics !== undefined && (
        <Button
          testID="PlayButton"
          title="Hear phonetics"
          onPress={() => {
            playAudio(route.params?.info.phonetics);
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
});

export default InformationScreen;
