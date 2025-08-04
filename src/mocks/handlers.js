// src/mocks/handlers.js

import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:3000/api/destinations", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { id: 1, name: "Paris" },
        { id: 2, name: "Tokyo" },
      ])
    );
  }),

  rest.get("http://localhost:3000/api/destinations/:id", (req, res, ctx) => {
    const { id } = req.params;
    return res(ctx.status(200), ctx.json({ id, name: `Destination ${id}` }));
  }),

  rest.post("http://localhost:3000/api/destinations", (req, res, ctx) => {
    return res(ctx.status(201));
  }),

  rest.put("http://localhost:3000/api/destinations/:id", (req, res, ctx) => {
    return res(ctx.status(200));
  }),

  rest.delete("http://localhost:3000/api/destinations/:id", (req, res, ctx) => {
    return res(ctx.status(204));
  }),
];
