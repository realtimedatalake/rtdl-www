import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Background color="bg-gold-200">
    <Section yPadding="py-0">
      <CTABanner
        title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        subtitle="Start your Free Trial."
        button={
          <Link href="https://creativedesignsguru.com/category/nextjs/">
            <a>
              <Button>Get Started</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Banner };
