export const frequency = [
  {
    id: 1,
    label: '1 day per week',
  },
  {
    id: 2,
    label: '2 days per week',
  },
  {
    id: 3,
    label: '3 days per week',
  },
  {
    id: 4,
    label: '4 days per week',
  },
  {
    id: 5,
    label: '5 days per week',
  },
  {
    id: 6,
    label: '6 days per week',
  },
  {
    id: 7,
    label: 'Whole week',
  },
]

export const getFrequency = (id: number) => frequency.find((variant) => variant.id === id)?.label || ''
