"use client"
import Image from "next/image";
import State from "./State";

export default function Home() {
  const fun = () => {
    alert("Hello Romicha")
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
     {/* <h1></h1>
     <button onClick={fun}>Click me</button> */}
     <State/>
    </div>
  );
}
