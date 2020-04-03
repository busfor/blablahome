import { StyleSheet } from 'react-native'

import { FontFamily } from '../../constants/fonts'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 4,
    marginHorizontal: -4,
    marginVertical: 4,
  },

  icon: {
    width: 48,
    height: 48,
    borderRadius: 8,
    backgroundColor: '#C4C4C4',
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
  },
})
