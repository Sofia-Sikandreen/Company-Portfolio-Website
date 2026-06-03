import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Services } from './collections/Services'
import { Contact } from './collections/Contact'
import { Careers } from './collections/Careers'
import { Applications } from './collections/Applications'
import { Projects } from './collections/Projects'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      titleSuffix: "— Company Portfolio CMS",
    },
    theme: "dark",
    dateFormat: "dd/MM/yyyy",
  },
  collections: [Users, Media, Services, Contact, Careers, Applications, Projects],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  serverURL: 'https://cms-production-efe7.up.railway.app',

  cors: [
    'http://localhost:3001',
    'http://127.0.0.1:3001',
    'https://company-portfolio-website-silk.vercel.app',
    'https://cms-production-efe7.up.railway.app',
  ],

  csrf: [
    'http://localhost:3001',
    'http://127.0.0.1:3001',
    'https://company-portfolio-website-silk.vercel.app',
    'https://cms-production-efe7.up.railway.app',
  ],

  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),
  sharp,
  plugins: [],
})
