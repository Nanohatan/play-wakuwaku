
function playSound(key){
    const audio = new Audio('/audio.mp3');
    audio.play();
    document.getElementById('price').value += key;
    
}

function CalculatorButton({buttonNumber}:number){
  return <>
  <button onClick={()=>playSound(buttonNumber)}
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

export default function RegisterSound({isNormalBtn}) {
    if (isNormalBtn){
        return( 
            <>
            <div class="grid grid-cols-3  grid-rows-3 gap-4">
              <InputButton/>
            </div>
            </>)
    }else{
        const i: string[] = ["+","x","÷"]
        return (
            <div class="grid grid-cols-3">
                {i.map((element) => (
                <button onClick={()=>playSound(element)}
                class="block mx-2 text-center py-2  col-span-1
                rounded-md border-solid border-2 border-MyViolet text-MyViolet"
                >
                  {element}</button>
                
            ))}
            </div>
        )
    }
    
}