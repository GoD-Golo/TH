import Link from "next/link";
import Image from "next/image";
import Button from "./Button";

export default function Header() {
  return (
    <header className="col-span-2 flex w-full items-center justify-between border-b  border-amber-500 bg-gradient-to-r from-indigo-800 to-violet-900 font-roboto400">
      <div className="flex items-center gap-3">
        <Link href="/">
          <Image
            src="/dh-navbar-logo.webp"
            alt="logo"
            width={280}
            height={84}
            className="cursor-pointer px-3 py-2"
          />
        </Link>
        <ul className="justify-items flex justify-end gap-x-3 pr-2 pt-2.5">
          <li>
            <Button variant="navlink" to="about">
              About
            </Button>
          </li>
          <li>
            <Button variant="navlink" to="playtest">
              Playtest
            </Button>
          </li>
        </ul>
      </div>
      <div className="pr-2 pt-2.5">
        <Button variant="navlink" to="signin">
          Log In / Sign In
        </Button>
      </div>
    </header>
  );
}
