
import { Server } from "https://deno.land/x/socket_io@0.1.1/mod.ts";
import { Handlers } from "$fresh/server.ts";


const io = new Server(8000);

io.on("connection", (socket) => {
    console.log(`socket ${socket.id} connected`);
  
    socket.emit("hello", "world");
  
    socket.on("disconnect", (reason) => {
      console.log(`socket ${socket.id} disconnected due to ${reason}`);
    });
  });
// export const handler: Handlers = io.handler()

export const handler: Handlers = {
    async GET(_req, ctx) {
      const resp = await ctx.render();
      resp.headers.set("X-Custom-Header", "Hello");
      return resp;
    },
  };
export default function SocketTest() {
    return <div>
        aaa
        
        <script src="https://cdn.socket.io/4.6.0/socket.io.min.js" integrity="sha384-c79GN5VsunZvi+Q/WObgk2in0CbZsHnjEqvFxC5DxHn9lTfNce2WW6h2pH6u/kF+" crossorigin="anonymous"></script>       
        <script src="../socket_test.js"></script>
    </div>
}