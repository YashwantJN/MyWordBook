// useAudio.test.js
import Sound from 'react-native-sound'; // Import the Sound module (mocked)
import {useAudio} from '../src/modules/information/audio/useAudio';

const mockFn = jest.fn();

jest.mock('react-native-sound', () => {
  return jest.fn().mockImplementation(() => ({
    Sound: () => {
      return {
        play: mockFn,
      };
    },
  }));
});

describe('useAudio', () => {
  it('should call playAudio with the correct URL', () => {
    const url = 'test-audio-url';
    const {playAudio} = useAudio();
    playAudio(url);

    expect(Sound).toHaveBeenCalledWith(url, null, expect.any(Function));
  });
});
