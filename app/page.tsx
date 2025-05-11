import Hero from '@/components/hero';
import About from '@/components/about';
import Experience from '@/components/experience';
import Projects from '@/components/projects';
import Contact from '@/components/contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Abhijith H Nair | Senior Software Developer',
  description:
    'Portfolio of Abhijith H Nair, a Senior Software Developer specializing in JavaScript, TypeScript, React.js,NextJS, Node.js.',
};

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Experience />
      <Projects />
      {/* <Education /> */}
      {/* <Blog /> */}
      <Contact />
    </div>
  );
}
