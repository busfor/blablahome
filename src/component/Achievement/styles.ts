import { StyleSheet } from 'react-native'

import { FontFamily } from '../../constants/fonts'
import colors from '../../colors'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },

  icon: {
    width: 48,
    height: 48,
    borderRadius: 8,
    backgroundColor: colors.gray,
  },

  title: {
    flex: 1,
    fontSize: 16,
    fontFamily: FontFamily.regular,
    marginHorizontal: 16,
  },

  points: {
    fontSize: 16,
    fontFamily: FontFamily.regular,
    color: '#28D74F',
  },
})
