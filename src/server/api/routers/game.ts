import { ZodBigInt, z } from 'zod';
import {prisma as DB} from '../../db';
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export async function getGame({prisma, input} : {prisma: typeof DB, input: {id: bigint}}) {
    return prisma.game.findUnique({
        where: {
            id: input.id
        }
    })
}

export async function getGames({prisma} : {prisma: typeof DB}) {
    return prisma.game.findMany();
}


export const gameRouter = createTRPCRouter({
    get: publicProcedure
        .input(z.object({id: z.bigint()}))
        .query(async (opts) => {
            const {input, ctx} = opts
            const game = await getGame({prisma: ctx.prisma, input});
            return game;
        }),
    getAll: publicProcedure
                .query(({ctx}) => getGames({prisma: ctx.prisma})),
    create: publicProcedure
                .input(z.object({ name: z.string() }))
                .mutation(async (opts) => {
                    const { input } = opts;

                    // Create a new game in the database
                    const game = await opts.ctx.prisma.game.create({data: input});

                    return game;
                }),
    delete: publicProcedure
                .input(z.object({id: z.bigint()}))
                .mutation( async (opts) => {
                    const { input } = opts;
                    
                    // remove game by id in the db
                    const game = await opts.ctx.prisma.game.delete({ where: {
                        id: input.id,
                    }})

                    return game;
                }),
})