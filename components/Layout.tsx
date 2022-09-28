import clsx from "clsx";
import { Head } from "next/document";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const navLinks = ["home", "about", "contact", "blog"];

const navigation = [
  { href: "/", name: "home" },
  { href: "/about", name: "about" },
  { href: "/contact", name: "contact" },
  { href: "/blog", name: "blog" },
];

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    // probably you can add head info to layout but not working rn
    //   <Head>
    //     <title>{`Deans Blog | ${router.asPath}`}</title>
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>
    <div className="w-screen h-screen flex flex-col justify-between items-center">
      <nav className="flex gap-2 h-10 items-center">
        {navigation.map((link, i) => {
          return (
            <Link key={i} href={link.href}>
              <p
                className={clsx(
                  "hover:text-red-500 cursor-pointer",
                  link.href === router.asPath ? "text-red-500" : ""
                )}
              >
                {link.name}
              </p>
            </Link>
          );
        })}
      </nav>
      <main className="max-w-lg">{children}</main>
      <footer>
        <div className="w-screen text-center h-10 items-center">
          copyright dean kemball
        </div>
      </footer>
    </div>
  );
};

export default Layout;
