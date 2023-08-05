import { Head } from "$fresh/runtime.ts";
import Reader from "../../islands/Reader.tsx";
import CameraButton from "../../islands/CameraButton.tsx";
import { PageProps } from "$fresh/server.ts";


function Box({title,id}:string|null){
    return(
        <div class="p-3 min-h-[24em] z-0 bg-MyWhite m-3 
        rounded-xl border-solid border-4 border-MyOrange">

            <h1 class="text-3xl text-MyOrange">{title}</h1>
            <VideoButton id={id}/>
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
function VideoButton(id){
    return (
        <div class="absolute text-MyWhite z-10">
            <CameraButton id = {id}/>

        </div>
    )
}

function ScanItemBox(){
    return(
        <div class="m-5 border-2 border-MyOrange min-h-[12em] p-3">

            <div  id="scan-list" class="grid grid-cols-3 gap-2 p-1  text-MyOrangeLighter font-bold	">
            <div class="col-span-3 justify-self-center"> スキャンしたものリスト</div>

            </div>
        </div>
    )
}
export default function Home(props: PageProps) {
  const id = props.params.id;

  return (
    <>
    <Head>
    <title>QRコードリーダー</title>
    </Head>
    <body>
    <Box title="カメラ映像からQRコードをスキャンしよう！" id={id}
    />

    <script type="text/javascript" src="https://unpkg.com/@zxing/browser@latest"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.7.1/socket.io.js"></script>
    </body>
    </>
  );
}
