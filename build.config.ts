import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  declaration: true,
  replace: {
    'import.meta.vitest': undefined,
  },
  rollup: {
    emitCJS: true,
  },
  entries: ['src/index.ts'],
})
