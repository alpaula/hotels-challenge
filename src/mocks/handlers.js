// Libs
import { rest } from 'msw';
import { db } from './db';
import { nanoid } from 'nanoid';

// Data
import { hotelsData } from './hotels';

export const handlers = [
  rest.get('/hotels', (req, res, ctx) => {
    return res(
      ctx.delay(1500),
      ctx.status(200),
      ctx.json(hotelsData),
    )
  }),
  rest.post('/reserve', (req, res, ctx) => {
    db.reserve.create({
      ...req.body,
      id: nanoid()
    });

    return res(
      ctx.status(200),
    )
  }),
  rest.get('/reserve', (req, res, ctx) => {
    const data = db.reserve.getAll();

    return res(
      ctx.delay(1500),
      ctx.status(200),
      ctx.json(data),
    )
  }),
]