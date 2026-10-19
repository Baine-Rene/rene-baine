const profile = {
  name: "Rene Baine",
  links: [
    { label: "linkedIn", href: "https://www.linkedin.com/in/ren%C3%A9-baine/?isSelfProfile=true" },
    { label: "renebaine04@gmail.com", href: "mailto:renebaine04@gmail.com" },
  ],
  location: "Peterborough / Remote",
}

const about = [
  {

  }
]

const experience = [
  {
    company: "Company One",
    role: "Product Designer",
    description:
      "Designing tools for millions of users. Currently focused on the analytics portfolio — helping people understand their performance and ROI.",
    meta: "Jun 2019 to Present — City, ST",
  },
  {
    company: "Company Two",
    role: "Product Designer II",
    description:
      "Took a B2B app from idea to launch as lead designer. Led end-to-end design, whiteboarding sessions, critiques, and design reviews. Mentored other designers.",
    meta: "May 2018 to Jun 2019 — City, ST",
  },
  {
    company: "Company Three",
    role: "Customer Insights Researcher",
    description:
      "Designed and carried out research studies focused on service design, usability, and concept testing. Managed large consumer panels.",
    meta: "Jul 2015 to Feb 2017 — City, ST",
  },
]

const education = [
  { school: "School Two", detail: "BA in Economics" },
]

const skills =
  "End-to-end & iterative design, User Research & Testing, Survey Design, User Flows, Wireframing, Prototyping, Usability Testing"

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
    <main className="min-h-svh bg-background px-6 py-16 font-mono text-sm leading-relaxed text-foreground md:py-28">
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
              >
                {link.label}
              </a>
            ))}
            <span>{profile.location}</span>
          </div>
        </header>

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