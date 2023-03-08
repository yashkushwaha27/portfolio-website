import { HashRouter } from 'react-router-dom';
import { Global, css } from '@emotion/react';
import Main from './Main';
import Header from '@components/header';
import { homeBackground } from '@assets/images';
import { PoppinsFonts } from '@theme/fontsFamily';

const App = () => (
  <HashRouter>
    <Global
      styles={[
        css`
          ${PoppinsFonts}
        `,
        {
          'html, body, main, #root': {
            height: '100%',
            padding: 0,
            margin: 0,
            fontFamily: "'Poppins','sans-sarif'",
            backgroundImage: `url(${homeBackground})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            overflow: 'hidden',
          },
        },
      ]}
    />
    <Header />
    <Main />
  </HashRouter>
);

export default App;
