import Link from "next/link";

export default function Users() {
  return (
    <div>
      <h1 className="h1-bold">Users Page</h1>
      <Link href="/users/oldusers">old user</Link>
    </div>
  );
}
