// Libs
import { factory, nullable, primaryKey } from '@mswjs/data'

export const db = factory({
  reserve: {
    id: primaryKey(String),
    name: String,
    address: String,
    city: String,
    state: String,
    photo: String,
    classification: Number,
    type: (String),
    prices: {
      room: Number,
      breakfast: nullable(Number),
      tour: nullable(Number),
      reserve: Number
    },
  },
})