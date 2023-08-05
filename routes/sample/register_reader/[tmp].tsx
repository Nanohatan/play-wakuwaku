import { Head } from "$fresh/runtime.ts";
import Reader from "../../../islands/Reader.tsx";
import CameraButton from "../../../islands/CameraButton.tsx";
function Box({title}:string|null){
    return(
        <div class="p-3 min-h-[24em] z-0 bg-MyWhite m-3 
        rounded-xl border-solid border-4 border-MyOrange">

            <h1 class="text-3xl text-MyOrange">{title}</h1>
            <VideoButton />
            <CodeReader />
            <ScanItemBox />
        </div>

    )
}
function CodeReader(){
    return (
        <div class="m-5">
            <video id="video" height="auto" width="100%" 
            class="w-full border-2 border-MyOrange  max-h-200"
            ></video>
            
            <Reader/>
        </div>
    )
}
function VideoButton(){
    return (
        <div class="absolute text-MyWhite z-10">
            <CameraButton/>

        </div>
    )
}

function ScanItemBox(){
    return(
        <div class="m-5 border-2 border-MyOrange min-h-[12em] p-3">

            <div class="grid grid-cols-3 gap-2 p-1  text-MyOrangeLighter font-bold	">
            <div class="col-span-3 justify-self-center"> スキャンしたものリスト</div>

                <div class="col-span-2 justify-self-center">アイテムメイ</div>
                <div class="col-span-1 justify-self-right"><span>100</span>円</div>

                <div class="col-span-2 justify-self-center">アイテムメイ</div>
                <div class="col-span-1 justify-self-right"><span>100</span>円</div>


            </div>
        </div>
    )
}
export default function Home() {
  return (
    <>
    <Head>
    <title>QRコードリーダー</title>
    </Head>
    <body>
    <Box title="カメラ映像からQRコードをスキャンしよう！"
    />

    <script type="text/javascript" src="https://unpkg.com/@zxing/browser@latest"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.7.1/socket.io.js"></script>
    </body>
    </>
  );
}
