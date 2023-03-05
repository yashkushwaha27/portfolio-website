import { BrowserRouter } from 'react-router-dom';
import { Global } from '@emotion/react';
import Main from './Main';
import Header from '@components/header';
import { homeBackground2 } from '@assets/images';

const App = () => (
  <BrowserRouter>
    <Global
      styles={{
        'html, body, main, #root': {
          height: '100%',
          padding: 0,
          margin: 0,
          fontFamily: "'Shantell Sans', cursive",
          backgroundImage: `url(${homeBackground2})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        },
      }}
    />
    <Header />
    <Main />
  </BrowserRouter>
);

export default App;
