import { StyleSheet } from 'react-native'

import { FontFamily } from '../../constants/fonts'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  ideasList: {
    width: '100%',
    paddingVertical: 16,
    paddingHorizontal: 20,
  },

  ideaContainer: {
    padding: 16,
    backgroundColor: '#E9E9E9',
    borderRadius: 8,
  },

  author: {
    fontFamily: FontFamily.regular,
    fontSize: 14,
    color: '#535353',
    margin: 4,
  },

  infoContainer: {
    padding: 20,
    backgroundColor: '#CCCCCC',
    marginTop: 50,
    borderRadius: 8,
  },

  title: {
    fontFamily: FontFamily.medium,
    fontSize: 20,
    color: '#535353',
  },

  countersContainer: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  countContainer: {
    flex: 1,
  },

  count: {
    fontFamily: FontFamily.medium,
    fontSize: 18,
    color: '#535353',
  },

  countDescription: {
    fontFamily: FontFamily.regular,
    fontSize: 14,
    color: '#535353',
    marginTop: 2,
  },
})
