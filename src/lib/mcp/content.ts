// Public website content exposed through the MCP server.
// This is the same information any visitor sees on the site.

export type Program = {
  slug: string;
  title: string;
  summary: string;
  highlights: string[];
};

export const programs: Program[] = [
  {
    slug: "youth-basketball-development",
    title: "Youth Basketball Development",
    summary:
      "Weekly training sessions, talent identification, coaching clinics and competitive league play for refugee and host community youth aged 10 to 22.",
    highlights: [
      "Weekly coached sessions",
      "Talent pathway & scouting",
      "Certified coaching clinics",
    ],
  },
  {
    slug: "her-on-court",
    title: "Her On Court — Girls Empowerment",
    summary:
      "Safe spaces for girls and young women, combining basketball with leadership training, mentorship and health education led by women coaches.",
    highlights: [
      "Girls-only training blocks",
      "Women coach apprenticeships",
      "Mentorship circles",
    ],
  },
  {
    slug: "bounce-forward",
    title: "Bounce Forward Training",
    summary:
      "A basketball-based curriculum for mental wellbeing, leadership and life skills, delivered in workshops with trained community facilitators.",
    highlights: ["Psychosocial support", "Leadership modules", "Peer facilitator training"],
  },
];

export type EventItem = {
  title: string;
  date: string;
  isoDate: string;
  place: string;
  description: string;
};

export const events: EventItem[] = [
  {
    title: "Bounce Forward Workshop",
    date: "July 4, 2026",
    isoDate: "2026-07-04",
    place: "Community Hall",
    description:
      "Mental health and life skills workshop using our basketball-based curriculum.",
  },
  {
    title: "Girls Empowerment Basketball Camp",
    date: "July 19, 2026",
    isoDate: "2026-07-19",
    place: "RBI Training Center",
    description:
      "A week-long camp for girls and young women with skills training, leadership workshops and mentorship.",
  },
  {
    title: "Annual Basketball Tournament",
    date: "August 14, 2026",
    isoDate: "2026-08-14",
    place: "Community Sports Ground",
    description:
      "Our biggest event, bringing refugee and host community teams together for a weekend of basketball.",
  },
];

export const impactStats = [
  { value: "3,240+", label: "Youth Reached" },
  { value: "239+", label: "Youth Trained in Basketball" },
  { value: "22+", label: "Scholarships Secured" },
  { value: "1+", label: "USA Scholarships" },
  { value: "6+", label: "Staff Employed" },
  { value: "2+", label: "Women Leaders Employed" },
];

export const impactOutcomes = [
  {
    title: "Education",
    description:
      "Scholarship placements keep players in school and on a pathway to university.",
  },
  {
    title: "Wellbeing",
    description:
      "Bounce Forward participants report stronger coping skills and social support.",
  },
  {
    title: "Cohesion",
    description:
      "Mixed refugee and host community teams reduce tension and build friendships.",
  },
  {
    title: "Livelihoods",
    description: "Coaches and facilitators are hired and trained from within the community.",
  },
];

export type Story = {
  tag: string;
  title: string;
  description: string;
};

export const stories: Story[] = [
  {
    tag: "scholarship",
    title: "From Refugee Camp to University",
    description:
      "Through RBI's scholarship program, a young player earned a full university place and now mentors the next group of guards coming through the academy.",
  },
  {
    tag: "empowerment",
    title: "Breaking Barriers: Her On Court",
    description:
      "A shy first-time player became a community leader and certified coach, running weekly sessions for more than sixty girls.",
  },
  {
    tag: "community",
    title: "Building Bridges Through Basketball",
    description:
      "Community tournaments bring refugee and host community youth onto the same team, turning neighbours into teammates.",
  },
];

export const donationTiers = [
  { amount: "$25", impact: "Kits out one player for the season" },
  { amount: "$75", impact: "Funds a week of coached training for a team" },
  { amount: "$250", impact: "Supports a girls empowerment workshop" },
];

export const waysToHelp = [
  {
    title: "Donate",
    description:
      "Fund balls, kits, transport and coach stipends for a full season of training.",
  },
  {
    title: "Volunteer",
    description:
      "Share coaching, mentoring, physiotherapy or fundraising skills with our teams.",
  },
  {
    title: "Partner",
    description:
      "Work with us on programs, facilities, scholarships or research partnerships.",
  },
];

export const contactInfo = {
  organization: "Refugee Basketball Initiative",
  locations: "Kakuma & Nairobi, Kenya",
  email: "hello@refugeebasketball.org",
  phone: "+254 700 000 000",
  pages: ["/", "/about", "/programs", "/impact", "/stories", "/get-involved"],
};
