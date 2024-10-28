import Link from "next/link";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar = () => {
  const { status } = useSession();
  return (
    <header className="header">
      <div className="logo">
        <Link href="/">Logo</Link>
      </div>
      <nav>
        <ul className="main-nav">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Contacts</Link>
          </li>
          <li>
            <Link href="/">About Us</Link>
          </li>
          <li>
            <Link href="/blogs">Blogs</Link>
          </li>

          {status === "unauthenticated" ? (
            <li>
              <button className="item" onClick={signIn}>
                Sign In
              </button>
            </li>
          ) : (
            <li>
              <button className="item" onClick={signOut}>
                Sign Out
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
