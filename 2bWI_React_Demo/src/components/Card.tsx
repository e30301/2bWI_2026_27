import { generateMnemonic } from 'bip39';
import { useState } from 'react';
import { Buffer } from 'buffer';
window.Buffer = Buffer;

type Props = {
  pname: string;
  occupation: string;
}

export default function Card({ pname, occupation }: Props) {
  const [words] = useState(() => generateMnemonic());
  return (
    <div className="shadow-[0_4px_8px_0_rgba(0,0,0,0.2)] transition duration-300 hover:shadow-[0_8px_16px_0_rgba(0,0,0,0.2)] min-w-0 w-100 text-fg">
      {/*<img className="w-100%" src="https://picsum.photos/600/498" alt="avatar"></img> -->*/}
      <img className="w-100%" src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar"></img>

      <div className="px-4 py-0.5 w-full">
        <h4><b>{pname}</b></h4> 
        <p>{occupation}</p>
          <p className="bg-1 break-words line-clamp-3 min-h-fit min-w-0">{words}</p>
      </div>
    </div>
  )
}
