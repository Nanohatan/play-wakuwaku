// const str = "リンゴ"
// var encoder = new TextEncoder("utf-8"),    // utf-8のエンコーダ(文字列→Uint8Array変換)を作成
//     u8array = encoder.encode(str), // => Uint8Array[240, 128, 128, 128, 240, 128, 128, 128, 240, 128, 128, 128, 240, 128, 128, 128, 240, 128, 128, 128]
//     decoder = new TextDecoder("utf-8"),    // utf-8のデコーダ(Uint8Array→文字列)を作成
//     decodedText = decoder.decode(u8array);  // => "あいうえお"
// console.log(u8array,decodedText);
// const qr = new QRious({element: document.getElementById("qrcode"),value:JSON.stringify({ name: u8array, price: 6 })});
// var qrEle = document.getElementsByClassName("qr")
// Array.from(qrEle).map((e) => 
// new QRious({element: e,value:JSON.stringify({ name: u8array, price: 6 })})
// );



const btn = document.getElementById("gen-qr-button");
btn.addEventListener("click", () => {
    const nameElements = document.getElementsByClassName("name");
    const names = Array.from(nameElements).map((input) => input.value);
    const priceElements = document.getElementsByClassName("price");
    const prices = Array.from(priceElements).map((input) => input.value);
    
    names.forEach((name,ind) => {
        if (name !== "") {
            const price = prices[ind]
            genQR(name,price)

            
        } 
        
    });
});
// name、priceからqrコードを1つ作る

// 新にcanvas要素を用意して描画する
function genQR(name,price){
    const div1 = document.createElement("div");
    div1.classList.add("justify-self-center", "col-span-1", "row-span-1", "text-2xl");
    div1.textContent = name;

    const div2 = document.createElement("div");
    div2.classList.add("justify-self-center", "col-span-1", "row-span-1", "text-2xl");
    div2.textContent = price;

    const canvas = document.createElement("canvas");
    canvas.classList.add("justify-self-center", "col-span-1", "row-span-1");
    canvas.height = 100;
    canvas.width = 100;


    const encoder = new TextEncoder("utf-8")    // utf-8のエンコーダ(文字列→Uint8Array変換)を作成
    const u8array = encoder.encode(name)
    new QRious({element: canvas,value:JSON.stringify({ name: u8array, price: price })});

    const resultDiv = document.getElementById("result");
    resultDiv.appendChild(div1);
    resultDiv.appendChild(div2);
    resultDiv.appendChild(canvas);
}


// 印刷ボタンを押したらpdfを出力する
const printBtn = document.getElementById("print-qr-button");
printBtn.addEventListener("click", () => {
    const resultDiv = document.getElementById("result");
    generatePDF()        
});
// JavaScript部分

 async function generatePDF() {
    // jsPDFライブラリを使用して新しいPDFを生成

    // id="result"の範囲を取得し、それをPDFに追加
    const resultDiv = document.getElementById("result");

    // div要素をキャプチャしてCanvasに変換
    const canvas = await html2canvas(resultDiv);

    // jsPDFインスタンスを作成
    const pdf = new jspdf.jsPDF();

    // Canvasの内容をPDFに追加
    // pdf.addImage(canvas, "PNG", 10, 10, 190, 280); // 画像サイズと位置を調整

    // // PDFをダウンロード
    // pdf.save("qrcode.pdf");

    // ブラウザの印刷ダイアログを表示
    window.print();
}
  
