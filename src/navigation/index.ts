import { Options, Navigation, Layout, LayoutRoot, OptionsTopBarButton } from 'react-native-navigation'
import { noop } from 'lodash'

import { backIcon } from '../images'

let openEnabled = true

const setRoot = (layout: LayoutRoot) => {
  dismissAllModals()
  Navigation.setRoot(layout).catch(noop)
}

const setStackRoot = <P>(componentId: string, layout: Layout<P>) => {
  Navigation.setStackRoot<P>(componentId, layout).then(noop).catch(noop)
}

const dismissAllModals = (mergeOptions?: Options) => {
  Navigation.dismissAllModals(mergeOptions).then(noop).catch(noop)
}

const showOverlay = (layout: Layout) => {
  Navigation.showOverlay(layout).then(noop).catch(noop)
}

const dismissOverlay = (componentId: string) => {
  Navigation.dismissOverlay(componentId).then(noop).catch(noop)
}

const dismissModal = (componentId: string, mergeOptions?: Options) =>
  new Promise((resolve) => {
    Navigation.dismissModal(componentId, mergeOptions).then(resolve).catch(noop)
  })

const popToRoot = (componentId: string, mergeOptions?: Options) => {
  Navigation.popToRoot(componentId, mergeOptions).then(noop).catch(noop)
}

const popTo = (componentId: string, mergeOptions?: Options) => {
  Navigation.popTo(componentId, mergeOptions).then(noop).catch(noop)
}

const pop = (componentId: string, mergeOptions?: Options) => {
  Navigation.pop(componentId, mergeOptions).then(noop).catch(noop)
}

const push = <P>(componentId: string, layout: Layout<P>) =>
  new Promise((resolve) => {
    if (!openEnabled) {
      return
    }
    openEnabled = false
    Navigation.push<P>(componentId, layout)
      .then(() => {
        openEnabled = true
        resolve()
      })
      .catch(noop)
  })

const showModal = <P>(layout: Layout<P>) =>
  new Promise((resolve) => {
    if (!openEnabled) {
      return
    }
    openEnabled = false
    Navigation.showModal<P>(layout)
      .then(() => {
        openEnabled = true
        resolve()
      })
      .catch(resolve)
  })

const AppNavigation = {
  setRoot,
  setStackRoot,
  dismissAllModals,
  dismissModal,
  dismissOverlay,
  showOverlay,
  popToRoot,
  popTo,
  pop,
  push,
  showModal,
}

export interface AppNavigationProps {
  componentId: string
}

export { AppNavigation }

export const modalBackButton = (): OptionsTopBarButton => ({
  id: 'back',
  icon: backIcon,
})
