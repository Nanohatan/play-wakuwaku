function Button(){
    return <>
    <button onClick={()=>Scan()} class="w-full cursor-pointer text-MyWhite bg-MyViolet p-3 m-2 rounded-full">
    スキャンする
    </button></>
}
function Scan(){
    
}
export default function Reader() {
    return (
       
      <div class="flex gap-2 w-full">
        < Button />
      </div>
    );
  }
  