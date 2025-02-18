import { notFoundPage } from '../../lib/pageConfig';

export default function NotFound() {
  return (
    <>
      <title>{notFoundPage.title}</title>
      <meta name="description" content={notFoundPage.desc} />
      <div>NotFound</div>
    </>
  );
}
