import { StyleSheet } from 'react-native'

import { FontFamily } from '../../constants/fonts'

export default StyleSheet.create({
  container: {
    backgroundColor: '#F6F5F5',
    flex: 1,
    padding: 16,
  },

  title: {
    fontSize: 40,
    fontFamily: FontFamily.medium,
    margin: 8,
  },

  participations: {
    marginHorizontal: -16,
    marginBottom: -16,
  },
})
