import { ThemeToggle } from "../components/theme-toggler"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../components/ui/hover-card"

const profile = {
  name: "@Rene_Baine",
  links: [
    {
      label: "linkedIn",
      href: "https://www.linkedin.com/in/ren%C3%A9-baine/?isSelfProfile=true",
    },
    { label: "Email", href: "mailto:renebaine04@gmail.com" },
  ],
  location: "Peterborough / Remote",
}

const about = [
  {
    description:
      "I'm a third year computer science student. I'm interested in design and ascii art",
  },
]

const projects = [
  {
    description: "Coming Soon",
  },
]

const experience = [
  {
    company: "Hack Trent",
    role: "Vice-President of Design",
    description: "",
    meta: "March 2026 to Present — Peterborough, ON",
    links: [
      {
        label: "HackTrent",
        href: "https://www.hacktrent.ca/",
        title: "Hack Trent",
        blurb: "Trent University's hackathon and tech community.", // edit me
        detail: "Peterborough, ON",
      },
    ],
  },
  {
    company: "IWIP",
    role: "Co-founder & Web developer",
    description: "",
    meta: "April 2025 to Present — Kitchener, ON",
    links: [
      {
        label: "IwipApp",
        href: "https://www.iwip.app/",
        title: "IWIP",
        blurb: "A short description of what IWIP does.", // edit me
        detail: "Kitchener, ON",
      },
    ],
  },
  {
    company: "TheGarage",
    role: "Front-end developer",
    description: "",
    meta: "Febuary 2026 — Toronto, On",
    links: [
      {
        label: "theGarage",
        href: "https://www.thegarages.ca/",
        title: "TheGarage",
        blurb: "A short description of what TheGarage does.", // edit me
        detail: "Toronto, ON",
      },
    ],
  },
]

const education = [
  {
    school: "Trent University",
    detail: "Honours Science Program, Computer Science",
  },
]

const skills =
  "End-to-end & iterative design, Figma, Graphic-design, User Flows, Wireframing, Prototyping"

const tools =
  "SQL, Supabase, React, Figma, JavaScript, C#, C++, Python, Git, TypeScript, powershell, TailwindCSS, Java, PHP"

function Row({
  label,
  children,
}: {
  label?: string
  children: React.ReactNode
}) {
  return (
    <section className="grid gap-2 md:grid-cols-[10rem_1fr] md:gap-x-16 lg:grid-cols-[12rem_1fr]">
      <h2 className="text-muted-foreground md:text-right">{label}</h2>
      <div className="min-w-0">{children}</div>
    </section>
  )
}

export default function Page() {
  return (
    <main className="text-md min-h-svh bg-background px-6 py-16 font-mono leading-relaxed text-foreground md:py-28">
      <div className="mx-auto flex max-w-4xl min-w-0 flex-col gap-14">
        {/* Header */}
        <header className="grid gap-2 md:grid-cols-[10rem_1fr] md:items-baseline md:gap-x-16 lg:grid-cols-[12rem_1fr]">
          <h1 className="font-bold md:text-right">{profile.name}</h1>
          <div className="flex flex-wrap gap-x-10 gap-y-1">
            {profile.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="underline-offset-4 hover:underline focus-visible:underline"
                target="_blank"
              >
                {link.label}
              </a>
            ))}
            <span>{profile.location}</span>
            <ThemeToggle />
          </div>
        </header>

        {/* About */}
        <Row label="About">
          <div className="flex flex-col gap-12">
            {about.map((job) => (
              <article className="flex flex-col gap-1">
                <p className="leading-loose">{job.description}</p>
              </article>
            ))}
          </div>
        </Row>

        {/* Projects */}
        <Row label="projects">
          <div>
            {projects.map((project) => (
              <p key={project.description}>{project.description}</p>
            ))}
          </div>
        </Row>

        {/* Experience */}
        <Row label="Experience">
          <div className="flex flex-col gap-12">
            {experience.map((job) => (
              <article key={job.company} className="flex flex-col gap-1">
                <h3>
                  <span className="font-bold">{job.company}</span>{" "}
                  <span className="text-muted-foreground">{job.role}</span>
                </h3>
                <p className="leading-loose">{job.description}</p>
                <p className="text-xs text-muted-foreground">{job.meta}</p>
                <div className="flex flex-wrap gap-x-6 gap-y-1">
                  {job.links.map((link) => (
                    <HoverCard key={link.href}>
                      <HoverCardTrigger
                        delay={10}
                        closeDelay={100}
                        render={
                          <a
                            href={link.href}
                            className="underline underline-offset-4 focus-visible:underline"
                            target="_blank"
                            rel="noreferrer"
                          >
                            {link.label}
                          </a>
                        }
                      />
                      <HoverCardContent className="flex w-64 flex-col gap-0.5">
                        <div className="font-semibold">{link.title}</div>
                        <div>{link.blurb}</div>
                        <div className="mt-1 text-xs text-muted-foreground">
                          {link.detail}
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Row>

        {/* Education */}
        <Row label="Education">
          <div className="grid gap-6 sm:grid-cols-2">
            {education.map((item) => (
              <div key={item.school}>
                <h3 className="font-bold">{item.school}</h3>
                <p>{item.detail}</p>
              </div>
            ))}
          </div>
        </Row>

        {/* Skills */}
        <Row label="Skills">
          <p className="leading-loose">{skills}</p>
        </Row>

        {/* Tools */}
        <Row label="Tools">
          <p className="leading-loose">{tools}</p>
        </Row>
      </div>
    </main>
  )
}
