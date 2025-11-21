import SectionHeading from "./SectionHeading";
import photoCode from '../../src/images/about.jpg'

const About = () => {
  return (
    <section id="about" className="section-padding">
      <SectionHeading
        eyebrow="About"
        title="Builder. Explorer. Community-first."
        description="I write code with empathy for users and teams—delivering clean systems, observability, and delightful interfaces."
      />

      <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div className="space-y-6 text-base leading-relaxed text-slate-600 dark:text-slate-300">
          <p>
          I started my journey as a college student exploring simple hardware projects, and soon discovered my passion for software development. With 2½ years of coding experience, I’ve worked on small applications, tools, and web projects that helped me grow my skills and understand real-world development.
          </p>
          <p>
            Today I specialize in JavaScript ecosystems—React, Node.js, and
            modern cloud tooling. I care deeply about developer experience,
            accessibility, and creating systems that scale without the chaos.
          </p>
          <p>
          When I’m not coding, you’ll find me exploring new tech, practicing UI design, or improving small projects to sharpen my skills. I also enjoy helping classmates understand coding concepts and experimenting with simple hardware setups.
          </p>
          <div className="rounded-2xl border border-slate-200/70 bg-white/60 p-4 text-sm font-medium text-slate-600 shadow-inner shadow-white dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200">
            <p>📍 Manito Albay, Philippines</p>
            <p> Open to remote contracts & product collaborations</p>
          </div>
        </div>
        <div className="relative flex justify-center">
          <div className="relative h-80 w-80 overflow-hidden rounded-[2.5rem] border border-white/40 shadow-2xl shadow-brand-500/30">
            <img
              src={photoCode}
              alt="Portrait of Ryan Jake Daz"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 border border-white/40" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
