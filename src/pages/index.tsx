import { Base } from '../templates/Base';
import { AppConfig } from '../utils/AppConfig';

const Index = () => (
  <Base
    title={AppConfig.title}
    description={AppConfig.description}
    canonical={AppConfig.url}
  />
);

export default Index;
