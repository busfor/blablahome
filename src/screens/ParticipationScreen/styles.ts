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
    height: 180,
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

  goalContainer: {
    paddingVertical: 20,
  },

  goalValue: {
    fontFamily: FontFamily.medium,
    fontSize: 28,
    color: colors.black,
  },

  goalLabel: {
    fontFamily: FontFamily.regular,
    fontSize: 18,
    color: colors.black,
    marginTop: 5,
  },

  progress: {
    height: 3,
    borderRadius: 12,
    backgroundColor: '#E9E9E9',
  },

  progressValue: {
    height: 3,
    borderRadius: 12,
    backgroundColor: colors.primary,
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

  checkins: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -20,
  },

  checkinContainer: {
    padding: 2,
  },

  checkinPhoto: {
    flex: 1,
  },

  add: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
