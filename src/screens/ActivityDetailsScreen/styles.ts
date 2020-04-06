import { StyleSheet } from 'react-native'

import colors from '../../colors'
import { FontFamily } from '../../constants/fonts'

export default StyleSheet.create({
  container: {
    flex: 1,
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
    color: colors.white,
    fontSize: 32,
    fontFamily: FontFamily.medium,
  },

  frequency: {
    color: colors.white,
    fontSize: 16,
    fontFamily: FontFamily.regular,
    marginTop: 8,
  },

  infoContainer: {
    marginTop: 20,
  },

  description: {
    fontSize: 18,
    fontFamily: FontFamily.regular,
    color: colors.black,
  },

  emptyParticipations: {
    fontSize: 18,
    fontFamily: FontFamily.regular,
    color: colors.black,
    textAlign: 'center',
    paddingVertical: 20,
  },

  headerContainer: {
    marginTop: 20,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  header: {
    color: colors.grayText,
    fontSize: 14,
    fontFamily: FontFamily.regular,
    letterSpacing: 2,
  },

  participant: {
    marginTop: 20,
  },

  bottomSpace: {
    paddingBottom: 20,
  },

  seeAll: {
    padding: 16,
    margin: -16,
  },

  seeAllText: {
    fontFamily: FontFamily.medium,
    fontSize: 12,
    letterSpacing: 2,
    color: colors.primary,
  },

  buttonContainer: {
    marginVertical: 20,
  },
})
