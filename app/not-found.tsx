export default function NotFound() {
  return (
    <main style={{ minHeight: '70vh', display: 'grid', placeItems: 'center', background: '#000', color: '#e3e3e3', padding: '2rem' }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ color: '#328bff', fontSize: '3rem', marginBottom: '0.5rem' }}>404</h1>
        <p>Oops! This page does not exist. If you were looking for my resume it's <a href="/resume.pdf" style={{ color: '#328bff' }}>here</a>.</p>
        <p><a href="/" style={{ color: '#fff', textDecoration: 'none', background: '#328bff', padding: '0.6rem 1rem', borderRadius: 6 }}>Go back to Home</a></p>
      </div>
    </main>
  );
}


