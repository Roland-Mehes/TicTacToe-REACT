import React from 'react';

const Restart = ({ width, height, fill }) => {
  return (
    <svg
      width={width || '20'}
      height={height || '21'}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Redo Icon">
        <path
          id="Path"
          d="M19.5241 0.245606H17.644C17.3812 0.245326 17.1679 0.458246 17.1676 0.721245C17.1676 0.728965 17.1678 0.736686 17.1681 0.744406L17.3268 4.02852C15.46 1.82736 12.7198 0.559886 9.83484 0.563046C4.41536 0.563086 -0.00395734 4.98884 2.65924e-06 10.4119C0.00396266 15.8436 4.40584 20.2456 9.83484 20.2456C12.2702 20.249 14.6195 19.3449 16.425 17.7095C16.6208 17.5341 16.6375 17.233 16.4622 17.0371C16.4563 17.0305 16.4502 17.0241 16.444 17.0178L15.0957 15.6686C14.9186 15.4915 14.6346 15.4819 14.4461 15.6468C11.5521 18.1946 7.14188 17.9125 4.59564 15.0165C2.0494 12.1206 2.3314 7.70748 5.22544 5.1596C8.11948 2.61172 12.5297 2.89388 15.0759 5.78984C15.2755 6.01684 15.4601 6.25656 15.6287 6.50748L11.6024 6.31424C11.3398 6.30176 11.1169 6.50456 11.1044 6.76728C11.104 6.775 11.1038 6.78272 11.1039 6.79044V8.6718C11.1039 8.9348 11.3169 9.148 11.5798 9.148H19.5242C19.787 9.148 20 8.9348 20 8.6718V0.721806C20 0.458806 19.787 0.245606 19.5241 0.245606Z"
          fill={fill || '#D6ECFF'}
        />
      </g>
    </svg>
  );
};

export default Restart;
