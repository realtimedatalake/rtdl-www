import Link from 'next/link';
import GitHubButton from 'react-github-btn';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
// import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { NavbarFourColumns } from '../navigation/NavbarFourColumns';
import { AppConfig } from '../utils/AppConfig';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarFourColumns logo={<Logo xl />}>
        <li>
          <Link href="/">
            <a>⚡️ Home</a>
          </Link>
        </li>
        <li>
          <Link href="https://rtdl.io/docs/">
            <a>⚡️ Docs</a>
          </Link>
        </li>
        <li>
          <Link href="https://rtdl.io/blog/">
            <a>⚡️ Blog</a>
          </Link>
        </li>
        <li>
          {/* More details at https://buttons.github.io/ */}
          <GitHubButton
            href="https://github.com/realtimedatalake/rtdl"
            data-color-scheme="no-preference: light_high_contrast; light: light_high_contrast; dark: light_high_contrast;"
            data-size="large"
            data-show-count="true"
            aria-label="Star realtimedatalake/rtdl on GitHub"
          >
            Star
          </GitHubButton>
        </li>
      </NavbarFourColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            <span className="text-primary-500">{AppConfig.site_name}</span>
            {'\nThe Real-Time Data Lake\n'}
          </>
        }
        description={AppConfig.description}
        button={
          <Link href="https://github.com/realtimedatalake/rtdl">
            <a>
              <Button xl>Open Source on GitHub</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
