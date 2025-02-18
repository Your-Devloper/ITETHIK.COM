import { contactPage } from '../../lib/pageConfig';

export default function Contact() {
  return (
    <>
      <title>{contactPage.title}</title>
      <meta name="description" content={contactPage.desc} />
      <div>Contact</div>
    </>
  );
}
