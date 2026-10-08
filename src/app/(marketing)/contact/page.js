import { company, images, whatsappLink } from "@/lib/data";
import Icon from "@/components/Icon";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import Reveal, { StaggerGroup, StaggerItem } from "@/components/motion/Reveal";

export const metadata = {
  title: "Contact Us",
  description: "Call 0906 205 1753 or 0916 884 8482 to book a free site visit and get a quote for building, drawing, interior or general work.",
};

export default function ContactPage() {
  const cards = [
    ...company.phones.map((p) => ({ icon: "phone", label: "Call us", value: p.display, href: p.href })),
    { icon: "chat", label: "WhatsApp", value: "Chat with us now", href: whatsappLink(), external: true },
    company.email && { icon: "mail", label: "Email", value: company.email, href: `mailto:${company.email}` },
    { icon: "pin", label: "Location", value: company.address },
  ].filter(Boolean);

  return (
    <>
      <PageHeader
        title="Let's build together"
        crumb="Contact"
        intro="Tell us about your project — a new building, drawings, interior or general work. We'll get back to you within one working day."
        image={images.plans}
      />

      <section className="bg-sand py-20 lg:py-28">
        <div className="container grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <Reveal>
              <h2 className="font-display text-3xl font-bold">Get in touch</h2>
              <p className="mt-3 text-ink-600">
                Prefer to talk? Call or WhatsApp us — {company.hours}.
              </p>
            </Reveal>
            <StaggerGroup className="mt-8 space-y-4">
              {cards.map((c) => {
                const content = (
                  <>
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-500 text-white transition-transform group-hover:scale-110">
                      <Icon name={c.icon} />
                    </span>
                    <span>
                      <span className="block text-sm text-ink-600">{c.label}</span>
                      <span className="block font-semibold">{c.value}</span>
                    </span>
                  </>
                );
                return (
                  <StaggerItem key={c.href ?? c.label}>
                    {c.href ? (
                      <a
                        href={c.href}
                        {...(c.external ? { target: "_blank", rel: "noreferrer" } : {})}
                        className="group flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm transition hover:shadow-md"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="group flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm">{content}</div>
                    )}
                  </StaggerItem>
                );
              })}
            </StaggerGroup>
          </div>

          <Reveal delay={0.2}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <section className="h-[420px] w-full bg-ink">
        <iframe
          title="Office location map"
          src={`https://www.google.com/maps?q=${encodeURIComponent(company.mapQuery)}&output=embed`}
          className="h-full w-full grayscale"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
