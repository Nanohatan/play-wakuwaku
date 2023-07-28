import { PageProps } from "$fresh/server.ts";


function Calculator(){
  return <>
  <div class="m-3 border-solid border-4 border-MyOrange">
  <div class="grid grid-cols-5 grid-flow-col gap-4 border-solid border-4 border-MyOrangeLighter">
  <div class="col-span-3 m-2">

    <div>
    <div class="grid grid-cols-3 gap-4">

  <div class="block px-8 py-2 rounded-md border-solid border-2 border-MyViolet text-MyViolet">
    7</div>
  <div class="block px-8 py-2 rounded-md border-solid border-2 border-MyViolet text-MyViolet">
    8</div>
  <div class="block px-8 py-2 rounded-md border-solid border-2 border-MyViolet text-MyViolet">
    9</div>
  <div class="block px-8 py-2 rounded-md border-solid border-2 border-MyViolet text-MyViolet">
    4</div>
  <div class="block px-8 py-2 rounded-md border-solid border-2 border-MyViolet text-MyViolet">
    5</div>
  <div class="block px-8 py-2 rounded-md border-solid border-2 border-MyViolet text-MyViolet">
    6</div>
  <div class="block px-8 py-2 rounded-md border-solid border-2 border-MyViolet text-MyViolet">
    1</div>
  <div class="block px-8 py-2 rounded-md border-solid border-2 border-MyViolet text-MyViolet">
    2</div>
  <div class="block px-8 py-2 rounded-md border-solid border-2 border-MyViolet text-MyViolet">
    3</div>

    </div>
    </div>

  </div>
  <div class="col-span-2 m-2">01</div>
  </div>
  </div>
  </>
}

export default function Register(props: PageProps) {
  console.log(props.params.id);
  return <>
    <div class="p-3 min-h-[24em] z-0 bg-MyWhite m-3 
rounded-xl border-solid border-4 border-MyOrange">
 <Calculator />
</div>
  </>

}
