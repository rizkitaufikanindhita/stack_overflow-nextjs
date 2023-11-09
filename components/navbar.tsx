import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <h1>Navbar</h1>
      <div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/users">Users</Link>
      </div>
    </nav>
  );
};

export default Navbar;
