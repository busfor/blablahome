import React, { memo } from 'react'

import { Participation } from '../../../../AppPropTypes'
import ProgressCard from '../ProgressCard'
import { Section } from '../../../../component'

export default memo(({ participations, title }: Props) => {
  if (participations.length === 0) {
    return null
  }

  return (
    <Section {...{ title }}>
      {participations.map((participation) => (
        <ProgressCard
          key={participation.id}
          {...{
            title: participation.activity.name,
            progress: participation.progress,
            goal: participation.activity.days,
          }}
        />
      ))}
    </Section>
  )
})

interface Props {
  participations: Participation[]
  title: string
}
