import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isToggled, toggle] = useState(false);

  return (
    <header className='primary-header' data-overlay={isToggled}>
      <div className='container'>
        <div className='nav-wrapper'>
          <Link href={"/"} className='logo'>
            Collin Napier
          </Link>
          <button
            className='mobile-nav-toggle'
            aria-controls='primary-navigation'
            aria-expanded={isToggled}
            onClick={() => {
              toggle(!isToggled);
            }}
          >
            <img
              className='icon-hamburger'
              src='img/icon-hamburger.svg'
              alt=''
            ></img>
            <img
              className='icon-close'
              src='img/icon-close.svg'
              alt=''
              aria-hidden='true'
            ></img>
            <span className='visually-hidden'>Menu</span>
          </button>
          <nav
            className={`primary-navigation `}
            id='primary-navigation'
            data-visible={isToggled}
          >
            <ul role={"list"} className='nav-list'>
              <li>
                {/* <Link
                  href={"aboutme"}
                  onClick={() => {
                    toggle(!isToggled);
                  }}
                >
                  About Me
                </Link> */}
              </li>
              <li>
                <Link
                  href={"projects"}
                  onClick={() => {
                    toggle(!isToggled);
                  }}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href={"employment"}
                  onClick={() => {
                    toggle(!isToggled);
                  }}
                >
                  Employment
                </Link>
              </li>
              <li>
                {/* <Link
                  href={"contact"}
                  onClick={() => {
                    toggle(!isToggled);
                  }}
                >
                  Contact
                </Link> */}
              </li>
            </ul>
          </nav>
          <button
            className='button | display-sm-none display-md-inline-flex'
            onClick={() => {
              window.location.href = "/CollinNapierResume.pdf";
            }}
          >
            Resume
          </button>
        </div>
      </div>
    </header>
  );
}
