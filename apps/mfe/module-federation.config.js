module.exports = {
  name: 'mfe',
  exposes: {
    './Module': 'apps/mfe/src/app/remote-entry/entry.module.ts',
    './S1Intro': 'apps/mfe/src/app/modules/request/s1-intro/s1-intro.module.ts',
  },
}