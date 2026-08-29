import { createFileRoute } from "@tanstack/react-router";
import { Award, Briefcase, GraduationCap, Heart, Trophy, Users } from "lucide-react";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Our Impact — Refugee Basketball Initiative" },
      {
        name: "description",
        content:
          "3,240+ youth reached, 239+ trained in basketball and 22+ scholarships secured. See how RBI measures its impact.",
      },
      { property: "og:title", content: "RBI Impact" },
      {
        property: "og:description",
        content: "Numbers, outcomes and accountability behind our basketball programs.",
      },
    ],
  }),
  component: Impact,
});

const stats = [
  { icon: Users, value: "3,240+", label: "Youth Reached" },
  { icon: Trophy, value: "239+", label: "Youth Trained in Basketball" },
  { icon: GraduationCap, value: "22+", label: "Scholarships Secured" },
  { icon: Award, value: "1+", label: "USA Scholarships" },
  { icon: Briefcase, value: "6+", label: "Staff Employed" },
  { icon: Heart, value: "2+", label: "Women Leaders Employed" },
];

const outcomes = [
  { title: "Education", text: "Scholarship placements keep players in school and on a pathway to university." },
  { title: "Wellbeing", text: "Bounce Forward participants report stronger coping skills and social support." },
  { title: "Cohesion", text: "Mixed refugee and host community teams reduce tension and build friendships." },
  { title: "Livelihoods", text: "Coaches and facilitators are hired and trained from within the community." },
];

function Impact() {
  return (
    <div>
      <section className="bg-primary py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="font-display text-4xl font-extrabold text-primary-foreground md:text-5xl">
            Our Impact
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/80">
            We track every session, every player and every placement, then report it openly.
          </p>
        </div>
      </section>

      <section className="bg-background py-20">
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

      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="font-display text-3xl font-bold text-primary">What changes</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {outcomes.map((o) => (
              <div key={o.title} className="rounded-2xl bg-card p-6 shadow-sm">
                <h3 className="font-display text-lg font-bold text-primary">{o.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{o.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
