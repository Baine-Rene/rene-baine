import { ThemeToggle } from "../components/theme-toggler"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../components/ui/hover-card"
import { MoveUpRight } from "lucide-react"

const profile = {
  name: "@Rene_Baine",
  links: [
    {
      label: "linkedIn",
      href: "https://www.linkedin.com/in/ren%C3%A9-baine/?isSelfProfile=true",
    },
    {
      label: "Email",
      href: "mailto:renebaine04@gmail.com",
    },
    {
      label: "GitHub",
      href: "https://github.com/Baine-Rene",
    },
  ],
  location: "Peterborough / Remote",
}

const about = [
  {
    description:
      "I'm a third year computer science student @Trent University. I'm interested in graphic design and creating visual elements. ",
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
        blurb:
          "HackTrent is the premier hackathon event hosted by Trent University.",
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
        blurb:
          "IWIP (Inspired Work In Progress) is a platform where professionals create their digital identity, connect with others, and engage in communities - all in one place.",
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
        blurb:
          "The AI recruiting platform where job seekers get seen, and recruiters find stronger, faster, clearer fits.",
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

const social = {
  links: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/rene_baine_/",
    },
    {
      label: "Twitter",
      href: "https://x.com/rene_baine",
    },
  ],
}

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
                rel="noreferrer"
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
            {about.map((job, i) => (
              <article key={i} className="flex flex-col gap-1">
                <p className="leading-loose">{job.description}</p>
              </article>
            ))}
          </div>
        </Row>

        {/* Projects */}
        <Row label="Projects">
          <div>
            {projects.map((project) => (
              <p key={project.description}>{project.description}!</p>
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
                            className="inline-flex items-center gap-1 underline underline-offset-4 focus-visible:underline"
                            target="_blank"
                            rel="noreferrer"
                          >
                            {link.label}
                            <MoveUpRight
                              className="size-3"
                              aria-hidden="true"
                            />
                          </a>
                        }
                      />
                      <HoverCardContent
                        className="flex w-72 flex-col gap-2"
                        side="right"
                        align="start"
                        sideOffset={12}
                      >
                        <div className="font-semibold">{link.title}</div>
                        <div className="text-muted-foreground">
                          {link.blurb}
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
          <div className="grid gap-6 sm:grid-cols-1">
            {education.map((item) => (
              <div key={item.school}>
                <h3 className="font-bold">{item.school}</h3>
                <p>{item.detail}</p>
              </div>
            ))}
          </div>
        </Row>

        {/* Tools */}
        <Row label="Tools">
          <p className="leading-loose">{tools}</p>
        </Row>

        {/* Skills */}
        <Row label="Socials">
          <div className="grid gap-6 sm:grid-cols-1">
            {social.links.map((link, i) => (
              <a
                key={link.href || i}
                href={link.href}
                className="underline-offset-4 hover:underline focus-visible:underline"
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </Row>
      </div>
    </main>
  )
}
