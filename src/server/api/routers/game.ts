import { z } from 'zod';

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const gameRouter = createTRPCRouter({
    getAll: publicProcedure
                .query(({ctx}) => {return ctx.prisma.game.findMany()}),
    create: publicProcedure
                .input(z.object({ name: z.string() }))
                .mutation(async (opts) => {
                    const { input } = opts;

                    // Create a new game in the database
                    const game = await opts.ctx.prisma.game.create({data: input});

                    return game;
                })
})