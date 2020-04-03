import { StyleSheet } from 'react-native'

import { FontFamily } from '../../constants/fonts'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#CCCCCC',
  },

  username: {
    fontSize: 16,
    color: '#272424',
    marginLeft: 12,
    fontFamily: FontFamily.regular,
  },
})
