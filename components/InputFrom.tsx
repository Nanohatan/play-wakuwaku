
export default function InputForm() {

    return (
        <div
        class="p-3 min-h-[24em]  bg-MyWhite m-3
        rounded-xl border-solid border-4 border-MyOrange"
        >
          <div class="left-0">
              <div class="text-3xl text-MyOrange underline ">
                QRコード作成
              </div>

              <div class="m-3 border-solid border-2 border-MyOrange">

                <div class="p-1">
                <input type="text" class=" form-input px-3 m-1 border-solid border-2 border-MyOrangeLighter" />
                <input type="text" class=" form-input px-3 m-1 border-solid border-2 border-MyOrangeLighter" />
                <input type="text" class=" form-input px-3 m-1 border-solid border-2 border-MyOrangeLighter" />
                </div>

                <div class="p-2">
                <div class="grid grid-cols-3  gap-4">
                <div class="col-span-2 border-solid border-2 border-MyOrangeLighter">アイテムメイ</div>
                <div class="col-span-1 border-solid border-2 border-MyOrangeLighter"><span>1000</span>円</div>

                <div class="col-span-2 border-solid border-2 border-MyOrangeLighter">04</div>
                <div class="col-span-1 w-full border-solid border-2 border-MyOrangeLighter justify-self-center"
                ><span class="">1000</span>円</div>
                </div>
                </div>

                <div>
                <button class="rounded-full cursor-pointer block rounded-md font-bold m-3 p-3 bg-MyWhite text-MyViolet hover:bg-gray-200 border-solid border-2 border-MyViolet">QRコードを作る</button>
                </div>
                
              </div>
           </div>
    
        </div>
    );
  }