import React from 'react';

const O = ({ width, height, fill }) => {
  return (
    <svg
      width={width || '20'}
      height={height || '21'}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 10.2456C20 4.72276 15.5229 0.245605 10 0.245605C4.47718 0.245605 3.05176e-05 4.72276 3.05176e-05 10.2456C3.05176e-05 15.7685 4.47718 20.2456 10 20.2456C15.5229 20.2456 20 15.7685 20 10.2456ZM5.92596 10.2456C5.92596 7.99556 7.74998 6.17153 10 6.17153C12.2501 6.17153 14.0741 7.99556 14.0741 10.2456C14.0741 12.4957 12.2501 14.3197 10 14.3197C7.74998 14.3197 5.92596 12.4957 5.92596 10.2456Z"
        fill={fill || '#D6ECFF'}
      />
    </svg>
  );
};

export default O;
