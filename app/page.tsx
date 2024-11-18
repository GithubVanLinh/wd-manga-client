"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [text, setText] = useState("");

  useEffect(() => {
    const timeoutIds: NodeJS.Timeout[] = [];

    const showText = "I Love You so much...";
    for (let i = 0; i < showText.length; i++) {
      console.log(text);
      const timeoutId = setTimeout(() => {
        setText((prev: string) => prev + showText.charAt(i));
      }, i * 100);

      timeoutIds.push(timeoutId);
    }

    return () => {
      timeoutIds.forEach((id: NodeJS.Timeout) => clearTimeout(id));
    };
  }, []);

  return (
    <div>
      <div className="text-white z-10 relative w-screen h-screen flex justify-center items-center">
        {text}|
      </div>
      <Image fill src={"/back.jpg"} alt="backgroud"></Image>
    </div>
  );
}
