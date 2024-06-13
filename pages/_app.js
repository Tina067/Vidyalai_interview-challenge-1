import React from 'react';
import PropTypes from 'prop-types';
import { WindowWidthProvider } from '../components/hooks/useWindowWidth';

function MyApp({ Component, pageProps }) {
  return (
    <WindowWidthProvider>
      <Component {...pageProps} />
    </WindowWidthProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object,
};

MyApp.defaultProps = {
  pageProps: {},
};

export default MyApp;


// import React from 'react';
// import { WindowWidthProvider } from '../components/hooks/useWindowWidth';

// function MyApp({ Component, pageProps }) {
//   return (
//     <WindowWidthProvider>
//       <Component {...pageProps} />
//     </WindowWidthProvider>
//   );
// }

// export default MyApp;