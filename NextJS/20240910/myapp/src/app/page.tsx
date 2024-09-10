"use client";

import { useAtom } from "jotai";
import Image from "next/image";
import { countAtom } from "./state/countAtom";
import { useEffect, useState } from "react";
import CAT from "../../public/OIP.png";

export default function Home() {
  const [count, setCount] = useAtom(countAtom);
  const [c, setC] = useState("")

  useEffect(() => {
    console.log(count);
  }, [count])

  return (
    <div className="">  m n,m n, mn,,,,,,
      <Image src={CAT} alt="" width={100 } height={100} style={{ width: 'auto', height: 'auto' }} placeholder="blur" onLoad={(img) => console.log(img)}/>
      {/* <img src="/OIP.png" alt="" /> */}
      <div>{count}</div>
      <input type="text" value={c} onChange={(e) => setC(e.target.value)} />
      <button onClick={() => setCount((prev) => prev + 1)}>증가</button>
    </div>
  );
}
