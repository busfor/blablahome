import { StyleSheet } from 'react-native'

import { FontFamily } from '../../constants/fonts'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#CCCCCC',
  },

  username: {
    fontSize: 16,
    color: '#272424',
    marginLeft: 12,
    fontFamily: FontFamily.regular,
  },
})
