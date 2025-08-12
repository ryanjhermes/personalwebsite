import Header from '@/components/Header';
import Projects from '@/components/Projects';

export default function HomePage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center px-6 py-16">
      {/* center column */}
      <div className="w-full max-w-5xl">
        <Header />
        <Projects />
      </div>

      {/* decorative gradient orb */}
      <div className="pointer-events-none absolute -z-0 left-1/2 top-1/4 h-80 w-80 -translate-x-1/2 rounded-full blur-3xl opacity-30"
           style={{ background: 'radial-gradient(circle at 50% 50%, #328bff66, transparent 60%)' }} />
    </main>
  );
}


