import { ReactNode } from 'react';

type ICTABannerProps = {
  title: string;
  subtitle: string;
  button: ReactNode;
};

const CTABanner = (props: ICTABannerProps) => (
  <div className="text-center flex flex-col p-2 sm:text-left sm:flex-row sm:items-center sm:justify-between bg-gold-200">
    <div className="text-2xl font-semibold">
      <div className="text-gray-900">{props.title}</div>
      <div className="text-primary-600">{props.subtitle}</div>
    </div>

    <div className="whitespace-no-wrap mt-3 sm:mt-0 sm:ml-2">
      {props.button}
    </div>
  </div>
);

export { CTABanner };
