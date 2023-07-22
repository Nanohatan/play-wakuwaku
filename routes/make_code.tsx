import { Head } from "$fresh/runtime.ts";
import InputForm from "../components/InputFrom.tsx";

export default function makeQR() {
    return <>
    <InputForm text="QRコード作成" input={2}/>
    </>
}