import { aboutPage } from '../../lib/pageConfig';

export default function About() {
  return (
    <>
      <title>{aboutPage.title}</title>
      <meta name="description" content={aboutPage.desc} />
      <div>About</div>
    </>
  );
}
