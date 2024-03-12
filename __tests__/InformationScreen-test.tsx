/**
 * @format
 */

import 'react-native';
import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import InformationScreen from '../src/modules/information/InformationScreen';
import {useAudio} from '../src/modules/information/audio/useAudio';

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useRoute: jest.fn(() => ({
      params: {
        info: {
          phonetics:
            '//ssl.gstatic.com/dictionary/static/sounds/20200429/hello--_gb_1.mp3',
        },
      },
    })),
  };
});

jest.mock('../src/modules/information/audio/useAudio', () => ({
  useAudio: jest.fn(),
}));

describe('InformationScreen', () => {
  let playAudioMock: any;

  beforeEach(() => {
    playAudioMock = jest.fn();
    (useAudio as jest.Mock).mockReturnValue({
      playAudio: playAudioMock,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('play button should exist', async () => {
    const {getByTestId} = render(<InformationScreen />);
    const playButton = getByTestId('PlayButton');
    expect(playButton).toBeTruthy();
  });

  it('should call playAudio() when button is pressed', () => {
    const {getByTestId} = render(<InformationScreen />);
    const playButton = getByTestId('PlayButton');

    fireEvent.press(playButton);

    expect(playAudioMock).toHaveBeenCalledWith(
      '//ssl.gstatic.com/dictionary/static/sounds/20200429/hello--_gb_1.mp3',
    );
  });
});
