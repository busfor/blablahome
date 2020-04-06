import React, { memo } from 'react'
import { noop } from 'lodash'

import { Participation } from '../../../../AppPropTypes'
import ProgressCard from '../ProgressCard'
import { Section, Touchable } from '../../../../component'

export default memo(({ participations, title, handleAcivityPress }: Props) => {
  if (participations.length === 0) {
    return null
  }

  return (
    <Section {...{ title }}>
      {participations.map((participation) => (
        <Touchable
          onPress={() => (handleAcivityPress ? handleAcivityPress(participation) : noop)}
          key={participation.id}
        >
          <ProgressCard
            {...{
              title: participation.activity.name,
              progress: participation.progress,
              goal: participation.activity.days,
              handleAcivityPress,
            }}
          />
        </Touchable>
      ))}
    </Section>
  )
})

interface Props {
  participations: Participation[]
  title: string
  handleAcivityPress?(participation: Participation): void
}
