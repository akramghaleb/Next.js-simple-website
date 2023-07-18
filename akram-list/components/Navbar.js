import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
      <nav>
        <div className="logo">
          <Image src="/icon.png" height={80} width={80} alt="icon"></Image>
        </div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/list">List</Link>
      </nav>
  );
  }
   
  export default Navbar;