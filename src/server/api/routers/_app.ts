import { router, publicProcedure } from '../trpc';
import { z } from 'zod';

export const appRouter = router({
  hello: publicProcedure.input(z.object({ text: z.string() }).optional()).query(({ input }) => {
    return {
      greeting: `Hello ${input?.text ?? 'World'}!`,
    };
  }),
});

export type AppRouter = typeof appRouter;
