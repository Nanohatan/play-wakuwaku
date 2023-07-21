export default function Hero() {
  return (
    <div
      class="w-full flex px-8 py-10 min-h-[24em] justify-center items-center flex-col gap-8 bg-cover bg-center bg-no-repeat bg-gray-100 rounded-xl text-white"
      style="background-color:#FFF6F4;"
    >
      <div class="space-y-4 text-center">
        <h1 class="text-4xl inline-block font-bold"
        style="color:#F86F03;"
        >お店屋さんごっこDX</h1>
        <p class="text-xl max-w-lg"
        style="color:#FFA41B;">
          QRコードをおもちゃにくっつけてレジスターごっこ！
        </p>
      </div>

      <div class="flex flex-col md:flex-row items-center">
        <a
          href="#"
          class="m-3 block mt-4 cursor-pointer inline-flex items-center group bg-white px-8 py-2 rounded-md font-bold hover:bg-gray-200"
          style="color:#525FE1; border:2px solid #525FE1;"
        >
          QRコードをつくる！
        </a>

        <a
          href="#"
          class="m-3 block mt-4 cursor-pointer inline-flex items-center group bg-white px-8 py-2 rounded-md font-bold hover:bg-gray-200"
          style="color:#525FE1; border:2px solid #525FE1;"
        >
          レジスターであそぶ！
        </a>

      </div>
    </div>
  );
}