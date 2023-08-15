import '../styles/globals.css';
import { appWithTranslation } from 'next-i18next';
import { ColNumContextProvider } from '@/utils/SettingsContext';

function App({ Component, pageProps }) {
  return (
    <ColNumContextProvider>
      <Component {...pageProps} />
    </ColNumContextProvider>
  );
}

export default appWithTranslation(App);
