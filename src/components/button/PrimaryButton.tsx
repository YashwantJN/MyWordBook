import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {Colors} from '../../constants/Colors.constant';

interface PrimaryButtonProps {
  title: string;
  onPress: () => void;
  id?: string;
  marginTop?: number;
  disabled?: boolean;
  width?: number | string; // use for small views like 'pop-ups'
  popTextSize?: number;
}

const PrimaryButton = ({
  title,
  onPress,
  marginTop = 24,
  disabled = false,
  width = '100%',
}: PrimaryButtonProps): React.JSX.Element => {
  return (
    <TouchableOpacity
      testID="primaryButton"
      disabled={disabled}
      onPress={onPress}
      activeOpacity={0.7}
      style={[
        styles.primaryButtonViewStyle,
        {
          marginTop,
          width,
        },
      ]}>
      <Text style={styles.primaryButtonTextStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  primaryButtonViewStyle: {
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 36,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: Colors.button,
    borderWidth: 2,
    borderColor: Colors.border,
  },
  primaryButtonTextStyle: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    color: Colors.darkTheme,
    letterSpacing: 2,
  },
});

export default PrimaryButton;
