/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer, {act} from 'react-test-renderer';
import {fireEvent, render, waitFor} from '@testing-library/react-native';

import HomeScreen from '../src/modules/home/HomeScreen';

describe('HomeScreen', () => {
  test('home renders correctly', async () => {
    const navigation = jest.fn();
    const tree = renderer
      .create(<HomeScreen navigation={navigation} />)
      .toJSON();
    await act(async () => {
      expect(tree).toMatchSnapshot();
    });
  });

  test('navigation for more info', async () => {
    const mockNavigate = jest.fn();

    const {getAllByTestId} = render(
      <HomeScreen navigation={{navigate: mockNavigate}} />,
    );
    const items = getAllByTestId('NavigationItem');
    fireEvent.press(items[0]);
    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledTimes(1);
      expect(mockNavigate).toHaveBeenCalledWith('Info', {
        info: {
          definition:
            'A step-by-step procedure for solving a problem or accomplishing a task.',
          pronunciation: 'Eksaktor',
          word: 'Algorithm',
        },
      });
    });
  });
});
