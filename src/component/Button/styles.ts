import { StyleSheet } from 'react-native'

import { FontFamily } from '../../constants/fonts'

export default StyleSheet.create({
  container: {
    height: 72,
    backgroundColor: '#F6F5F5',
    borderRadius: 8,
  },

  inner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  title: {
    fontFamily: FontFamily.regular,
    fontSize: 18,
    color: '#000000',
  },
})
