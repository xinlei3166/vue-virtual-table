import type { App, Plugin } from 'vue'
import Spin, { setDefaultIndicator } from './Spin'

export type { SpinProps } from './Spin'

Spin.setDefaultIndicator = setDefaultIndicator
Spin.install = function (app: App) {
  app.component(Spin.name, Spin)
  return app
}

export default Spin as typeof Spin &
  Plugin & {
    readonly setDefaultIndicator: typeof setDefaultIndicator
  }
