import { createFileRoute, Link } from "@tanstack/react-router";
import { handleImageError } from "@/lib/asset";
import { Button } from "@/components/ui/button";
import programYouthImg from "@/assets/program-youth.jpg";
const programYouth = programYouthImg;
import programGirlsImg from "@/assets/program-girls.jpg";
const programGirls = programGirlsImg;
import programBounceImg from "@/assets/program-bounce.jpg";
const programBounce = programBounceImg;

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs — Refugee Basketball Initiative" },
      {
        name: "description",
        content:
          "Youth basketball development, the Her On Court girls empowerment program, Bounce Forward life skills training and community tournaments.",
      },
      { property: "og:title", content: "RBI Programs" },
      {
        property: "og:description",
        content: "Basketball training, girls empowerment, life skills and community tournaments.",
      },
    ],
  }),
  component: Programs,
});

const programs = [
  {
    title: "Youth Basketball Development",
    image: programYouth,
    text: "Weekly training sessions, talent identification, coaching clinics and competitive league play for refugee and host community youth aged 10 to 22.",
    points: ["Weekly coached sessions", "Talent pathway & scouting", "Certified coaching clinics"],
  },
  {
    title: "Her On Court — Girls Empowerment",
    image: programGirls,
    text: "Safe spaces for girls and young women, combining basketball with leadership training, mentorship and health education led by women coaches.",
    points: ["Girls-only training blocks", "Women coach apprenticeships", "Mentorship circles"],
  },
  {
    title: "Bounce Forward Training",
    image: programBounce,
    text: "A basketball-based curriculum for mental wellbeing, leadership and life skills, delivered in workshops with trained community facilitators.",
    points: ["Psychosocial support", "Leadership modules", "Peer facilitator training"],
  },
];

function Programs() {
  return (
    <div>
      <section className="bg-primary py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="font-display text-4xl font-extrabold text-primary-foreground md:text-5xl">
            Our Programs
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Everything we run starts on the court and reaches far beyond it.
          </p>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto max-w-6xl space-y-16 px-4">
          {programs.map((p, i) => (
            <article
              key={p.title}
              className={`grid items-center gap-10 md:grid-cols-2 ${i % 2 ? "md:[&>img]:order-2" : ""}`}
            >
              <img
                onError={handleImageError}
                src={p.image}
                alt={p.title}
                loading="lazy"
                width={1024}
                height={768}
                className="h-72 w-full rounded-2xl object-cover shadow-md"
              />
              <div>
                <h2 className="font-display text-2xl font-bold text-primary">{p.title}</h2>
                <p className="mt-3 text-muted-foreground">{p.text}</p>
                <ul className="mt-5 space-y-2">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="size-1.5 rounded-full bg-accent" /> {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-16 text-center">
        <h2 className="font-display text-2xl font-bold text-primary">Want to support a program?</h2>
        <Button variant="accent" size="lg" className="mt-6" asChild>
          <Link to="/get-involved">Get Involved</Link>
        </Button>
      </section>
    </div>
  );
}
