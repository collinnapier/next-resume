import Image from "next/image";
import { ReactNode, useEffect, useState } from "react";

export default function Toast(props: {
  title: string;
  onClose: Function;
  children: ReactNode;
}) {
  return (
    <>
      <div className='toast' data-show={true}>
        <div className='toast-header'>
          <h5 className='toast-title'>{props.title}</h5>
          <Image
            src='img/icon-close.svg'
            alt=''
            onClick={() => {
              props.onClose();
            }}
          />
        </div>
        <div className='toast-body'>{props.children}</div>
      </div>
    </>
  );
}
