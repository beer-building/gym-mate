import { z } from 'zod'
import { config } from 'dotenv'

config({
	path: '../../.env'
})

const envSchema = z.object({
	BOT_TOKEN: z.string(),
	BACKEND_URL: z.string()
})

// TODO: replace with typebox
const envValidationResult = envSchema.safeParse(process.env)

if (!envValidationResult.success) {
	console.error('Invalid environment variables:', envValidationResult.error.errors)
	process.exit(1)
}

if (envValidationResult.success) {
	console.log('Environment variables are valid')
}

const env = envValidationResult.data

export const BOT_TOKEN = env.BOT_TOKEN
export const BACKEND_URL = env.BACKEND_URL
