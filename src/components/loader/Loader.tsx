
import React from 'react'
import { ActivityIndicator, Modal, StyleSheet, Text, View } from 'react-native'
import { Colors } from '../../constants/Colors.constant'

interface LoaderProps {
  isLoading: boolean,
    text?: string
}

const Loader = (props: LoaderProps): JSX.Element => {
  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={props.isLoading}
      style={styles.modalStyle}
      statusBarTranslucent
      onRequestClose={() => { }}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator
            animating={props.isLoading}
            size={'large'}
            color="black"
          />
          <Text style={styles.textStyle}>{props.text}</Text>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalStyle: {
    zIndex: 1100,
  },
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#rgba(0, 0, 0, 0.5)',
  },
  activityIndicatorWrapper: {
    backgroundColor: Colors.white,
    width: '50%',
    height: '20%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 14,
    color: Colors.primary,
    paddingTop: 10,
  },
})

export default Loader
