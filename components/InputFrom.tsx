
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

                <div class="grid grid-cols-3  gap-4">
                <div class="col-span-2 border-solid border-2 border-MyOrangeLighter">02</div>
                <div class="col-span-1 border-solid border-2 border-MyOrangeLighter">03</div>
                <div class="col-span-2 border-solid border-2 border-MyOrangeLighter">04</div>
                
                </div>

                
              </div>
           </div>
    
        </div>
    );
  }