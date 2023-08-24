import Link from "next/link";
import Logo from "./logo.png";
import Image from "next/image";

export const Navbar = () => {
  return (
    <nav>
      <Image
        src={Logo}
        alt="logo"
        height={40}
        quality={100}
        placeholder="blur"
      />
      <h1>Navigation</h1>
      <Link href="/">Home</Link>
      <Link href="/tickets">Ticket</Link>
    </nav>
  );
};
