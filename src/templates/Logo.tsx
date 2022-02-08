import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '44' : '32';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`text-gray-900 inline-flex items-center ${fontStyle}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 152.39999 152.39999"
        version="1.1"
      >
        <g display="inline" transform="translate(-28.672 -72.3)">
          <g>
            <circle
              cx="104.872"
              cy="148.5"
              r="76.2"
              fill="#d2ffff"
              fillOpacity="1"
              fillRule="evenodd"
              strokeWidth="0.265"
            ></circle>
            <path
              fill="#09c3db"
              fillOpacity="1"
              fillRule="evenodd"
              strokeWidth="1"
              d="M471.037 498.855c-5.073-.093-13.622.051-18.438.441-81.733 6.625-171.984 129.572-249.648 129.315-40.493-.133-65.106-60.002-92.953-96.191a288 288 0 00-1.629 28.84c0 159.058 128.942 288 288 288 132.652-.063 248.103-90.725 279.617-219.578-54.23-64.739-135.924-129.569-204.95-130.827z"
              transform="scale(.26458)"
            ></path>
            <path
              fill="#024b86"
              fillOpacity="1"
              fillRule="evenodd"
              strokeWidth="1"
              d="M281.031 473.08c-67.015.335-135.148 64.826-169.504 130.588C132.536 744.785 253.697 849.25 396.37 849.26c73.494-.022 140.596-27.584 191.496-72.961-78.53-30.315-100.373-43.972-129.877-79.44-59.02-70.951-105.285-214.395-161.642-222.707a101.38 101.38 0 00-15.315-1.072z"
              transform="scale(.26458)"
            ></path>
            <path
              fill="#ffac33"
              strokeWidth="3.528"
              d="M157.569 140.213a3.534 3.534 0 00-3.31-2.297h-42.597l24.57-47.773a3.526 3.526 0 00-.955-4.385 3.514 3.514 0 00-2.184-.758c-.821 0-1.644.29-2.303.857l-25.919 22.384-51.692 44.644a3.524 3.524 0 00-1.001 3.898 3.532 3.532 0 003.305 2.3h42.598L73.51 206.856a3.526 3.526 0 00.956 4.385 3.511 3.511 0 002.183.759c.822 0 1.644-.289 2.304-.857l25.919-22.384 51.692-44.644a3.53 3.53 0 001.005-3.902z"
            ></path>
          </g>
        </g>
      </svg>
      &nbsp;&nbsp;
      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
