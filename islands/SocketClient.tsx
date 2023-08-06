// CameraButton.tsx

import { useEffect,useState } from "preact/hooks";
import { io } from "https://cdn.socket.io/4.4.1/socket.io.esm.min.js";
import DisplayBit from "../routes/register/[id].tsx"

export default function SocketClient({id}) {
    const socket = io("https://polite-goose-51.deno.dev/");
    console.log(id);

  useEffect(() => {
    socket.on("connection");
    socket.emit("join", { id: id });
    console.log("id is",id);
    

    // クリーンアップ関数を返すことでコンポーネントがアンマウントされたときに socket.io の接続を解除する
    return () => {
      socket.disconnect();
    };
  }, []); // 空の配列を渡すことで一度だけ実行される
  socket.on("register receive info", (data) => {
    const audio = new Audio('/audio.mp3');
    audio.play();
    const nameDisplayDiv = document.getElementById("name");
    const name =  data.text.name;
    const priceDisplayDiv = document.getElementById("price");
    const price =  data.text.price;
    nameDisplayDiv.textContent = name;
    priceDisplayDiv.value = price;

    // if (price.length<5){
    //     for (let i = 0; i < price.length-5; i++) {
    //         const divElement = document.createElement("div");
    //         divElement.className = "col-span-1 text-center border-dashed border-x-2 border-MyViolet border-b-4 border-MyViolet";
    //         priceDisplayDiv.appendChild(divElement);
    //       }
    // }




  });
 
}
