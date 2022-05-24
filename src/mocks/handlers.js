// Libs
import { rest } from 'msw';

// Data
import {hotelsData} from './hotels';

export const handlers = [
  rest.get('/hotels', (req, res, ctx) => {
    return res(
      ctx.delay(1500),
      ctx.status(200),
      ctx.json(hotelsData),
    )
  }),
]