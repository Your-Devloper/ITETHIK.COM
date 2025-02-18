import { servicesPage } from '../../lib/pageConfig';

export default function Services() {
  return (
    <>
      <title>{servicesPage.title}</title>
      <meta name="description" content={servicesPage.desc} />
      <div>Services</div>
    </>
  );
}
