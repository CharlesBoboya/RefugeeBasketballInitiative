import { createFileRoute } from "@tanstack/react-router";
import { HandHeart, Handshake, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/get-involved")({
  head: () => ({
    meta: [
      { title: "Get Involved — Refugee Basketball Initiative" },
      {
        name: "description",
        content:
          "Donate, volunteer or partner with RBI to keep refugee and host community youth on the court and in school.",
      },
      { property: "og:title", content: "Get Involved with RBI" },
      {
        property: "og:description",
        content: "Support youth basketball: donate, volunteer or become a partner.",
      },
    ],
  }),
  component: GetInvolved,
});

const ways = [
  { icon: HandHeart, title: "Donate", text: "Fund balls, kits, transport and coach stipends for a full season of training." },
  { icon: Users, title: "Volunteer", text: "Share coaching, mentoring, physiotherapy or fundraising skills with our teams." },
  { icon: Handshake, title: "Partner", text: "Work with us on programs, facilities, scholarships or research partnerships." },
];

const tiers = [
  { amount: "$25", text: "Kits out one player for the season" },
  { amount: "$75", text: "Funds a week of coached training for a team" },
  { amount: "$250", text: "Supports a girls empowerment workshop" },
];

function GetInvolved() {
  return (
    <div>
      <section className="bg-primary py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="font-display text-4xl font-extrabold text-primary-foreground md:text-5xl">
            Get Involved
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Every contribution keeps another young person on the court and in school.
          </p>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-3">
          {ways.map((w) => (
            <div key={w.title} className="rounded-2xl border border-border p-8">
              <span className="flex size-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <w.icon className="size-5" />
              </span>
              <h2 className="mt-5 font-display text-lg font-bold text-primary">{w.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{w.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="donate" className="scroll-mt-20 bg-secondary py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-primary">Make a Donation</h2>
          <p className="mt-3 text-muted-foreground">
            Choose an amount and we'll put it straight to work in the programs.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {tiers.map((t) => (
              <div key={t.amount} className="rounded-2xl bg-card p-6 shadow-sm">
                <p className="font-display text-3xl font-bold text-accent">{t.amount}</p>
                <p className="mt-2 text-sm text-muted-foreground">{t.text}</p>
              </div>
            ))}
          </div>
          <Button variant="accent" size="lg" className="mt-10">
            Donate Now
          </Button>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto max-w-xl px-4">
          <h2 className="text-center font-display text-2xl font-bold text-primary">Contact us</h2>
          <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="contact-name" className="sr-only">
              Your name
            </label>
            <input
              id="contact-name"
              name="name"
              required
              aria-label="Your name"
              placeholder="Your name"
              className="h-11 w-full rounded-md border border-input bg-background px-4 text-sm outline-none focus:border-accent"
            />
            <label htmlFor="contact-email" className="sr-only">
              Your email
            </label>
            <input
              id="contact-email"
              name="email"
              required
              type="email"
              aria-label="Your email"
              placeholder="Your email"
              className="h-11 w-full rounded-md border border-input bg-background px-4 text-sm outline-none focus:border-accent"
            />
            <label htmlFor="contact-message" className="sr-only">
              How would you like to help?
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={5}
              aria-label="How would you like to help?"
              placeholder="How would you like to help?"
              className="w-full rounded-md border border-input bg-background p-4 text-sm outline-none focus:border-accent"
            />
            <Button type="submit" size="lg" className="w-full">
              Send message
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
