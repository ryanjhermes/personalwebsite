import Header from '@/components/Header';
import Projects from '@/components/Projects';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center px-6 py-12">
      <Header />
      <Projects />
    </main>
  );
}


