import { StyleSheet } from 'react-native'

import colors from '../../colors'
import { FontFamily } from '../../constants/fonts'

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    paddingHorizontal: 60,
    paddingVertical: 18,

    alignItems: 'center',
  },

  topTitle: {
    fontSize: 18,
    fontFamily: FontFamily.medium,
  },

  bottomTitle: {
    marginTop: 2,
    fontSize: 14,
    fontFamily: FontFamily.regular,
  },

  content: {
    paddingHorizontal: 20,
  },

  topContainer: {
    flex: 1,
    minHeight: 160,
    padding: 20,
    justifyContent: 'flex-end',
    backgroundColor: colors.backgroundColor,
  },

  cover: {
    ...StyleSheet.absoluteFillObject,
  },

  title: {
    // color: colors.white,
    fontSize: 32,
    fontFamily: FontFamily.medium,
  },

  message: {
    marginTop: 20,
    fontSize: 18,
    lineHeight: 24,
    fontFamily: FontFamily.regular,
  },
})
