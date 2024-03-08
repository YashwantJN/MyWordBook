import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import Sound from 'react-native-sound';

interface InformationScreenProps {
  info?: any;
}

type InformationScreenRouteProp = RouteProp<{
  InformationScreen: InformationScreenProps;
}>;

const InformationScreen = () => {
  const route = useRoute<InformationScreenRouteProp>();

  const playAudio = (url: string) => {
    const sound = new Sound(url, null, error => {
      if (error) {
        console.error('Error loading sound:', error);
      } else {
        sound.play();
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{route.params?.info.word}</Text>
      <Text style={styles.description}>{route.params?.info.definition}</Text>
      {route.params?.info?.phonetics !== undefined && (
        <Button
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
