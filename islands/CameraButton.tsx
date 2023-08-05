// CameraButton.tsx

import { useEffect,useState } from "preact/hooks";
import { io } from "https://cdn.socket.io/4.4.1/socket.io.esm.min.js";


export default function CameraButton() {
    const socket = io("https://polite-goose-51.deno.dev/");

  useEffect(() => {
    socket.on("connection");
    socket.emit("join", { id: window.location.pathname });
    console.log("id is",window.location.pathname);
    

    // クリーンアップ関数を返すことでコンポーネントがアンマウントされたときに socket.io の接続を解除する
    return () => {
      socket.disconnect();
    };
  }, []); // 空の配列を渡すことで一度だけ実行される
  socket.on("register receive info", (data) => {
    console.log("resiter receiveinfo " ,data);
  });
  async function startRead(){
    const codeReader = new ZXingBrowser.BrowserQRCodeReader();
    const sourceElem = document.querySelector('video');
    const controls = await codeReader.decodeFromVideoElement(sourceElem, (result, error, controls) => {

        if (result){
          result.text = JSON.parse(result.text);
          const nameValues = Object.values(result.text.name);
          const uint8Array = new Uint8Array(nameValues);
          const decoder = new TextDecoder("utf-8"),
                decodedText = decoder.decode(uint8Array);  
          result.text.name = decodedText;
          console.log(decodedText);

          result.id=window.location.pathname;
          socket.emit("register send info",result);
          console.log("emit done");
        }
        if (error){
            // console.log("err",error);
        }

      });

    return controls
}

  let isCameraOn = false;
  let stream = null;
  async function startCamera() {
    let facingMode = "user"
    if (navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
      facingMode = { exact: "environment" }
    } 
    try {
      
      stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
          width: 640, height: 480,
          facingMode:facingMode
        }
      })
      const videoElement = document.getElementById('video');
      videoElement.srcObject = stream;
      isCameraOn = true;
    } catch (err) {
      console.error('カメラの起動に失敗しました:', err);
      isCameraOn = false;
    }
  }
  
   function stopCamera() {
    if (stream && stream.getTracks().length > 0) {
      stream.getTracks().forEach((track) => {
          console.log("track stop");
          track.stop();
      });
      isCameraOn = false;
    }
  }
  
  function SwitchCamera() {
    // カメラをオンにする処理
    if (isCameraOn) {
        stopCamera();
        document.getElementById('toggleButton').textContent = 'カメラをオンにする';
      } else {
        startCamera();
        startRead();
        document.getElementById('toggleButton').textContent = 'カメラをオフにする';
      }
  }
  

  return (
    <>
      <button
      id="toggleButton"
        onClick={() => SwitchCamera()}
        class="cursor-pointer bg-MyViolet p-3 m-2 rounded-full"
      >
        カメラをオンにする
      </button>
    </>
  );
}
