import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
  const LINKS = [
    {
      name: "Vision",
      href: "#vision",
    },
    {
      name: "Features",
      href: "#Features",
    },
    {
      name: "Platform",
      href: "#Platform",
    },
    {
      name: "Technology",
      href: "#Technology",
    },
  ];
  return (
    <nav className="fixed top-0 py-5 flex w-full">
      <main className="flex max-w-[1400px] mx-auto justify-between min-w-[1400px]">
        <h1 className="text-2xl font-bold">CARECHAIN</h1>
        <div>
          {LINKS.map((link) => (
            <Link href={link.href} key={link.href}>
              <Button variant={"ghost"}>{link.name}</Button>
            </Link>
          ))}
        </div>
        <Link href={"#"}>
          <Button variant={"secondary"}>Request Access</Button>
        </Link>
      </main>
    </nav>
  );
}
