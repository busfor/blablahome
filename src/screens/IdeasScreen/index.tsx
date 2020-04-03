import React, { useCallback } from 'react'
import { SafeAreaView, FlatList } from 'react-native'
import { Options } from 'react-native-navigation'

import { AppNavigation } from '../../navigation'
import { Screens } from '..'
import { Idea } from '../../AppPropTypes'

import styles from './styles'
import IdeaCard from './components/IdeaCard'

const IdeasScreen = () => {
  const onPressIdea = useCallback(() => {
    AppNavigation.showModal({
      stack: {
        children: [
          {
            component: {
              name: Screens.ideaDetailsScreen,
            },
          },
        ],
      },
    })
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.ideasList}
        data={ideas}
        renderItem={({
          item: {
            id,
            title,
            completed,
            participants,
            author: { name },
          },
        }) => (
          <IdeaCard
            {...{
              key: id,
              title,
              completedCount: completed,
              participantsCount: participants.length,
              author: name,
              onPress: onPressIdea,
            }}
          />
        )}
      />
    </SafeAreaView>
  )
}

IdeasScreen.options = (): Options => ({
  topBar: {
    title: {
      text: 'Ideas',
    },
  },
})

const ideas: Idea[] = [
  {
    id: 0,
    title: 'Test',
    description: '',
    participants: [{ id: 0, name: 'Name' }],
    frequent: false,
    frequency: 0,
    author: {
      id: 1,
      name: 'Author Name',
    },
    completed: 0,
  },
]

export default IdeasScreen
