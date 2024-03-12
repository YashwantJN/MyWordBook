import Sound from 'react-native-sound';

export function useAudio() {
  const playAudio = (url: string) => {
    const sound = new Sound(url, null, error => {
      if (error) {
        console.error('Error loading sound:', error);
      } else {
        sound.play();
      }
    });
  };

  return {
    playAudio,
  };
}
