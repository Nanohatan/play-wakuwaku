import { Head } from "$fresh/runtime.ts";

import Counter from "../islands/Counter.tsx";
import  Hero  from "../components/Hero.tsx";
import Explanation from "../components/Explanation.tsx";
export default function Home() {

  return (
    <>
      <Head>
        <title>お店屋さんごっこDX</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <img
          src="/logo.svg"
          class="absolute w-32 h-32"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />

      <div
      class="w-full justify-center">
        <Hero />
        <Explanation text="QRコードの作り方"/>
        <Explanation  text="レジスターの遊び方"/>
      </div>

      </div>
    </>
  );
}
