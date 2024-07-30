import Image from "next/image";
import Link from "next/link";
Link
export default function Home() {
  return (
    <>
    <h1>Home page</h1>
    <br />
    <Link href="/posts">PostPage</Link>
    <br />
    <Link href="/albums">albumsPage</Link>
    </>
  );
}
