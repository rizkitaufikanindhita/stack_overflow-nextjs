import Link from "next/link";

export default function ProjectList() {
  return (
    <div>
      <h1 className="h1-bold">Project List Page</h1>
      <ul>
        <li>
          <Link href="/project/jobnode">Job1</Link>
        </li>
        <li>
          <Link href="/project/hipin">Job2</Link>
        </li>
        <li>
          <Link href="/project/westcon">Job3</Link>
        </li>
      </ul>
    </div>
  );
}
