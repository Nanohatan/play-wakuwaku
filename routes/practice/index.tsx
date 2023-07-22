import { Head } from "$fresh/runtime.ts";


function Box({title}:string|null){
    return(
        <div class="p-3 min-h-[24em]  bg-MyWhite m-3 
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
        </div>
    )
}
function VideoButton(){
    return (
        <div class="absolute text-MyWhite">
            <button id="toggleButton" class="cursor-pointer	 bg-MyViolet p-3 m-2 rounded-full">
            カメラをオンにする
            </button>

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
    const date = new Date();
    date.setHours(date.getHours() + 1);
  return (
    <>
    <Head>
    <title>QRコードリーダー</title>
    </Head>
    <body>
    <Box title="カメラ映像からQRコードをスキャンしよう！"
    />

    <script type="text/javascript" src="https://unpkg.com/@zxing/browser@latest"></script>
    <script src="prac-script.js"></script>
    </body>
    </>
  );
}
