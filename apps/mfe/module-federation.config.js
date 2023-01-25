module.exports = {
  name: 'mfe',
  exposes: {
    './Module': 'apps/mfe/src/app/remote-entry/entry.module.ts',
    './Request': 'apps/mfe/src/app/modules/request/request.module.ts',
  },
}