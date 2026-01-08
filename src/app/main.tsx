import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './styles/fonts.css'
import './styles/index.css'
import App from './App.tsx'
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from 'shared/store';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter
      basename={import.meta.env.PROD ? '/NFT' : '/'}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
