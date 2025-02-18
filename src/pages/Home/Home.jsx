import { Hero } from '@/components';
import { homePage } from '../../lib/pageConfig';

export default function Home() {
  return (
    <>
      <title>{homePage.title}</title>
      <meta name="description" content={homePage.desc} />

      <Hero />
    </>
  );
}
