import {RoutesList} from './routes';
import {useTheme} from 'shared/hooks';
import 'swiper/css';

function App() {
  useTheme();

  return (
    <div className="app">
      <RoutesList />
    </div>
  )
}

export default App
