import Header from './layouts/Header';
import { ToastContainer, toast } from 'react-toastify';
import RouteConfig from './routes/routeConfig';
import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = 'Zerious : Be Zerious on hobbies.';
  }, []);
  return (
    <div className="App relative">
      <main className="flex flex-col items-center z-10">
        <Header />
        <RouteConfig />
        <ToastContainer theme="dark" />
      </main>
    </div>
  );
}

export default App;
