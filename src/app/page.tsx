"use client";
import Image from "next/image";
import Card from "./component/card";
import { useEffect, useState } from "react";

export default function Home() {
  // const [value, setValue] = useState(0);
  // useEffect(() => {
  //   play();
  // }, [value]);
  // function play() {
  //   new Audio("/sound.wav").play();
  // }
  return (
    // <main className="flex min-h-screen item-center justify-center ">
    //   <div className="group h-96 w-64 [perspective-1000px]">
    //     <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[rotateY(180deg)]">
    //       <div className="absolute inset-0">
    //         <CardFlip />
    //       </div>
    //       {/* <div className="absolute inset-0 h-full rounded-xl bg-black/40 px-12 text-center text-slate-200 [transform:rotateY(180deg)][backface-visibility:hidden]"></div> */}
    //     </div>
    //   </div>
    // </main>
    <main className="flex min-h-screen items-center justify-center">
      <picture>
        <source media="(max-width: 768px)" srcSet="/bg.jpg" />
        <Image src={"/background.jpg"} alt={"background"} fill={true} />
      </picture>

      <div className="group h-96 w-64 [perspective:1000px]">
        <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className="absolute inset-0">
            <Card />
          </div>

          <Image
            src={"/back.png"}
            alt={"raya"}
            width={900}
            height={1280}
            className="h-full w-full rounded-xl object-full shadow-xl [transform:rotateY(180deg)] [backface-visibility:hidden]"
          />
        </div>
        {/* <button
          onClick={() => setValue(value + 1)}
          className="m-5 item-center justify-center"
        >
          Play Sound
        </button> */}
      </div>
    </main>
  );
}
