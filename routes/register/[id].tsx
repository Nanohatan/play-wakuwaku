import { PageProps } from "$fresh/server.ts";

function CalculatorButton({buttonNumber}:number){
  return <>
  <div class="block text-center py-2 
  rounded-md border-solid border-2 border-MyViolet text-MyViolet"
  data-number={buttonNumber}>
    {buttonNumber}</div>
  </>
}

function InputButton(){
  const NumberList: number[] = [7,8,9,4,5,6,1,2,3]
  return <>
  {NumberList.map((element) => (
      <CalculatorButton buttonNumber={element} />
  ))}
  </>
}

function DisplayBit({n}:number){
  return <>
  
  <div class="col-span-1 text-center border-dashed border-x-2 border-MyViolet border-b-4 border-MyViolet ">{n}</div>
  </>
}

function Calculator(){
  
  return <>
  <div class="m-3 border-solid border-4 border-MyOrange">
  <div class="grid grid-cols-5 grid-rows-3 gap-4 border-solid border-4 border-MyOrangeLighter">
  <div class="col-span-3 row-span-3 m-2">

    <div class="grid grid-cols-3  grid-rows-3 gap-4">
      <InputButton/>
    </div>


  </div>

  <div class="col-span-2 row-span-2 m-2 text-right 
  border-solid border-4 border-MyViolet">
   <div class="p-1 row-span-1 border-dashed border-b-4 border-MyViolet">
    リンゴ</div>

    <div class="row-span-1">
      
    <div class="grid grid-cols-5 grid-rows-1">
    <DisplayBit/>
    <DisplayBit/>
    <DisplayBit/>
     <DisplayBit n="1" />      
      <DisplayBit n="0"/>
      
    </div>
      
    </div>


  </div>

  </div>
  </div>
  </>
}

export default function Register(props: PageProps) {
  const id = props.url.pathname.split("/").pop();
  return <>
    <div class="p-3 min-h-[24em] z-0 bg-MyWhite m-3 
rounded-xl border-solid border-4 border-MyOrange">
 <Calculator />
 
</div>

  </>

}
