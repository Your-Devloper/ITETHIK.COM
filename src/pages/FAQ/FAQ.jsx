import { faqPage } from '../../lib/pageConfig';

export default function FAQ() {
  return (
    <>
      <title>{faqPage.title}</title>
      <meta name="description" content={faqPage.desc} />
      <div>FAQ</div>
    </>
  );
}
