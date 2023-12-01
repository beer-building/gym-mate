import { Type, TDate as TDateType } from '@sinclair/typebox';

export const TDate = () => Type.Number() as unknown as TDateType;
