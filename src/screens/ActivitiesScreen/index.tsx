import React, { useCallback } from 'react'
import { ScrollView } from 'react-native'
import { Options } from 'react-native-navigation'

import { AppNavigation } from '../../navigation'
import { Screens } from '..'
import { Activity } from '../../AppPropTypes'

import styles from './styles'
import ActivityCard from './components/ActivityCard'

const ActivitiesScreen = () => {
  const onPressIdea = useCallback((activity: Activity) => {
    AppNavigation.showModal({
      stack: {
        children: [
          {
            component: {
              name: Screens.ActivityDetailsScreen,
              passProps: {
                activity,
              },
            },
          },
        ],
      },
    })
  }, [])

  return (
    <ScrollView style={styles.container}>
      {activities.map((activity, index) => (
        <ActivityCard
          key={activity.id}
          {...{
            title: activity.title,
            frequency: activity.frequency,
            completedCount: activity.completed,
            participantsCount: activity.participants.length,
            author: activity.author.name,
            onPress: () => onPressIdea(activity),
            isLast: index === activities.length - 1,
          }}
        />
      ))}
    </ScrollView>
  )
}

ActivitiesScreen.options = (): Options => ({
  topBar: {
    title: {
      text: 'Activities',
    },
  },
})

const activities: Activity[] = [
  {
    id: 0,
    title: 'Daily 100 pushups',
    description:
      "We do 100 strict push-ups at home. It can be split, but the most important thing is to make 100 per day. Stop being lazy and let's deal with me!",
    participants: [
      { id: 0, name: 'Evan Murphy' },
      { id: 1, name: 'Johnny Jones' },
      { id: 2, name: 'Gloria Fisher' },
      { id: 3, name: 'Theresa Henry' },
      { id: 4, name: 'Victoria Wilson' },
      { id: 5, name: 'Connie Russell' },
    ],
    frequency: 'Every two days',
    author: {
      id: 5,
      name: 'Connie Russell',
    },
    completed: 3,
  },
  {
    id: 1,
    title: '#StayHome',
    description:
      'Due to COVID-19 pandemia we stay home as much as possible to minimize social contacts and save others from virus!',
    participants: [
      { id: 0, name: 'Evan Murphy' },
      { id: 1, name: 'Johnny Jones' },
      { id: 2, name: 'Gloria Fisher' },
      { id: 3, name: 'Theresa Henry' },
      { id: 4, name: 'Victoria Wilson' },
      { id: 5, name: 'Connie Russell' },
    ],
    frequency: 'Every day',
    author: {
      id: 2,
      name: 'Gloria Fisher',
    },
    completed: 3,
  },
]

export default ActivitiesScreen
