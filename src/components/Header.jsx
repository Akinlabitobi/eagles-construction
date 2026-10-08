"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { company, navLinks } from "@/lib/data";
import Logo from "./Logo";
import Icon from "./Icon";
import { ease } from "./motion/Reveal";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const solid = scrolled || open;
  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease }}
      className={`fixed inset-x-0 top-0 z-50 text-white transition-colors duration-500 ${
        solid ? "bg-ink/90 shadow-lg shadow-black/20 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className={`container flex items-center justify-between transition-all duration-500 ${solid ? "h-16" : "h-20"}`}>
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative px-4 py-2 text-sm font-medium text-white/80 transition hover:text-white"
            >
              {link.label}
              {isActive(link.href) && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-brand-400"
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a href={company.phoneHref} className="flex items-center gap-2 text-sm text-white/80 hover:text-white">
            <Icon name="phone" className="h-4 w-4" />
            {company.phone}
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold transition hover:bg-brand-400"
          >
            Get a quote
          </Link>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="grid h-11 w-11 place-items-center rounded-lg lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease }}
            className="overflow-hidden border-t border-white/10 lg:hidden"
            aria-label="Mobile"
          >
            <ul className="container flex flex-col py-4">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i + 0.1 }}
                >
                  <Link
                    href={link.href}
                    className={`block py-3 font-display text-2xl ${isActive(link.href) ? "text-brand-400" : "text-white"}`}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <li className="mt-4">
                <Link href="/contact" className="block rounded-full bg-brand-500 py-3 text-center font-semibold">
                  Get a free quote
                </Link>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
