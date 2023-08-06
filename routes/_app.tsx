import { AppProps } from "$fresh/server.ts";
export default function App({ Component, state }: AppProps) {
  //do something with state here
  return (<>
  <body class="bg-repeat" style="background-image: url(/お腹いっぱい柴犬さん.jpg)">
  <Component />
  </body>
  </>
  );
}