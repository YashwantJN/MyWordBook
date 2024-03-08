/**
 * @format
 */

import 'react-native'
import React from 'react'
import App from '../App'
import renderer, { act } from 'react-test-renderer'

jest.mock('react-native-sound', () => {
  return {
    Sound: jest.fn(),
  }
})

test('app renders correctly', async () => {
  const tree = renderer.create(<App />).toJSON()
  await act(async () => {
    expect(tree).toMatchSnapshot()
  })
})
