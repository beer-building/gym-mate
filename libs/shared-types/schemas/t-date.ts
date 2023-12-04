import { Type, type TDate as TDateType } from '@sinclair/typebox'

// Convert to date-time, as for satisfies types from Prisma
export const TDate = () => Type.String({ format: 'date-time' }) as unknown as TDateType
