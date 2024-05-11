'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const Providers = ({ children }) => {
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color="#ee7001"
        options={{ showSpinner: true }}
        shallowRouting
      />
    </>
  );
};

export default Providers;