import { jobsPage } from '../../lib/pageConfig';

export default function Jobs() {
  return (
    <>
      <title>{jobsPage.title}</title>
      <meta name="description" content={jobsPage.desc} />
      <div>Jobs</div>
    </>
  );
}
