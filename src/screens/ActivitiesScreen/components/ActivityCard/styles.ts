import { StyleSheet } from 'react-native'

import { FontFamily } from '../../../../constants/fonts'

export default StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#E9E9E9',
    borderRadius: 8,
  },

  spacing: {
    marginBottom: 16,
  },

  author: {
    fontSize: 14,
    color: '#535353',
    margin: 4,
    fontFamily: FontFamily.regular,
  },

  infoContainer: {
    padding: 20,
    backgroundColor: '#CCCCCC',
    marginTop: 50,
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
