import { z } from 'zod';

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const gameRouter = createTRPCRouter({
    getAll: publicProcedure.query(({ctx}) => {return ctx.prisma.game.findMany()})
})