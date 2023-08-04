import InputForm from "./InputFrom.tsx";
type Props = {
    text: string;
  };
  
export default function Explanation({text,src}:Props) {

    return (
      <div
      class="w-full px-8 py-10 min-h-[24em]  mt-5 bg-MyWhite
      rounded-xl border-solid border-4 border-MyOrange"
      >
        <div class="text-left left-0">
            <div class="text-3xl text-MyOrange underline ">
            {text}</div>  
            <div class="p-3">
            <iframe src={src} frameborder="0" width="100%" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>        </div>
            </div>


      </div>
    );
  }