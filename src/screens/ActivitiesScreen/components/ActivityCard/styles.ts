import { StyleSheet } from 'react-native'

import { FontFamily } from '../../../../constants/fonts'
import colors from '../../../../colors'

export default StyleSheet.create({
  container: {
    backgroundColor: '#E9E9E9',
    borderRadius: 8,
    height: 320,
  },

  cover: {
    ...StyleSheet.absoluteFillObject,
  },

  tint: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.black,
    opacity: 0.3,
  },

  wrapper: {
    flex: 1,
    padding: 16,
  },

  spacing: {
    marginBottom: 16,
  },

  authorContainer: {
    flex: 1,
  },

  author: {
    fontSize: 14,
    color: colors.white,
    margin: 4,
    fontFamily: FontFamily.regular,
  },

  infoContainer: {
    padding: 20,
    backgroundColor: '#CCCCCC',
    borderRadius: 8,
  },

  title: {
    fontSize: 20,
    color: '#535353',
    fontFamily: FontFamily.medium,
  },

  frequency: {
    color: '#535353',
    fontSize: 14,
    fontFamily: FontFamily.regular,
    marginTop: 8,
  },

  countersContainer: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})
