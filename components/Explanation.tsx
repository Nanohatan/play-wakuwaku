type Props = {
    text: string;
  };
  
export default function Explanation({text,}:Props) {

    return (
      <div
      class="w-full flex px-8 py-10 min-h-[24em]  mt-5 bg-MyWhite
      rounded-xl border-solid border-4 border-MyOrange"
      >
        <div class="text-left left-0">
            <div class="text-3xl text-MyOrange underline ">
            {text}</div>
        </div>
  
      </div>
    );
  }