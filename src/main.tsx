import App from '@/App';
import { ShowProvider } from '@/store';
import '@/utilities/scss/global.scss';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ShowProvider>
      <App />
    </ShowProvider>
  </StrictMode>,
);
s;
