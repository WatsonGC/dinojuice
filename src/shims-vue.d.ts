// Mocks all files ending in `.vue` showing them as plain Vue instances
/* eslint-disable */

declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const component: ComponentOptions
  export default component
}
