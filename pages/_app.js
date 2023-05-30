import '../styles/globals.css';
import { ColNumContextProvider } from '@/utils/SettingsContext';

export default function App({ Component, pageProps }) {
  return (
    <ColNumContextProvider>
      <Component {...pageProps} />
    </ColNumContextProvider>
  );
}
