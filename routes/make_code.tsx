import { Head } from "$fresh/runtime.ts";
import InputForm from "../components/InputFrom.tsx";

function InputRow(){
    return <>
    <input class="name col-span-2 mt-2 mx-2 border-solid border-2 border-MyOrangeLighter" 
    placeholder="ショウヒンメイ" type="text" />
    <input class="price col-span-1 mt-2 mx-2 border-solid border-2 border-MyOrangeLighter" 
    placeholder="1000" type="number"/>
</>
}

function InputGrid(){
    return <>
    <Head>
    <title>QRコード作成</title>
    </Head>
    <div>
    <div class="m-3 border-solid border-2 border-MyOrange">
    <div class="grid grid-cols-3  gap-4">

        <InputRow />

        <div class="col-span-3 justify-self-center ">
        <button id="gen-qr-button" class="rounded-full cursor-pointer block rounded-md font-bold m-3 p-3 bg-MyWhite text-MyViolet hover:bg-gray-200 border-solid border-2 border-MyViolet">
            QRコードを作る</button>
        </div>
    </div>
    
    </div>
    </div></>
}

function FormBox(){
    return <>
    <div
    class="p-3 min-h-[12em]  bg-MyWhite m-3
    rounded-xl border-solid border-4 border-MyOrange"
    >

    <div class="left-0">
    <div class="text-3xl text-MyOrange underline">
    QRコード作成
    </div>
    <InputGrid />

    </div>
    </div>
    </>

}


function ResultText({text}:string){
    return <>
    <div class="justify-self-center col-span-1 row-span-1 text-2xl">{text}</div>

    </>
}
function ResultBox(){
    return <>
    <div
    class="p-3 min-h-[24em]  bg-MyWhite m-3
    rounded-xl border-solid border-4 border-MyOrange"
    >

    <div class="left-0">
    <div class="text-3xl text-MyOrange underline">
    コード一覧
    </div>


    <div class="m-3 border-solid border-2 border-MyOrange">
        <div id="result" class="grid grid-cols-3 p-5 text-MyOrange">


        </div>

        <div class="">
        <button id="print-qr-button" class="rounded-full cursor-pointer block rounded-md font-bold m-3 p-3 bg-MyWhite text-MyViolet hover:bg-gray-200 border-solid border-2 border-MyViolet">
            QRコードを印刷する
        </button>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
        
        <script src="https://cdn.jsdelivr.net/npm/html2canvas@1.0.0-rc.5/dist/html2canvas.min.js"></script>

        </div>


        
        
        


    </div>



    <script src="https://cdnjs.cloudflare.com/ajax/libs/qrious/4.0.2/qrious.min.js"></script>
    <script src="qrcode.js"></script>

    </div>
    </div>
    </>
    
}
export default function makeQR() {
    return <>
    <FormBox />
    <ResultBox />
    </>
}