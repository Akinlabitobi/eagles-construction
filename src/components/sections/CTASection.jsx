import Image from "next/image";
import Link from "next/link";
import { company, images, whatsappLink } from "@/lib/data";
import Icon from "../Icon";
import Reveal from "../motion/Reveal";

export default function CTASection() {
  return (
    <section className="bg-white py-20">
      <div className="container">
        <Reveal className="relative overflow-hidden rounded-[2rem] bg-brand-600 px-6 py-16 text-white sm:px-12 lg:px-20 lg:py-24">
          <Image src={images.props} alt="" fill sizes="100vw" className="object-cover opacity-20 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-700 via-brand-600/90 to-transparent" />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-3xl font-bold leading-tight sm:text-5xl">
              Have a project? Let&apos;s build it right.
            </h2>
            <p className="mt-5 text-lg text-white/85">
              Book a free site visit and consultation. We&apos;ll give you a clear plan, a realistic budget and a timeline
              you can hold us to.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-brand-700 transition hover:bg-ink hover:text-white"
              >
                Book a free consultation
                <Icon name="arrow" className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              {company.phones.map((p) => (
                <a
                  key={p.href}
                  href={p.href}
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-4 font-semibold transition hover:bg-white/10"
                >
                  <Icon name="phone" className="h-5 w-5" />
                  {p.display}
                </a>
              ))}
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-4 font-semibold transition hover:bg-white/10"
              >
                <Icon name="chat" className="h-5 w-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
