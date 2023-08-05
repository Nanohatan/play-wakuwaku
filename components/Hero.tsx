export default function Hero() {
  return (
    <div
    class="rounded-xl border-double border-8 border-MyOrange"
    >

    <div
      class="w-full flex px-8 py-10 min-h-[24em] justify-center 
      items-center flex-col gap-8 rounded-xl
      bg-cover bg-center bg-MyWhite"
    >
      <div class="space-y-4 text-center z-0">
        <h1 class="text-4xl inline-block font-bold text-MyOrange z-10"
        >お店屋さんごっこDX</h1>
        <p class="text-xl max-w-lg text-MyOrangeLighter"
        >
          QRコードをおもちゃにくっつけて、レジスター遊ぼう！
        </p>
      </div>

      <div class="flex flex-col md:flex-row items-center">
        <a
          href="/make_code"
          class="m-3 block mt-4 cursor-pointer inline-flex items-center group 
          bg-white px-8 py-2 rounded-md font-bold  hover:bg-gray-200
          border-solid border-2 border-MyViolet text-MyViolet"
        >
          QRコードをつくる！
        </a>

        <a
          href="/register"
          class="m-3 block mt-4 cursor-pointer inline-flex items-center group 
          bg-white px-8 py-2 rounded-md font-bold hover:bg-gray-200
          border-solid border-2 border-MyViolet text-MyViolet"
        >
          レジスターであそぶ！
        </a>

      </div>
    </div>
    </div>
  );
}