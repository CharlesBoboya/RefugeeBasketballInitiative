import { createFileRoute } from "@tanstack/react-router";
import { handleImageError } from "@/lib/asset";
import programYouthImg from "@/assets/program-youth.jpg";
const programYouth = programYouthImg;
import programGirlsImg from "@/assets/program-girls.jpg";
const programGirls = programGirlsImg;
import programBounceImg from "@/assets/program-bounce.jpg";
const programBounce = programBounceImg;

export const Route = createFileRoute("/stories")({
  head: () => ({
    meta: [
      { title: "Success Stories — Refugee Basketball Initiative" },
      {
        name: "description",
        content:
          "Real stories of transformation, resilience and achievement from young players in RBI programs.",
      },
      { property: "og:title", content: "RBI Success Stories" },
      {
        property: "og:description",
        content: "From refugee camp to university: stories from the court and beyond.",
      },
    ],
  }),
  component: Stories,
});

const stories = [
  {
    tag: "scholarship",
    title: "From Refugee Camp to University",
    image: programYouth,
    text: "Through RBI's scholarship program, a young player earned a full university place and now mentors the next group of guards coming through the academy.",
  },
  {
    tag: "empowerment",
    title: "Breaking Barriers: Her On Court",
    image: programGirls,
    text: "A shy first-time player became a community leader and certified coach, running weekly sessions for more than sixty girls.",
  },
  {
    tag: "community",
    title: "Building Bridges Through Basketball",
    image: programBounce,
    text: "Community tournaments bring refugee and host community youth onto the same team, turning neighbours into teammates.",
  },
];

function Stories() {
  return (
    <div>
      <section className="bg-primary py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="font-display text-4xl font-extrabold text-primary-foreground md:text-5xl">
            Success Stories
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Real stories of transformation, resilience and achievement.
          </p>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-3">
          {stories.map((s) => (
            <article key={s.title} className="overflow-hidden rounded-2xl bg-card shadow-sm">
              <img
                onError={handleImageError}
                src={s.image}
                alt={s.title}
                loading="lazy"
                width={1024}
                height={768}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
                  {s.tag}
                </span>
                <h2 className="mt-3 font-display text-lg font-bold text-primary">{s.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
