import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="h1-bold">Home Page</h1>
      <Link href="/project/list">See Project</Link>
    </div>
  );
}
