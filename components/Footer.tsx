import { useState } from "react";
import Toast from "./Toast";

import ReCAPTCHA from "react-google-recaptcha";
import Image from "next/image";

export default function Footer() {
  const [showEmail, setShowEmail] = useState(false);
  const [passedRecaptcha, didPassRecaptcha] = useState(false);

  const emailPopup = () => {
    console.log(passedRecaptcha);
    return showEmail ? (
      <Toast
        title='Email'
        onClose={() => {
          setShowEmail(false);
        }}
      >
        {!passedRecaptcha ? (
          <ReCAPTCHA
            sitekey='6LfMdgglAAAAAFbazs51kXJ6SL_mgRQ3G86cYWCx'
            onChange={(token) => {
              didPassRecaptcha(true);
            }}
          />
        ) : (
          "collin.napier818@gmail.com"
        )}
      </Toast>
    ) : null;
  };

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
                />
              </li>
              <li>
                <a aria-label={"LinkedIn"} href='#'>
                  <Image src='img/linkedin-in.svg' alt='' />
                </a>
              </li>
              <li>
                <a aria-label={"GitHub"} href='https://github.com/collinnapier'>
                  <Image src='img/github-mark-white.svg' alt='' />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {emailPopup()}
    </footer>
  );
}
