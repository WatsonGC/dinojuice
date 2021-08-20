/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// import something here
import _, { LoDashStatic } from 'lodash';
import { boot } from 'quasar/wrappers';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    _: LoDashStatic;
  }
}

// leave the export, even if you don't use it
export default boot(({ app }) => {
  app.config.globalProperties._ = _;
});

export { _ };
