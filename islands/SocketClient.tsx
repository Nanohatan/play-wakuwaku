// CameraButton.tsx

import { useEffect,useState } from "preact/hooks";
import { io } from "https://cdn.socket.io/4.4.1/socket.io.esm.min.js";


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
    const name = document.getElementById("name");
    console.log(data.text.name)
  });
 
}
