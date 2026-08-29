import { createFileRoute } from "@tanstack/react-router";
import { handleImageError } from "@/lib/asset";
import heroCourtImg from "@/assets/hero-court.jpg";
const heroCourt = heroCourtImg;

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Refugee Basketball Initiative" },
      {
        name: "description",
        content:
          "Learn how Refugee Basketball Initiative grew from a single dusty court into a youth-led movement for refugee and host communities.",
      },
      { property: "og:title", content: "About Refugee Basketball Initiative" },
      {
        property: "og:description",
        content: "Our mission, vision and values as a youth-led sport for development organisation.",
      },
    ],
  }),
  component: About,
});

const values = [
  { title: "Youth-Led", text: "Young people design, coach and lead the programs they take part in." },
  { title: "Inclusion", text: "Refugee and host community youth train, play and grow side by side." },
  { title: "Equity", text: "Girls and young women hold equal space on the court and in leadership." },
  { title: "Integrity", text: "We measure what we do and report it honestly to our communities." },
];

function About() {
  return (
    <div>
      <section className="relative isolate overflow-hidden">
        <img
          onError={handleImageError}
          src={heroCourt}
          alt="Youth basketball game on a community court"
          width={1920}
          height={1280}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/85" />
        <div className="relative mx-auto max-w-6xl px-4 py-24">
          <h1 className="font-display text-4xl font-extrabold text-primary-foreground md:text-5xl">
            About RBI
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/80">
            We use basketball as a platform to build confidence, community and opportunity for
            young people displaced by conflict.
          </p>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold text-primary">Our Mission</h2>
            <p className="mt-4 text-muted-foreground">
              To empower refugee and host community youth through sport, mentorship, education and
              leadership development, so every young person has a fair shot at their future.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-primary">Our Vision</h2>
            <p className="mt-4 text-muted-foreground">
              Communities where displacement never decides a young person's potential, and where
              the court is a place of safety, belonging and possibility.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="font-display text-3xl font-bold text-primary">Our Values</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl bg-card p-6 shadow-sm">
                <h3 className="font-display text-lg font-bold text-primary">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
