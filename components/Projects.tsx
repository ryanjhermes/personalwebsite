import Image from 'next/image';

const items = [
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
    <section className="mt-12 w-full max-w-3xl">
      <h3 className="text-lime mb-4">Some things I've built:</h3>
      <ul className="grid gap-3">
        {items.map((it) => (
          <li key={it.href} className="group flex items-center gap-3 rounded-md p-3 bg-white/5 hover:bg-white/10 transition">
            <Image src={it.src} alt={it.alt} width={44} height={44} className="rounded shadow-sm group-hover:scale-105 transition" />
            <a href={it.href} target="_blank" rel="noreferrer" className="text-ink hover:text-sky transition">
              {it.text}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}


