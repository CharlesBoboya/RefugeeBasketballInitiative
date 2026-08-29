import { createFileRoute, Link } from "@tanstack/react-router";
import { handleImageError } from "@/lib/asset";
import {
  ArrowRight,
  Award,
  Briefcase,
  GraduationCap,
  Heart,
  Trophy,
  Users,
  CalendarDays,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroCourtImg from "@/assets/hero-court.jpg";
const heroCourt = heroCourtImg;
import programYouthImg from "@/assets/program-youth.jpg";
const programYouth = programYouthImg;
import programGirlsImg from "@/assets/program-girls.jpg";
const programGirls = programGirlsImg;
import programBounceImg from "@/assets/program-bounce.jpg";
const programBounce = programBounceImg;
import partnerUnhcrImg from "@/assets/partner-unhcr.png";
const partnerUnhcr = partnerUnhcrImg;
import partnerFibaImg from "@/assets/partner-fiba.png";
const partnerFiba = partnerFibaImg;
import partnerRightToPlayImg from "@/assets/partner-right-to-play.png";
const partnerRightToPlay = partnerRightToPlayImg;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Refugee Basketball Initiative — Transforming Lives Through Basketball" },
      {
        name: "description",
        content:
          "RBI empowers refugee and host community youth through basketball, mentorship, education and leadership development.",
      },
      { property: "og:title", content: "Refugee Basketball Initiative" },
      {
        property: "og:description",
        content: "Youth-led sport for development: basketball, mentorship and scholarships.",
      },
    ],
  }),
  component: Index,
});

const stats = [
  { icon: Users, value: "3,240+", label: "Youth Reached" },
  { icon: Trophy, value: "239+", label: "Youth Trained in Basketball" },
  { icon: GraduationCap, value: "22+", label: "Scholarships Secured" },
  { icon: Award, value: "1+", label: "USA Scholarships" },
  { icon: Briefcase, value: "6+", label: "Staff Employed" },
  { icon: Heart, value: "2+", label: "Women Leaders Employed" },
];

const programs = [
  {
    title: "Youth Basketball Development",
    image: programYouth,
    text: "Weekly training sessions, talent development, coaching clinics and competitive play for refugee and host community youth.",
  },
  {
    title: "Girls Empowerment Program",
    image: programGirls,
    text: "Her On Court creates safe spaces for girls and young women through basketball, leadership training and mentorship.",
  },
  {
    title: "Bounce Forward Training",
    image: programBounce,
    text: "Mental health support, leadership development and life skills training delivered through a basketball-based curriculum.",
  },
];

const events = [
  {
    title: "Bounce Forward Workshop",
    date: "July 4, 2026",
    place: "Community Hall",
    text: "Mental health and life skills workshop using our basketball-based curriculum.",
  },
  {
    title: "Girls Empowerment Basketball Camp",
    date: "July 19, 2026",
    place: "RBI Training Center",
    text: "A week-long camp for girls and young women with skills training, leadership workshops and mentorship.",
  },
  {
    title: "Annual Basketball Tournament",
    date: "August 14, 2026",
    place: "Community Sports Ground",
    text: "Our biggest event, bringing refugee and host community teams together for a weekend of basketball.",
  },
];

const partners = [
  { name: "UNHCR — The UN Refugee Agency", logo: partnerUnhcr },
  { name: "FIBA Foundation — Basketball For Good", logo: partnerFiba },
  { name: "Right To Play", logo: partnerRightToPlay },
];

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img
          onError={handleImageError}
          src={heroCourt}
          alt="Refugee youth playing basketball on an outdoor court at sunset"
          width={1920}
          height={1280}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/85" />
        <div className="relative mx-auto max-w-6xl px-4 py-28 md:py-36">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-1.5 text-sm font-medium text-accent">
            <Trophy className="size-4" /> Youth-Led Sports for Development
          </span>
          <h1 className="mt-6 max-w-3xl font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-primary-foreground md:text-6xl">
            Transforming Lives <br className="hidden md:block" />
            Through <span className="text-accent">Basketball</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-primary-foreground/80">
            Refugee Basketball Initiative empowers refugee and host community youth through
            sport, mentorship, education, leadership development and life-changing opportunities.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button variant="accent" size="lg" asChild>
              <Link to="/get-involved" hash="donate">Support Our Work</Link>
            </Button>
            <Button variant="onDark" size="lg" asChild>
              <Link to="/get-involved">Partner With Us</Link>
            </Button>
            <Button variant="onDark" size="lg" asChild>
              <Link to="/impact">
                Explore Our Impact <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-background py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 md:grid-cols-3 lg:grid-cols-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <span className="mx-auto flex size-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <s.icon className="size-5" />
              </span>
              <p className="mt-4 font-display text-3xl font-bold text-primary">{s.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Programs */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold text-primary md:text-4xl">
              Our Programs
            </h2>
            <p className="mt-3 text-muted-foreground">
              Comprehensive programs that use basketball as a platform for youth development.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {programs.map((p) => (
              <Link
                key={p.title}
                to="/programs"
                className="group overflow-hidden rounded-2xl bg-card shadow-sm transition-shadow hover:shadow-xl"
              >
                <img
                  onError={handleImageError}
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold text-primary">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                    Learn more <ArrowRight className="size-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button size="lg" asChild>
              <Link to="/programs">View All Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="font-display text-3xl font-bold text-primary md:text-4xl">
            Upcoming Events
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {events.map((e) => (
              <article
                key={e.title}
                className="rounded-2xl border border-border p-6 transition-colors hover:border-accent"
              >
                <p className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
                  <CalendarDays className="size-4" /> {e.date}
                </p>
                <h3 className="mt-3 font-display text-lg font-bold text-primary">{e.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{e.text}</p>
                <p className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="size-4" /> {e.place}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-primary md:text-4xl">Our Partners</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {partners.map((p) => (
              <div
                key={p.name}
                className="flex h-32 items-center justify-center rounded-xl bg-card px-8 py-6 shadow-sm"
              >
                <img
                  onError={handleImageError}
                  src={p.logo}
                  alt={`${p.name} logo`}
                  loading="lazy"
                  className="max-h-16 w-auto max-w-full object-contain"
                />
              </div>
            ))}
          </div>
          <Button variant="accent" size="lg" className="mt-10" asChild>
            <Link to="/get-involved">Become a Partner of RBI</Link>
          </Button>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-primary py-20">
        <div className="mx-auto max-w-xl px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-primary-foreground">Stay Connected</h2>
          <p className="mt-3 text-primary-foreground/75">
            Subscribe to receive updates on our programs, events and impact stories.
          </p>
          <form
            className="mt-8 flex flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Your email address
            </label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              required
              aria-label="Your email address"
              placeholder="Your email address"
              className="h-11 flex-1 rounded-md bg-primary-foreground px-4 text-sm text-foreground outline-none"
            />
            <Button variant="accent" size="lg" type="submit">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
