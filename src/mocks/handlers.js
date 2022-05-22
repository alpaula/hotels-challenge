// Libs
import { rest } from 'msw';

// Data
import {hotelsData} from './hotels';

export const handlers = [
  rest.get('/hotels', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(hotelsData),
    )
  }),
]