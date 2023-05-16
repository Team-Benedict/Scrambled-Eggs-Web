import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const games = api.game.getAll.useQuery();

  return (
    <>
      <Head>
        <title>Scrambled Eggs: Web</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        {games?.data?.map((item: { name: string }) => <p>{item.name}</p>)}
      </main>
    </>
  );
};

export default Home;
