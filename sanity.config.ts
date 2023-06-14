import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {vercelDeployTool} from 'sanity-plugin-vercel-deploy'
import {codeInput} from '@sanity/code-input'

export default defineConfig({
  name: 'default',
  title: 'lavender-dove',

  projectId: '1sz0y5xz',
  dataset: 'production',

  plugins: [codeInput(), deskTool(), visionTool(), vercelDeployTool()],

  schema: {
    types: schemaTypes,
  },
})
