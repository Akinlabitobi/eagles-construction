import Link from "next/link";
import { company, navLinks, services } from "@/lib/data";
import Logo from "./Logo";
import Icon from "./Icon";

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-white/70">
      <div className="container grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <div className="text-white">
            <Logo />
          </div>
          <p className="text-sm leading-relaxed">{company.description}</p>
          <div className="flex gap-3 empty:hidden">
            {company.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 px-3 py-1.5 text-xs transition hover:border-brand-400 hover:text-white"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-display font-semibold text-white">Company</h3>
          <ul className="space-y-2.5 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition hover:text-brand-400">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-display font-semibold text-white">Services</h3>
          <ul className="space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href="/services" className="transition hover:text-brand-400">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-display font-semibold text-white">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3">
              <Icon name="pin" className="h-5 w-5 shrink-0 text-brand-400" />
              {company.address}
            </li>
            {company.phones.map((p) => (
              <li key={p.href}>
                <a href={p.href} className="flex gap-3 hover:text-white">
                  <Icon name="phone" className="h-5 w-5 shrink-0 text-brand-400" />
                  {p.display}
                </a>
              </li>
            ))}
            {company.email && (
              <li>
                <a href={`mailto:${company.email}`} className="flex gap-3 hover:text-white">
                  <Icon name="mail" className="h-5 w-5 shrink-0 text-brand-400" />
                  {company.email}
                </a>
              </li>
            )}
            <li className="flex gap-3">
              <Icon name="clock" className="h-5 w-5 shrink-0 text-brand-400" />
              {company.hours}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col items-center justify-between gap-2 py-6 text-xs sm:flex-row">
          <p>
            © {new Date().getFullYear()} {company.legalName}.{company.rcNumber && ` ${company.rcNumber}.`} All rights reserved.
          </p>
          <p>Proudly building across Nigeria 🇳🇬</p>
        </div>
      </div>
    </footer>
  );
}
