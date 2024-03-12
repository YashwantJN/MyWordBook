import React, {useState} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {NetworkManager} from '../../../networking/NetworkManager';
import PrimaryButton from '../../components/button/PrimaryButton';
import Loader from '../../components/loader/Loader';
import {Colors} from '../../constants/Colors.constant';
import WordsList from './WordsList';

const SearchScreen = ({navigation}: {navigation: any}) => {
  const [answer, onChangeAnswer] = useState('');
  const [wordNotFound, setWordNotFound] = useState(false);
  const [wordsList, setWordsList] = useState([]);
  const [searching, setSearching] = useState(false);

  function navigateToInfo(word: any) {
    navigation.navigate('Info', {
      info: {
        word: word.word,
        definition: word?.meanings[0]?.definitions[0]?.definition,
        phonetics: word.phonetics[0]?.audio,
      },
    });
  }

  function onChangeText(enteredText: string): void {
    onChangeAnswer(enteredText);
  }

  async function onPressSearch() {
    onChangeAnswer('');
    setWordsList([]);
    setSearching(true);
    await NetworkManager(
      (response: any) => {
        setSearching(false);
        if (response === 'not found') {
          setWordNotFound(true);
        } else {
          setWordsList(response);
        }
      },
      `/${answer}`,
      'GET',
    );
  }

  return (
    <View style={styles.container}>
      <Modal transparent visible={wordNotFound} animationType="slide">
        <View style={styles.modalView}>
          <Text style={styles.text}>Not Found</Text>
          <Text style={styles.description}>Please enter valid word</Text>
          <TouchableOpacity
            style={styles.button}
            onPressOut={() => {
              setWordNotFound(false);
            }}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={answer}
          placeholder="Search for a word..."
          placeholderTextColor="gray"
          keyboardType="default"
          autoCapitalize="none"
          autoCorrect={false}
          editable={true}
          selectTextOnFocus={false}
          autoComplete="off"
          maxLength={15}
        />
        <PrimaryButton title="Search" onPress={onPressSearch} />
      </View>
      <WordsList wordsList={wordsList} navigateToInfo={navigateToInfo} />
      <Loader isLoading={searching} text="Searching..." />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  modalView: {
    width: '100%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.button,
  },
  text: {color: 'black', fontSize: 25, padding: 5},
  description: {
    color: 'black',
    fontSize: 10,
    fontWeight: '200',
    padding: 5,
  },
  button: {
    backgroundColor: 'red',
    paddingHorizontal: 75,
    paddingVertical: 10,
    borderRadius: 5,
  },
  searchView: {
    flex: 1,
    flexDirection: 'row',
  },
  input: {
    maxHeight: '40%',
    height: 40,
    borderWidth: 2,
    borderRadius: 5,
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderColor: Colors.border,
  },
});

export default SearchScreen;
