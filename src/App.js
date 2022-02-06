import Header from './layouts/Header';
import { ToastContainer, toast } from 'react-toastify';
import RouteConfig from './routes/routeConfig';
import './App.css';
import { useEffect } from 'react';
import MainLayout from './layouts/MainLayout';

import Footer from './layouts/Footer';

function App() {
  useEffect(() => {
    document.title = 'Zerious : Be Zerious on hobbies.';
  }, []);

  return (
    <div className="App relative">
      <Header />
      <MainLayout>
        <RouteConfig />
        <ToastContainer theme="dark" />
      </MainLayout>
      <Footer />
    </div>
  );
}

export default App;
