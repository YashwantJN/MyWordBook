import AsyncStorage from '@react-native-async-storage/async-storage';

import {AsyncStorageService} from '../src/services/AsyncStorageService'; // Adjust the path as needed

describe('AsyncStorageService', () => {
  it('should save data to AsyncStorage', () => {
    const mockData = {key: 'value'};
    const mockKey = 'myKey';

    AsyncStorage.setItem = jest.fn();

    AsyncStorageService.saveData(mockData, mockKey);

    expect(AsyncStorage.setItem).toHaveBeenCalledWith(
      mockKey,
      JSON.stringify(mockData),
    );
  });

  it('should get data from AsyncStorage', async () => {
    const mockData = {key: 'value'};
    const mockKey = 'myKey';

    AsyncStorage.getItem = jest
      .fn()
      .mockResolvedValue(JSON.stringify(mockData));

    const result = await AsyncStorageService.getData(mockKey);

    expect(AsyncStorage.getItem).toHaveBeenCalledWith(mockKey);
    expect(result).toEqual(mockData);
  });

  it('should delete data from AsyncStorage', () => {
    const mockKey = 'myKey';

    AsyncStorage.removeItem = jest.fn();

    AsyncStorageService.deleteData(mockKey);

    expect(AsyncStorage.removeItem).toHaveBeenCalledWith(mockKey);
  });

  it('should remove all data from AsyncStorage', () => {
    AsyncStorage.clear = jest.fn();

    AsyncStorageService.removeAllAsyncData();

    expect(AsyncStorage.clear).toHaveBeenCalled();
  });
});
