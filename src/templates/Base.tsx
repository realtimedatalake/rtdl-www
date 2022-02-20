import { Meta } from '../layout/Meta';
// import { AppConfig } from '../utils/AppConfig';
// import { Banner } from './Banner';
import { Footer } from './Footer';
import { Hero } from './Hero';
// import { VerticalFeatures } from './VerticalFeatures';

type IMetaProps = {
  title: string;
  description: string;
  canonical?: string;
};

const Base = (props: IMetaProps) => (
  <div className="antialiased text-gray-600">
    <Meta
      title={props.title}
      description={props.description}
      canonical={props.canonical}
    />
    <Hero />
    {/* <Banner /> */}
    {/* <VerticalFeatures /> */}
    <Footer />
  </div>
);

export { Base };
