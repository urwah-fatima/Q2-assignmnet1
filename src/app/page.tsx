import Link from "next/link";
export default function Home() {
  return (
    <div>
      <h1>
        <b>Name: Syeda Urwah Fatima</b>
      </h1>
      <br></br>
      <h1>
        <b>Roll No.: 00114817</b>
      </h1>
      <br></br>
      <h1>
        <b>Assignment-01</b>
      </h1>
      <br></br>
      <h1>
        <b>Country List:</b>
      </h1>
      <br></br>
      <Link href={"/country/pakistan"}>Pakistan</Link>
      <br></br>
      <Link href={"/country/india"}>India</Link>
      <br></br>
      <Link href={"/country/iran"}>Iran</Link>
      <br></br>
      <Link href={"/country/china"}>China</Link>
      <br></br>
    </div>
  );
}
