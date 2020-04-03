import { StyleSheet } from 'react-native'

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
    fontSize: 18,
    color: '#535353',
  },

  countDescription: {
    fontSize: 14,
    color: '#535353',
    marginTop: 2,
  },
})
