const items = [
  {
    href: 'https://cliseo.com',
    name: 'cliseo',
    text: 'optimize your website for SEO in 30 seconds; open source',
  },
  {
    href: 'https://ryanjhermes.github.io/StartupShuffler/',
    name: 'StartupShuffler',
    text: 'discovering seed and pre-seed startups can be easy and fun',
  },
  {
    href: 'https://chromewebstore.google.com/detail/scout-ai/dbejpjnffdchjpcekapojgahfbdamjki?hl=en',
    name: 'Scout AI',
    text: 'enhance your web browsing experience',
  },
  {
    href: 'https://www.kaggle.com/code/ryanhermes/tfpm-evaluating-a-defender-s-tackling-ability',
    name: 'Tackle Factor Predictive Model',
    text: 'kaggle competition',
  },
];

export default function Projects() {
  return (
    <>
      <h2>things i've built</h2>
      <ul>
        {items.map((it) => (
          <li key={it.href}>
            <a href={it.href}>{it.name}</a> - {it.text}
          </li>
        ))}
      </ul>
    </>
  );
}
