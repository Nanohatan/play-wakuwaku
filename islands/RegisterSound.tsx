
function playSound(){
    const audio = new Audio('/audio.mp3');
    audio.play();

}
function CalculatorButton({buttonNumber}:number){
  return <>
  <button onClick={()=>playSound()}
  class="block text-center py-2 
  rounded-md border-solid border-2 border-MyViolet text-MyViolet"
  data-number={buttonNumber}>
    {buttonNumber}</button>
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

export default function RegisterSound() {
    return( 
    <>
    <div class="grid grid-cols-3  grid-rows-3 gap-4">
      <InputButton/>
    </div>
    </>)
}