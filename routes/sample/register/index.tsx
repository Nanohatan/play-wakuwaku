function generateRandomString(length: number): string {
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let result = "";
const charactersLength = characters.length;
for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
}
return result;
}
  
const randomString = generateRandomString(10);
  
export function handler(req: Request): Response {
    return new Response("", {
      status: 307,
      headers: { Location: "register/"+randomString },
    });
  }