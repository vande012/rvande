import {defineConfig, isDev} from 'sanity'
import {visionTool} from '@sanity/vision' //where is the visionTool in the project? // <--- import the vision too
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas/schema'
import {getStartedPlugin} from './plugins/sanity-plugin-tutorial'

const devOnlyPlugins = [getStartedPlugin()]

export default defineConfig({
  name: 'default',
  title: 'portfolio',
  projectId: 'h5ln1dn6',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), ...(isDev ? devOnlyPlugins : [])],

  schema: {
    types: schemaTypes,
  },
})

