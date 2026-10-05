import React from "react";

function Navbar() {
  const links = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="border-b h-16 border-red-500/20 bg-gradient-to-r from-zinc-950 via-black to-red-950/40 text-white shadow-lg shadow-red-950/20">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center  justify-between  gap-4 px-6 py-4">
        <a href="/" className="text-2xl font-extrabold tracking-wide">
          Rakesh<span className="text-red-500">Akm</span>
        </a>

        <ul className="flex flex-wrap items-center gap-2 sm:gap-6">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-zinc-300 transition hover:bg-red-500/10 hover:text-red-400"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/contact"
          className="rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-500 hover:shadow-lg hover:shadow-red-600/30"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
}

export default Navbar;