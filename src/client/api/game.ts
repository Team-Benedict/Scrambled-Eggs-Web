import { game } from "@prisma/client";
import { api } from "./";

export const Game = (): {
  create: (name: string, callback: (g: game) => void) => void;
  delete: (id: bigint, callback: (g: game) => void) => void;
} => {
  const { mutateAsync: createGame } = api.game.create.useMutation();

  const {
    data: deletedGame,
    mutateAsync: deleteGame,
    isSuccess: gameDeleteSuccess,
  } = api.game.delete.useMutation();

  return {
    create: (name: string, callback: (g: game) => void) => {
      createGame(
        { name },
        {
          onSettled(data) {
            if (data) {
              callback(data);
            }
          },
          onError(error) {
            throw error;
          },
        }
      );
    },
    delete: async (id: bigint, callback: (g: game) => void) => {
      try {
        await deleteGame(
          { id },
          {
            onSettled(data) {
              if (data) {
                callback(data);
              }
            },
            onError(error) {
              throw error;
            },
          }
        );
      } catch (e) {
        throw e;
      }
    },
  };
};
