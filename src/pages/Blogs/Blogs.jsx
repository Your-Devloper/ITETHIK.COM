import { blogsPage } from '../../lib/pageConfig';

export default function Blogs() {
  return (
    <>
      <title>{blogsPage.title}</title>
      <meta name="description" content={blogsPage.desc} />
      <div>Blogs</div>
    </>
  );
}
