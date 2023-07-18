import Link from "next/link";

const Navbar = () => {
    return (
      <nav>
        <div className="logo">
          <h1>Akram Listing</h1>
        </div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/list">List</Link>
      </nav>
  );
  }
   
  export default Navbar;