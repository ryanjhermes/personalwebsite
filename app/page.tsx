import Header from '@/components/Header';
import Projects from '@/components/Projects';

export default function HomePage() {
  return (
    <>
      <Header />
      <hr />
      <Projects />
      <hr />
      <p>
        <small>last updated: whenever i remember to</small>
      </p>
    </>
  );
}
