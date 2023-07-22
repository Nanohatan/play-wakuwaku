import { Head } from "$fresh/runtime.ts";

export default function Home() {
    const date = new Date();
    date.setHours(date.getHours() + 1);
  return (
    <>
    <Head>
    <title>QRコードリーダー</title>
    </Head>
    <body>
    <h1>カメラ映像からQRコードを読み込む</h1>
    <button id="toggleButton">カメラを切り替え</button>
    <video id="video" width="640" height="480" autoplay></video>
    <canvas id="canvas" style="display:none;"></canvas>
    <div id="result"></div>
    <script type="text/javascript" src="https://unpkg.com/@zxing/browser@latest"></script>
    <script src="prac-script.js"></script>
    </body>
    </>
  );
}
