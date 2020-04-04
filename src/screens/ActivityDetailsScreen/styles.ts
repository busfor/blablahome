import { StyleSheet } from 'react-native'

import colors from '../../colors'
import { FontFamily } from '../../constants/fonts'

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    flex: 1,
    paddingHorizontal: 20,
  },

  topContainer: {
    padding: 20,
    backgroundColor: colors.backgroundColor,
  },

  title: {
    color: '#272424',
    fontSize: 32,
    fontFamily: FontFamily.medium,
  },

  frequency: {
    color: '#272424',
    fontSize: 16,
    fontFamily: FontFamily.regular,
    marginTop: 8,
  },

  countersContainer: {
    flexDirection: 'row',
    marginTop: 24,
  },

  infoContainer: {
    marginTop: 20,
  },

  description: {
    fontSize: 18,
    fontFamily: FontFamily.regular,
    color: '#272424',
    marginBottom: 16,
  },

  headerContainer: {
    marginTop: 20,
    paddingVertical: 16,
    borderColor: colors.gray,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  header: {
    color: colors.grayText,
    fontSize: 12,
    fontFamily: FontFamily.regular,
    letterSpacing: 2,
  },

  participant: {
    marginTop: 20,
  },

  bottomSpace: {
    paddingBottom: 20,
  },
})
