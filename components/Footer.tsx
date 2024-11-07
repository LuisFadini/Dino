import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background-800 flex flex-col items-center md:justify-around md:flex-row p-4 gap-2">
      <div className="rounded-full w-64 h-64 relative overflow-hidden">
        <Image src="/logo.png" alt="logo" layout="fill" objectFit="cover" />
      </div>
      <ul className="flex flex-row justify-evenly gap-4 text-2xl font-bold">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/calculos"}>Cálculos</Link>
        </li>
      </ul>
    </footer>
  );
}
