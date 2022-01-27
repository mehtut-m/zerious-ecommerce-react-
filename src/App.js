import Header from './layouts/Header';
import { ToastContainer, toast } from 'react-toastify';
import RouteConfig from './routes/routeConfig';
import './App.css';

function App() {
  return (
    <div className="App relative">
      <Header />
      <RouteConfig />

      <ToastContainer theme="dark" />
    </div>
  );
}

export default App;
