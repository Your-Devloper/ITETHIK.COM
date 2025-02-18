import { projectsPage } from '../../lib/pageConfig';

export default function Projects() {
  return (
    <>
      <title>{projectsPage.title}</title>
      <meta name="description" content={projectsPage.desc} />
      <div>Projects</div>
    </>
  );
}
