export const getProfilePictureUrl = (userId: string) =>
  `https://graph.facebook.com/${userId}/picture?height=350&width=350`
