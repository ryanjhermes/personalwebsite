import Image from 'next/image';

const items = [
  {
    href: 'https://cliseo.com',
    src: '/cliseo.png',
    alt: 'cliseo',
    text: 'cliseo: Optimize your website for SEO in 30 seconds; open source',
  },
  {
    href: 'https://ryanjhermes.github.io/StartupShuffler/',
    src: '/StartupShuffler.png',
    alt: 'StartupShuffler',
    text: 'StartupShuffler: Discovering seed and pre-seed startups can be easy and fun',
  },
  {
    href: 'https://chromewebstore.google.com/detail/scout-ai/dbejpjnffdchjpcekapojgahfbdamjki?hl=en',
    src: '/Scout AI.png',
    alt: 'Scout AI',
    text: 'Scout AI: Enhance your web browsing experience',
  },
  {
    href: 'https://www.kaggle.com/code/ryanhermes/tfpm-evaluating-a-defender-s-tackling-ability',
    src: '/TFPM.png',
    alt: 'TFPM',
    text: 'Tackle Factor Predictive Model: Kaggle Competition',
  },
];

export default function Projects() {
  return (
    <section className="relative z-10 mt-14 w-full max-w-4xl">
      <div className="mb-6 flex items-end justify-between">
        <h3 className="text-xl font-medium tracking-tight">Some things I've built</h3>
        <div className="text-xs text-ink/60">Updated regularly</div>
      </div>

      <ul className="grid gap-4 sm:grid-cols-2">
        {items.map((it) => (
          <li key={it.href} className="group card p-4">
            <a href={it.href} target="_blank" rel="noreferrer" className="flex items-center gap-4">
              <Image
                src={it.src}
                alt={it.alt}
                width={56}
                height={56}
                className="rounded-lg shadow-sm group-hover:scale-[1.03] transition"
              />
              <span className="text-sm text-ink/90 group-hover:text-ink">{it.text}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}


