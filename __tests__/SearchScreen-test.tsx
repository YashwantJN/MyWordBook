/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer, {act} from 'react-test-renderer';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import SearchScreen from '../src/modules/search/SearchScreen';
import WordsList from '../src/modules/search/WordsList';

describe('SearchScreen', () => {
  test('search screen renders correctly', async () => {
    const navigation = jest.fn();
    const tree = renderer
      .create(<SearchScreen navigation={navigation} />)
      .toJSON();
    await act(async () => {
      expect(tree).toMatchSnapshot();
    });
  });

  test('should update input value when typing', async () => {
    const mockNavigate = jest.fn();

    const {getByPlaceholderText} = render(
      <SearchScreen navigation={{navigate: mockNavigate}} />,
    );

    const input = getByPlaceholderText('Search for a word...');
    fireEvent.changeText(input, 'Hello');

    expect(input.props.value).toBe('Hello');
  });

  test('searched value should display in child component', async () => {
    const mockNavigateToInfo = jest.fn();
    const mockWordsList = [
      {
        word: 'hello',
        phonetics: [
          {
            audio:
              '//ssl.gstatic.com/dictionary/static/sounds/20200429/hello--_gb_1.mp3',
          },
        ],
        meanings: [
          {
            definitions: [
              {
                definition:
                  'used as a greeting or to begin a phone conversation.',
              },
            ],
          },
        ],
      },
    ];

    const {queryByText, getAllByTestId} = render(
      <WordsList
        wordsList={mockWordsList}
        navigateToInfo={mockNavigateToInfo}
      />,
    );

    const items = getAllByTestId('NavigationItem');
    fireEvent.press(items[0]);

    await waitFor(() => {
      expect(queryByText('hello')).toBeTruthy();
      expect(mockNavigateToInfo).toHaveBeenCalledTimes(1);
    });
  });
});

// const {getByPlaceholderText, getAllByTestId} = render(
//     <SearchScreen navigation={{navigate: mockNavigateToInfo}} />,
//   );

//   const input = getByPlaceholderText('Search for a word...');
//   fireEvent.changeText(input, 'Hello');

//   expect(input.props.value).toBe('Hello');

//   const search = getAllByTestId('primaryButton');
//   fireEvent.press(search[0]);
