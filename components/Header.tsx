export default function Header() {
  return (
    <header className="relative z-10 flex flex-col items-center text-center gap-4">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 ring-1 ring-white/10">
        <span className="h-2 w-2 rounded-full bg-lime animate-pulse" />
        <span className="text-sm text-ink/80">Available for opportunities</span>
      </div>

      <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight">
        <span className="font-light">hi, i'm </span>
        <span className="drop-shadow">Ryan Hermes</span>
      </h1>
      <h2 className="text-lg sm:text-xl font-light text-ink/80">
        and I love <span className="font-semibold text-lime">business</span>
        <span className="mx-2">+</span>
        <span className="font-semibold text-coral">technology</span>
      </h2>

      <div className="mt-2 flex flex-wrap items-center justify-center gap-3 text-sm text-ink/80">
        <a href="mailto:rryanhermes@gmail.com" className="btn">Email</a>
        <a href="/resume.pdf" className="btn">Resume</a>
        <a
          href="https://www.linkedin.com/in/ryanhermes"
          target="_blank"
          rel="noreferrer"
          className="btn"
        >
          LinkedIn
        </a>
        <span className="hidden sm:inline text-ink/50">612-469-1552</span>
      </div>
    </header>
  );
}


