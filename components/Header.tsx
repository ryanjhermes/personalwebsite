export default function Header() {
  return (
    <header className="flex flex-col items-center text-center gap-2">
      <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight">
        <span className="font-light">hi, i'm </span>
        <span className="drop-shadow">Ryan Hermes</span>
      </h1>
      <h2 className="text-xl sm:text-2xl font-light">
        and I love <span className="font-semibold text-lime">business</span>{' '}
        <span className="mx-2">+</span>
        <span className="font-semibold text-coral">technology</span>
      </h2>
      <p className="mt-3 text-sky">
        <a href="mailto:rryanhermes@gmail.com" className="hover:underline">rryanhermes@gmail.com</a>
        <span className="mx-2 text-ink/60">·</span>
        612-469-1552
        <span className="mx-2 text-ink/60">·</span>
        <a href="https://www.linkedin.com/in/ryanhermes" target="_blank" rel="noreferrer" className="hover:underline">linkedin</a>
      </p>
      <p className="mt-4 text-xl">
        <a href="/resume.pdf" className="text-yellow-200 hover:text-yellow-100">psst... here's my resume</a>
      </p>
    </header>
  );
}


