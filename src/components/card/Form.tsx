import React, {type FC} from 'react';
import {
  Pressable,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from 'react-native';
import {formStyle} from './styles';

const Form: FC<any> = props => {
  const height = useWindowDimensions().height;
  return (
    <View
      style={
        formStyle(
          Object.keys(props.cardElemets).length * (height < 800 ? 180 : 200),
        ).containerCardView
      }>
      <View style={[formStyle().cardView]}>
        {Object.values(props.cardElemets).map((item: any) => {
          return (
            <View key={item.id}>
              <Text style={formStyle().textLabel}>{item.label}</Text>
              <TextInput
                style={formStyle().textInput}
                onChangeText={value => {
                  props.inputValueHandler(value, item.id);
                }}
                value={item.textInput}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="default"
                autoComplete="off"
                secureTextEntry={item.isSecuredField}
                placeholder={`Enter your ${item.label.toLowerCase()}`}
                testID={`${item.label}`}
                placeholderTextColor={'gray'}
              />
              <View style={formStyle().errorMessageContainer}>
                {item.error !== '' ? (
                  <Text style={formStyle().errorMessage}>{item.error}</Text>
                ) : null}
              </View>
            </View>
          );
        })}
        <View style={formStyle().submitBtnContainer}>
          <Pressable
            style={formStyle().submitBtn}
            onPress={props.didPressedSubmitButton}>
            <Text style={formStyle().textButtonSignIn}>
              {props.cardButton.title}
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Form;
