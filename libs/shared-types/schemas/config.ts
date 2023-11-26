import { Type } from '@sinclair/typebox'

const ConfigSchema = Type.Object({
	JWT_SECRET: Type.String()
})

export { ConfigSchema }
