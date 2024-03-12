/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer, {act} from 'react-test-renderer';
import LoginScreen from '../src/modules/auth/LogIn';
// import {fireEvent, render} from '@testing-library/react-native';

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useRoute: jest.fn(() => ({
      params: {
        user: {email: ''},
      },
    })),
  };
});

describe('LoginScreen', () => {
  test('login renders correctly', async () => {
    const tree = renderer.create(<LoginScreen />).toJSON();
    await act(async () => {
      expect(tree).toMatchSnapshot();
    });
  });
});
