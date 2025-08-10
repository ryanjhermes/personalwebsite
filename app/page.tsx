import Image from 'next/image';

export default function HomePage() {
  return (
    <main style={{ minHeight: '100vh', background: '#000', color: '#e3e3e3', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <header style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', margin: 0 }}>
          <span style={{ fontWeight: 300 }}>hi, i'm </span>
          <span style={{ textShadow: '0 0 30px #757575', fontWeight: 500 }}>Ryan Hermes</span>
        </h1>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 300, marginTop: '0.5rem' }}>
          and I love <strong style={{ color: '#21b13b' }}>business</strong> + <strong style={{ color: '#ff806f' }}>technology</strong>
        </h2>
        <p style={{ marginTop: '1rem' }}>
          <a href="mailto:rryanhermes@gmail.com" style={{ color: '#328bff', textDecoration: 'none' }}>rryanhermes@gmail.com</a>
          {' · '}612-469-1552{' · '}
          <a href="https://www.linkedin.com/in/ryanhermes" target="_blank" rel="noreferrer" style={{ color: '#328bff', textDecoration: 'none' }}>linkedin</a>
        </p>
        <p style={{ marginTop: '1.4rem', fontSize: '1.3rem' }}>
          <a href="/resume.pdf" style={{ color: 'rgb(244,218,149)', textDecoration: 'none' }}>psst... here's my resume</a>
        </p>
      </header>

      <section style={{ marginTop: '3rem', maxWidth: 720, width: '100%' }}>
        <h3 style={{ color: '#a0ffa0', marginBottom: '1rem' }}>Some things I've built:</h3>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '1rem' }}>
          <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Image src="/StartupShuffler.png" alt="StartupShuffler" width={50} height={50} />
            <a href="https://ryanjhermes.github.io/StartupShuffler/" target="_blank" rel="noreferrer" style={{ color: '#e3e3e3', textDecoration: 'none' }}>
              StartupShuffler: Discovering seed and pre-seed startups can be easy and fun
            </a>
          </li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Image src="/Scout AI.png" alt="Scout AI" width={50} height={50} />
            <a href="https://chromewebstore.google.com/detail/scout-ai/dbejpjnffdchjpcekapojgahfbdamjki?hl=en" target="_blank" rel="noreferrer" style={{ color: '#e3e3e3', textDecoration: 'none' }}>
              Scout AI: Enhance your web browsing experience
            </a>
          </li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Image src="/TFPM.png" alt="TFPM" width={50} height={50} />
            <a href="https://www.kaggle.com/code/ryanhermes/tfpm-evaluating-a-defender-s-tackling-ability" target="_blank" rel="noreferrer" style={{ color: '#e3e3e3', textDecoration: 'none' }}>
              Tackle Factor Predictive Model: Kaggle Competition
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}


