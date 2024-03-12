import React from 'react';
import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import Images from '../../constants/Images.constant';
import {Colors} from '../../constants/Colors.constant';

const NavigationItem = ({title, description, onPress}) => {
  return (
    <Pressable
      style={styles.container}
      onPress={onPress}
      testID="NavigationItem">
      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text numberOfLines={2} style={styles.description}>
            {description}
          </Text>
        </View>
        <Image source={Images.arrow} style={styles.arrowIcon} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: Colors.white,
    margin: 10,
    padding: 15,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: Colors.primary,
  },
  description: {
    fontSize: 16,
    color: Colors.gray,
  },
  arrowIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});

export default NavigationItem;
