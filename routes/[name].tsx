import { PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export default function Greet(props: PageProps) {
  return <>
        <Head>
        <title>存在しないページ</title>
      </Head>
      <div
      class="w-full p-8 text-center justify-center min-h-[24em] bg-MyWhite 
      rounded-xl border-double border-8 border-MyOrange">
        <div class=" text-4xl inline-block font-bold text-MyOrange">
        このページ（{props.params.name}）は存在しないよ！
        </div>
        <div class="m-5">
          <a href="/" class="text-MyViolet px-8 underline">トップに戻る</a>
        </div>
         
      </div>
      
  </>
}
