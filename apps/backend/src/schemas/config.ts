import { Type } from '@sinclair/typebox'

const ConfigSchema = Type.Object({
  DATABASE_URL: Type.String(),
  JWT_SECRET: Type.String()
})

export { ConfigSchema }
