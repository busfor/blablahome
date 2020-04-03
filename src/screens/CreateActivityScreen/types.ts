export enum CreateActivityStep {
  title,
  description,
  media,
  frequency,
}

export interface CreateActivityScreenPassProps {
  step: CreateActivityStep
  title?: string
  description?: string
}
