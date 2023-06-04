import { useState } from "react";
import Toast from "./Toast";

import Image from "next/image";

export default function Footer() {
  const [showEmail, setShowEmail] = useState(false);

  return (
    <footer className='padding-block-700 bg-neutral-900 text-neutral-100'>
      <div className='container'>
        <div className='even-columns'>
          <div className='center'>
            <ul role={"list"} aria-label={"social links"} className='flex'>
              <li>
                <Image
                  src='img/envelope-regular.svg'
                  alt=''
                  onClick={() => setShowEmail(true)}
                  width={45}
                  height={45}
                />
              </li>
              <li>
                <a aria-label={"LinkedIn"} href='#'>
                  <Image
                    src='img/linkedin-in.svg'
                    alt=''
                    width={45}
                    height={45}
                  />
                </a>
              </li>
              <li>
                <a aria-label={"GitHub"} href='https://github.com/collinnapier'>
                  <Image
                    src='img/github-mark-white.svg'
                    alt=''
                    width={45}
                    height={45}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
