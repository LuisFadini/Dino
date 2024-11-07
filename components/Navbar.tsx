import Image from "next/image";
import Link from "next/link";
import { VerticalSeparator } from "./primitives/VerticalSeparator";

export function Navbar() {
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Cálculos",
      path: "/calculos"
    }
  ];

  return (
    <header
      className={"sticky mt-4 px-2 top-4 z-50 md:px-4 md:flex justify-center"}
    >
      <nav className="border border-background-700 px-4 flex items-center justify-center backdrop-filter backdrop-blur-lg bg-background-900 bg-opacity-50 h-12 z-20 rounded-lg">
        <Link
          href={"/"}
          className="h-8 items-center justify-center text-sm font-semibold px-3 py-2 inline-flex text-text-100 transition-opacity hover:opacity-70 duration-200"
        >
          <Image src={"/logo.png"} alt="Dino" width={32} height={32} />
        </Link>
        <VerticalSeparator className="ml-2" />
        <ul className="space-x-2 font-medium text-sm flex md:flex mx-3">
          {links.map(({ path, title }) => {
            const LinkComponent = path.startsWith("#") ? Link : "a";

            return (
              <li key={path}>
                <LinkComponent
                  href={path}
                  className="h-8 items-center justify-center text-sm font-medium px-3 py-2 inline-flex text-text-100 transition-opacity hover:opacity-70 duration-200"
                >
                  {title}
                </LinkComponent>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
