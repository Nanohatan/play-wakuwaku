import { Head } from "$fresh/runtime.ts";

import  Hero  from "../components/Hero.tsx";
import Explanation from "../components/Explanation.tsx";
import { tx } from "$fresh/plugins/twind.ts";

export default function Home() {

  return (
    <>
      <Head>
        <title>お店屋さんごっこDX</title>
      </Head>
      <div class=" p-4 mx-auto max-w-screen-md">
        <img
          src="/logo.svg"
          class="absolute w-32 h-32"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />

      <div
      class="w-full justify-center">
        <Hero />
        <Explanation text="QRコードの作り方" src="https://docs.google.com/presentation/d/e/2PACX-1vQ9SHQKjt0e0emW7_oidNAAKiUibuwJUVkXUc_2xlD1VCSQUSZpHFvWQrqSaIuKMtZWdedzg_LbprYq/embed?start=false&loop=false&delayms=3000"/>
        <Explanation  text="レジスターの遊び方" src="https://docs.google.com/presentation/d/e/2PACX-1vQDq-dM7EbPVErasZfF5_Wmu7-0vue3a2vFodi4xNnpcEcsTBGbPwmg2YHnz-nD7prpoe_KpTjgBM7a/embed?start=false&loop=false&delayms=3000"/>
      </div>

      </div>
    </>
  );
}
